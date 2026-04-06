import {
    Fragment,
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
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

function closestCaretGapIndex(worldX, gapXs) {
    let best = 0;
    let bestDist = Infinity;
    for (let i = 0; i < gapXs.length; i++) {
        const d = Math.abs(worldX - gapXs[i]);
        if (d < bestDist) {
            bestDist = d;
            best = i;
        }
    }
    return best;
}
/** Trackpad pinch / ctrl+wheel: exp factor per wheel deltaY unit (matches settings zoom slider range). */
const WHEEL_ZOOM_SENSITIVITY = 0.01;

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
 * @param {number} [props.caretFollowNonce] — increment when the user types or moves the caret; resumes caret-centered scrolling after manual pan.
 * @param {(value: number | ((prev: number) => number)) => void} [props.setViewZoom] — pinch / ctrl+wheel zoom (same state as settings slider).
 * @param {(index: number) => void} [props.onCaretPlacement] — click on typing area: move caret to closest gap; should bump follow + focus editor.
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
    setViewZoom = null,
    caretFollowNonce = 0,
    onCaretPlacement = null,
}) {
    const zoomClamped = Math.min(
        Math.max(viewZoom, TYPE_VISUALIZER_VIEW_ZOOM_MIN),
        TYPE_VISUALIZER_VIEW_ZOOM_MAX,
    );
    const viewWidth = VIEWBOX_WIDTH / zoomClamped;
    const viewHeight = VIEWBOX_HEIGHT / zoomClamped;
    const [vbAdjust, setVbAdjust] = useState(0);
    /** When true, skip caret-based viewBox updates (user is panning with the wheel). Typing bumps `caretFollowNonce` to clear this. */
    const [manualPanActive, setManualPanActive] = useState(false);
    const svgRef = useRef(null);
    const draggingGuideline = useRef(null);
    const dragOffset = useRef(0);

    function clientToSvgY(clientY) {
        const pt = svgRef.current.createSVGPoint();
        pt.y = clientY;
        return pt.matrixTransform(svgRef.current.getScreenCTM().inverse()).y;
    }

    function clientToSvgXY(clientX, clientY) {
        if (!svgRef.current) return null;
        const ctm = svgRef.current.getScreenCTM();
        if (!ctm) return null;
        const pt = svgRef.current.createSVGPoint();
        pt.x = clientX;
        pt.y = clientY;
        const p = pt.matrixTransform(ctm.inverse());
        return { x: p.x, y: p.y };
    }

    function handleGuideLineChange(key) {
        return (e) => {
            e.preventDefault();
            draggingGuideline.current = key;
            dragOffset.current = clientToSvgY(e.clientY) - guideLines[key];
        };
    }

    function handleGuidelineDrag(e) {
        if (!draggingGuideline.current || !svgRef.current) return;
        const key = draggingGuideline.current;
        const svgY = clientToSvgY(e.clientY);
        setGuideLines((prev) => ({ ...prev, [key]: svgY - dragOffset.current }));
    }

    function handleGuidelineRelease() {
        draggingGuideline.current = null;
    }

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
        [line, glyphStates, caretIndex, resolveNodeSizeForLayout, wordSpaceWidth, guideLines],
    );

    const lineEndX = useMemo(
        () =>
            computeCaretWorldX(
                line,
                glyphStates,
                line.length,
                RIGHT_SPACING,
                resolveNodeSizeForLayout,
                wordSpaceWidth,
                guideLines,
            ),
        [line, glyphStates, resolveNodeSizeForLayout, wordSpaceWidth, guideLines],
    );

    /** World X of each insertion gap `i` (before `line[i]`), length `line.length + 1`. */
    const gapWorldXs = useMemo(() => {
        const xs = [];
        for (let i = 0; i <= line.length; i++) {
            xs.push(
                computeCaretWorldX(
                    line,
                    glyphStates,
                    i,
                    RIGHT_SPACING,
                    resolveNodeSizeForLayout,
                    wordSpaceWidth,
                    guideLines,
                ),
            );
        }
        return xs;
    }, [line, glyphStates, resolveNodeSizeForLayout, wordSpaceWidth, guideLines]);

    const handleSvgMouseDown = useCallback(
        (e) => {
            if (e.button !== 0 || !onCaretPlacement) return;
            if (e.defaultPrevented) return;
            if (e.target.closest?.("[data-skip-typeviz-caret]")) return;
            const xy = clientToSvgXY(e.clientX, e.clientY);
            if (!xy) return;
            const idx = closestCaretGapIndex(xy.x, gapWorldXs);
            onCaretPlacement(idx);
        },
        [onCaretPlacement, gapWorldXs],
    );

    const lastCaretFollowNonceRef = useRef(caretFollowNonce);

    const viewLeftNum = vbAdjust - VIEWBOX_LEFT_PAD;
    const viewRightNum = viewLeftNum + viewWidth;

    /** Keep the ascender–descender band in the vertical middle of the view as `viewHeight` changes. */
    const viewVerticalCenterY = useMemo(
        () => (guideLines.ascender + guideLines.descender) / 2,
        [guideLines.ascender, guideLines.descender],
    );
    const viewMinY = viewVerticalCenterY - viewHeight / 2;

    useLayoutEffect(() => {
        const typedSinceLastLayout = caretFollowNonce !== lastCaretFollowNonceRef.current;
        if (typedSinceLastLayout) lastCaretFollowNonceRef.current = caretFollowNonce;

        setVbAdjust((vb) => {
            const viewLeft = vb - VIEWBOX_LEFT_PAD;
            const minViewLeft = TYPE_VISUALIZER_GUIDELINE_LABEL_X;
            const maxViewLeft = Math.max(minViewLeft, lineEndX + CARET_VIEW_MARGIN - viewWidth);

            const clampViewLeft = (vl) => Math.min(Math.max(vl, minViewLeft), maxViewLeft);

            const followCaret = typedSinceLastLayout || !manualPanActive;

            if (followCaret) {
                const viewRight = viewLeft + viewWidth;
                let nextVb = vb;
                if (caretX < viewLeft + CARET_VIEW_MARGIN) {
                    nextVb = caretX - CARET_VIEW_MARGIN + VIEWBOX_LEFT_PAD;
                } else if (caretX > viewRight - CARET_VIEW_MARGIN) {
                    nextVb = caretX - viewWidth + CARET_VIEW_MARGIN + VIEWBOX_LEFT_PAD;
                }
                let viewLeftAfter = nextVb - VIEWBOX_LEFT_PAD;
                if (caretIndex === 0 && viewLeftAfter > TYPE_VISUALIZER_GUIDELINE_LABEL_X) {
                    nextVb = TYPE_VISUALIZER_GUIDELINE_LABEL_X + VIEWBOX_LEFT_PAD;
                    viewLeftAfter = TYPE_VISUALIZER_GUIDELINE_LABEL_X;
                }
                const clamped = clampViewLeft(viewLeftAfter);
                return clamped + VIEWBOX_LEFT_PAD;
            }

            return clampViewLeft(viewLeft) + VIEWBOX_LEFT_PAD;
        });

        if (typedSinceLastLayout) setManualPanActive(false);
    }, [caretFollowNonce, caretX, caretIndex, viewWidth, manualPanActive, lineEndX]);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        const onWheel = (e) => {
            const pinchOrZoomGesture = e.ctrlKey && setViewZoom && e.deltaY !== 0;

            if (pinchOrZoomGesture) {
                e.preventDefault();
                setViewZoom((prev) => {
                    const p = Math.min(
                        Math.max(prev, TYPE_VISUALIZER_VIEW_ZOOM_MIN),
                        TYPE_VISUALIZER_VIEW_ZOOM_MAX,
                    );
                    const next = p * Math.exp(-e.deltaY * WHEEL_ZOOM_SENSITIVITY);
                    return Math.min(
                        Math.max(next, TYPE_VISUALIZER_VIEW_ZOOM_MIN),
                        TYPE_VISUALIZER_VIEW_ZOOM_MAX,
                    );
                });
                return;
            }

            const rawDx = e.deltaX;
            const rawDy = e.deltaY;
            const dx = rawDx !== 0 ? rawDx : e.shiftKey ? rawDy : 0;
            if (dx === 0) return;

            e.preventDefault();
            setManualPanActive(true);

            const rect = svg.getBoundingClientRect();
            if (rect.width <= 0) return;
            const scale = viewWidth / rect.width;
            const dViewLeft = dx * scale;

            setVbAdjust((vb) => {
                const viewLeft = vb - VIEWBOX_LEFT_PAD;
                const minViewLeft = TYPE_VISUALIZER_GUIDELINE_LABEL_X;
                const maxViewLeft = Math.max(minViewLeft, lineEndX + CARET_VIEW_MARGIN - viewWidth);
                let next = viewLeft + dViewLeft;
                next = Math.min(Math.max(next, minViewLeft), maxViewLeft);
                return next + VIEWBOX_LEFT_PAD;
            });
        };

        svg.addEventListener("wheel", onWheel, { passive: false });
        return () => svg.removeEventListener("wheel", onWheel);
    }, [viewWidth, lineEndX, setViewZoom]);

    let cursor = 0;

    return (
        <div className="aspect-[5/3] w-[min(95vw,1500px)] max-w-[1500px] mx-auto mt-10">
            <svg
                ref={svgRef}
                className="w-full h-full block cursor-text"
                viewBox={`${vbAdjust - VIEWBOX_LEFT_PAD} ${viewMinY} ${viewWidth} ${viewHeight}`}
                onMouseDown={handleSvgMouseDown}
                onMouseMove={handleGuidelineDrag}
                onMouseUp={handleGuidelineRelease}
                onMouseLeave={handleGuidelineRelease}
            >
                {seeGuidelines && (
                    <g stroke="#7020BF" strokeWidth="1.5">
                        {[
                            { key: "ascender", label: "Ascender" },
                            { key: "cap_height", label: "Cap Height" },
                            { key: "x_height", label: "X Height" },
                            { key: "baseline", label: "Baseline" },
                            { key: "descender", label: "Descender" },
                        ].map(({ key, label }) => (
                            <g
                                key={key}
                                onMouseDown={handleGuideLineChange(key)}
                                cursor="ns-resize"
                            >
                                <text
                                    x={TYPE_VISUALIZER_GUIDELINE_LABEL_X}
                                    y={guideLines[key] - 8}
                                    fontSize="16"
                                    fill="#7020BF"
                                    stroke="none"
                                >
                                    {label}
                                </text>
                                <line
                                    x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                                    y1={guideLines[key]}
                                    x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                                    y2={guideLines[key]}
                                />
                                <line
                                    x1={viewLeftNum - GUIDELINE_LINE_OVERHANG}
                                    y1={guideLines[key]}
                                    x2={viewRightNum + GUIDELINE_LINE_OVERHANG}
                                    y2={guideLines[key]}
                                    stroke="transparent"
                                    strokeWidth="10"
                                />
                            </g>
                        ))}
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
                    stroke="#7020BF"
                    strokeWidth="3"
                    className="animate-[blink_1s_infinite] cursor-default"
                />
            </svg>
        </div>
    );
}
