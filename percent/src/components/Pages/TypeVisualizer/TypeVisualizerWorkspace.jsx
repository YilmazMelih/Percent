import { Fragment, useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import AdjustedGlyph from "./AdjustedGlyph";
import { getAdjustedGlyphBoundsX } from "../../../engine/project";

const VIEWBOX_LEFT_PAD = 130;
const VIEWBOX_WIDTH = 1000;
const VIEWBOX_HEIGHT = 400;
/** Slider maps to viewBox size as base/zoom: lower = zoom out (more text), higher = zoom in. */
export const TYPE_VISUALIZER_VIEW_ZOOM_MIN = 0.35;
export const TYPE_VISUALIZER_VIEW_ZOOM_MAX = 2.5;
export const TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT = 1;
const CARET_VIEW_MARGIN = 56;
const RIGHT_SPACING = 10;
/** X position of guideline labels; when caret is at column 0 we cap pan so this stays visible. */
export const TYPE_VISUALIZER_GUIDELINE_LABEL_X = -130;
/** Horizontal advance for Space (word space), SVG units — tweak here only. */
export const TYPE_VISUALIZER_WORD_SPACE_WIDTH = 100;
export const TYPE_VISUALIZER_MAX_LINE_CHARS = 50;
/** How far past the visible viewBox edges guideline horizontals extend (feels “infinite”). */
const GUIDELINE_LINE_OVERHANG = 800;

export function isTypeVisualizerSpaceEntry(entry) {
    return entry?.kind === "space";
}

/**
 * X position in SVG space for the gap before `line[caretIndex]`.
 * @param {(instance: { instanceId: string, stateKey: string }, slice: object) => number[] | null} [resolveNodeSize]
 */
export function computeCaretWorldX(
    line,
    glyphStates,
    caretIndex,
    gap = RIGHT_SPACING,
    resolveNodeSize = null,
    wordSpaceWidth = TYPE_VISUALIZER_WORD_SPACE_WIDTH,
    guideLines,
) {
    let x = 0;
    for (let i = 0; i < caretIndex; i++) {
        const inst = line[i];
        if (isTypeVisualizerSpaceEntry(inst)) {
            x += wordSpaceWidth + gap;
            continue;
        }
        const slice = glyphStates[inst?.stateKey];
        if (!slice) continue;
        const nodeSize = resolveNodeSize ? resolveNodeSize(inst, slice) : slice.nodeSize;
        if (!nodeSize) continue;
        const { minX, maxX } = getAdjustedGlyphBoundsX(
            slice.config,
            nodeSize,
            slice.nodeX,
            slice.nodeY,
            guideLines,
        );
        x += maxX - minX + gap;
    }
    return x;
}

/**
 * @param {Object} props
 * @param {{ instanceId: string, stateKey: string }[]} props.line
 * @param {Record<string, { config: object, nodeSize: number[], nodeX: number[], nodeY: number[] }>} props.glyphStates
 * @param {number} props.caretIndex
 * @param {(stateKey: string) => (value: unknown) => void} props.setNodeSizeByKey
 */
export default function TypeVisualizerWorkspace({
    line,
    glyphStates,
    caretIndex,
    seeNodes,
    seePathPoints,
    seeGuidelines,
    guideLines,
    setGuideLines,
    setNodeSizeByKey,
    wordSpaceWidth = TYPE_VISUALIZER_WORD_SPACE_WIDTH,
    viewZoom = TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT,
}) {
    const zoomClamped = Math.min(
        Math.max(viewZoom, TYPE_VISUALIZER_VIEW_ZOOM_MIN),
        TYPE_VISUALIZER_VIEW_ZOOM_MAX,
    );
    const viewWidth = VIEWBOX_WIDTH / zoomClamped;
    const viewHeight = VIEWBOX_HEIGHT / zoomClamped;
    const [vbAdjust, setVbAdjust] = useState(0);

    /** While non-null, peers sharing `stateKey` render at `frozenNodeSize`; active instance uses `previewNodeSize`. */
    const [ringIsolate, setRingIsolate] = useState(null);
    const [previewNodeSize, setPreviewNodeSize] = useState(null);
    const ringIsolateRef = useRef(null);
    const previewRef = useRef(null);

    const handleRingPointerDown = useCallback(
        (instance) => {
            let committedKey = null;
            let committedSizes = null;
            if (ringIsolateRef.current && previewRef.current) {
                committedKey = ringIsolateRef.current.stateKey;
                committedSizes = [...previewRef.current];
                setNodeSizeByKey(committedKey)(committedSizes);
            }
            const slice = glyphStates[instance.stateKey];
            if (!slice) return;
            const frozen =
                committedKey === instance.stateKey && committedSizes
                    ? [...committedSizes]
                    : [...slice.nodeSize];
            previewRef.current = frozen;
            ringIsolateRef.current = {
                instanceId: instance.instanceId,
                stateKey: instance.stateKey,
                frozenNodeSize: frozen,
            };
            setRingIsolate({ ...ringIsolateRef.current });
            setPreviewNodeSize(frozen);
        },
        [glyphStates, setNodeSizeByKey],
    );

    const handleRingPointerUp = useCallback(() => {
        const meta = ringIsolateRef.current;
        if (meta && previewRef.current) {
            setNodeSizeByKey(meta.stateKey)(previewRef.current);
        }
        ringIsolateRef.current = null;
        previewRef.current = null;
        setRingIsolate(null);
        setPreviewNodeSize(null);
    }, [setNodeSizeByKey]);

    const resolveNodeSizeForLayout = useCallback(
        (instance, slice) => {
            if (!ringIsolate) return slice.nodeSize;
            if (instance.instanceId === ringIsolate.instanceId) {
                return previewNodeSize ?? slice.nodeSize;
            }
            if (instance.stateKey === ringIsolate.stateKey) {
                return ringIsolate.frozenNodeSize;
            }
            return slice.nodeSize;
        },
        [ringIsolate, previewNodeSize],
    );

    const setPreviewNodeSizes = useCallback((updater) => {
        setPreviewNodeSize((prev) => {
            const frozen = ringIsolateRef.current?.frozenNodeSize;
            const base =
                prev && prev.length > 0
                    ? [...prev]
                    : frozen && frozen.length > 0
                      ? [...frozen]
                      : [];
            const next = typeof updater === "function" ? updater(base) : updater;
            previewRef.current = next;
            return next;
        });
    }, []);

    const caretX = useMemo(
        () =>
            computeCaretWorldX(
                line,
                glyphStates,
                caretIndex,
                RIGHT_SPACING,
                resolveNodeSizeForLayout,
                wordSpaceWidth,
                guideLines,
            ),
        [line, glyphStates, caretIndex, resolveNodeSizeForLayout, wordSpaceWidth],
    );

    const viewLeftNum = vbAdjust - VIEWBOX_LEFT_PAD;
    const viewRightNum = viewLeftNum + viewWidth;

    /** Keep the ascender–descender band in the vertical middle of the view as `viewHeight` changes. */
    const viewVerticalCenterY = useMemo(
        () => (guideLines.ascender + guideLines.descender) / 2,
        [guideLines.ascender, guideLines.descender],
    );
    const viewMinY = viewVerticalCenterY - viewHeight / 2;

    useLayoutEffect(() => {
        setVbAdjust((vb) => {
            const viewLeft = vb - VIEWBOX_LEFT_PAD;
            const viewRight = viewLeft + viewWidth;
            let next = vb;
            if (caretX < viewLeft + CARET_VIEW_MARGIN) {
                next = caretX - CARET_VIEW_MARGIN + VIEWBOX_LEFT_PAD;
            } else if (caretX > viewRight - CARET_VIEW_MARGIN) {
                next = caretX - viewWidth + CARET_VIEW_MARGIN + VIEWBOX_LEFT_PAD;
            }
            const viewLeftAfter = next - VIEWBOX_LEFT_PAD;
            if (caretIndex === 0 && viewLeftAfter > TYPE_VISUALIZER_GUIDELINE_LABEL_X) {
                next = TYPE_VISUALIZER_GUIDELINE_LABEL_X + VIEWBOX_LEFT_PAD;
            }
            return next;
        });
    }, [caretX, caretIndex, viewWidth]);

    let cursor = 0;

    return (
        <div className="aspect-[5/3] w-[min(95vw,1500px)] max-w-[1500px] mx-auto mt-10">
            <svg
                className="w-full h-full block"
                viewBox={`${vbAdjust - VIEWBOX_LEFT_PAD} ${viewMinY} ${viewWidth} ${viewHeight}`}
            >
                {seeGuidelines && (
                    <g stroke="lightgray" strokeWidth="1.5">
                        <text
                            x={TYPE_VISUALIZER_GUIDELINE_LABEL_X}
                            y={guideLines.ascender - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Ascender
                        </text>
                        <line
                            x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                            y1={guideLines.ascender}
                            x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                            y2={guideLines.ascender}
                        />
                        <text
                            x={TYPE_VISUALIZER_GUIDELINE_LABEL_X}
                            y={guideLines.cap_height - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Cap Height
                        </text>
                        <line
                            x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                            y1={guideLines.cap_height}
                            x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                            y2={guideLines.cap_height}
                        />
                        <text
                            x={TYPE_VISUALIZER_GUIDELINE_LABEL_X}
                            y={guideLines.x_height - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            X Height
                        </text>
                        <line
                            x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                            y1={guideLines.x_height}
                            x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                            y2={guideLines.x_height}
                        />
                        <text
                            x={TYPE_VISUALIZER_GUIDELINE_LABEL_X}
                            y={guideLines.baseline - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Baseline
                        </text>
                        <line
                            x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                            y1={guideLines.baseline}
                            x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                            y2={guideLines.baseline}
                        />
                        <text
                            x={TYPE_VISUALIZER_GUIDELINE_LABEL_X}
                            y={guideLines.descender - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Descender
                        </text>
                        <line
                            x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                            y1={guideLines.descender}
                            x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                            y2={guideLines.descender}
                        />
                    </g>
                )}

                {line.map((instance) => {
                    if (isTypeVisualizerSpaceEntry(instance)) {
                        cursor += wordSpaceWidth + RIGHT_SPACING;
                        return <Fragment key={instance.instanceId} />;
                    }

                    const slice = glyphStates[instance.stateKey];
                    if (!slice) return null;

                    const nodeSizeRendered = resolveNodeSizeForLayout(instance, slice);

                    const { minX, maxX } = getAdjustedGlyphBoundsX(
                        slice.config,
                        nodeSizeRendered,
                        slice.nodeX,
                        slice.nodeY,
                        guideLines,
                    );
                    const width = maxX - minX;
                    const xAdjust = cursor - minX;
                    cursor += width + RIGHT_SPACING;

                    const isLiveDragTarget =
                        ringIsolate && instance.instanceId === ringIsolate.instanceId;

                    const ringDragHooks = {
                        onRingPointerDown: () => handleRingPointerDown(instance),
                        onRingPointerUp: handleRingPointerUp,
                    };

                    return (
                        <AdjustedGlyph
                            key={instance.instanceId}
                            config={slice.config}
                            nodeSize={nodeSizeRendered}
                            setNodeSize={
                                isLiveDragTarget
                                    ? setPreviewNodeSizes
                                    : setNodeSizeByKey(instance.stateKey)
                            }
                            nodeX={slice.nodeX}
                            nodeY={slice.nodeY}
                            seeNodes={seeNodes}
                            seePathPoints={seePathPoints}
                            xAdjust={xAdjust}
                            ringDragHooks={ringDragHooks}
                            guideLines={guideLines}
                        />
                    );
                })}
                <line
                    x1={caretX}
                    y1={guideLines.descender}
                    x2={caretX}
                    y2={guideLines.ascender}
                    stroke="#B8B8B8"
                    strokeWidth="3"
                    className="animate-[blink_1s_infinite]"
                />
            </svg>
        </div>
    );
}
