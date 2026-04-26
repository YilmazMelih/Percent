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
    normalizeGlyphX = true,
) {
    // Mirror the same horizontal placement model used by rendering.
    // In typing mode (normalizeGlyphX=true), glyphs are packed by width.
    // In glyph mode (normalizeGlyphX=false), glyphs keep their native x coords,
    // so the caret after a glyph should follow that glyph's native right edge.
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
            slice.pointDeltas,
        );
        const width = maxX - minX;
        if (normalizeGlyphX) {
            x += width + gap;
        } else {
            x = Math.max(x, maxX + gap);
        }
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
    setNodeXByKey = null,
    setNodeYByKey = null,
    setPointDeltasByKey = null,
    wordSpaceWidth = TYPE_VISUALIZER_WORD_SPACE_WIDTH,
    viewZoom = TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT,
    setViewZoom = null,
    caretFollowNonce = 0,
    onCaretPlacement = null,
    showCaret = true,
    centerSingleGlyph = false,
    normalizeGlyphX = true,
    compactMode = false,
    compactMaxWidth = 1000,
    expandedMaxWidth = 1500,
    viewBaseWidth = VIEWBOX_WIDTH,
    viewBaseHeight = VIEWBOX_HEIGHT,
    guidelineLabelX = TYPE_VISUALIZER_GUIDELINE_LABEL_X,
    guidelineLineOverhang = GUIDELINE_LINE_OVERHANG,
}) {
    const zoomClamped = Math.min(
        Math.max(viewZoom, TYPE_VISUALIZER_VIEW_ZOOM_MIN),
        TYPE_VISUALIZER_VIEW_ZOOM_MAX,
    );
    const viewWidth = viewBaseWidth / zoomClamped;
    const viewHeight = viewBaseHeight / zoomClamped;
    const [vbAdjust, setVbAdjust] = useState(0);
    /** When true, skip caret-based viewBox updates (user is panning with the wheel). Typing bumps `caretFollowNonce` to clear this. */
    const [manualPanActive, setManualPanActive] = useState(false);
    const svgRef = useRef(null);
    const [svgViewportAspect, setSvgViewportAspect] = useState(5 / 3);
    /**
     * DOM node of the SVG-tree top layer used to render active-node percent badges
     * above every glyph and node downstream. Stored as state (via callback ref) so
     * Node components re-render once the target exists and can safely portal.
     */
    const [topLayerEl, setTopLayerEl] = useState(null);
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

    // Track the rendered SVG aspect ratio once and on element resize.
    // Kept outside wheel handling so listeners are not re-bound on every
    // typing/pan/zoom-related render.
    useLayoutEffect(() => {
        const svg = svgRef.current;
        if (!svg) return undefined;

        const updateViewportAspect = () => {
            const rect = svg.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                setSvgViewportAspect(rect.width / rect.height);
            }
        };

        updateViewportAspect();

        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(updateViewportAspect);
            observer.observe(svg);
            return () => observer.disconnect();
        }

        window.addEventListener("resize", updateViewportAspect);
        return () => window.removeEventListener("resize", updateViewportAspect);
    }, []);

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
                normalizeGlyphX,
            ),
        [
            line,
            glyphStates,
            caretIndex,
            resolveNodeSizeForLayout,
            wordSpaceWidth,
            guideLines,
            normalizeGlyphX,
        ],
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
                normalizeGlyphX,
            ),
        [line, glyphStates, resolveNodeSizeForLayout, wordSpaceWidth, guideLines, normalizeGlyphX],
    );

    /**
     * Exact rendered right-most x of visible glyph content.
     * This mirrors the same placement math used during rendering (cursor + xAdjust),
     * so pan clamping can be based on true geometry rather than inferred caret width.
     */
    const renderedRightX = useMemo(() => {
        let cursorX = 0;
        let maxRight = 0;

        for (const instance of line) {
            if (isTypeVisualizerSpaceEntry(instance)) {
                cursorX += wordSpaceWidth + RIGHT_SPACING;
                continue;
            }

            const slice = glyphStates[instance?.stateKey];
            if (!slice) continue;

            const nodeSizeRendered = resolveNodeSizeForLayout(instance, slice);
            const { minX, maxX } = getAdjustedGlyphBoundsX(
                slice.config,
                nodeSizeRendered,
                slice.nodeX,
                slice.nodeY,
                guideLines,
                slice.pointDeltas,
            );

            const width = maxX - minX;
            const xAdjust = normalizeGlyphX ? cursorX - minX : 0;
            maxRight = Math.max(maxRight, xAdjust + maxX);

            if (normalizeGlyphX) {
                cursorX += width + RIGHT_SPACING;
            }
        }

        return maxRight;
    }, [line, glyphStates, resolveNodeSizeForLayout, wordSpaceWidth, guideLines, normalizeGlyphX]);

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
                    normalizeGlyphX,
                ),
            );
        }
        return xs;
    }, [line, glyphStates, resolveNodeSizeForLayout, wordSpaceWidth, guideLines, normalizeGlyphX]);

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
    // With preserveAspectRatio="xMinYMid slice", only a subset of the viewBox
    // may be visible horizontally when the viewport is narrower than the viewBox ratio.
    // Use this effective visible width for all horizontal clamp/pan math.
    const visibleWorldWidth = Math.min(viewWidth, viewHeight * svgViewportAspect);
    const viewRightNum = viewLeftNum + visibleWorldWidth;
    const singleGlyphCenterX = Math.max(0, (lineEndX - RIGHT_SPACING) / 2);
    const singleGlyphGuidelineStartX = singleGlyphCenterX - viewBaseWidth / 2;
    const singleGlyphGuidelineEndX = singleGlyphCenterX + viewBaseWidth / 2;
    const guideLineStartX = centerSingleGlyph
        ? singleGlyphGuidelineStartX
        : viewLeftNum - guidelineLineOverhang;
    const guideLineEndX = centerSingleGlyph
        ? singleGlyphGuidelineEndX
        : viewRightNum + guidelineLineOverhang;
    const guideLineLabelX = centerSingleGlyph ? singleGlyphGuidelineStartX : guidelineLabelX;

    /** Keep the ascender–descender band in the vertical middle of the view as `viewHeight` changes. */
    const viewVerticalCenterY = useMemo(
        () => (guideLines.ascender + guideLines.descender) / 2,
        [guideLines.ascender, guideLines.descender],
    );
    const viewMinY = viewVerticalCenterY - viewHeight / 2;
    const prevCenterSingleGlyphRef = useRef(centerSingleGlyph);

    useEffect(() => {
        const wasCentered = prevCenterSingleGlyphRef.current;
        if (wasCentered && !centerSingleGlyph) {
            setVbAdjust(guidelineLabelX + VIEWBOX_LEFT_PAD);
        }
        prevCenterSingleGlyphRef.current = centerSingleGlyph;
    }, [centerSingleGlyph, guidelineLabelX]);

    useLayoutEffect(() => {
        if (centerSingleGlyph) {
            // Glyph mode: keep glyph and fixed guideline segment centered.
            setVbAdjust(singleGlyphCenterX - viewWidth / 2 + VIEWBOX_LEFT_PAD);
            return;
        }
        const typedSinceLastLayout = caretFollowNonce !== lastCaretFollowNonceRef.current;
        if (typedSinceLastLayout) lastCaretFollowNonceRef.current = caretFollowNonce;

        setVbAdjust((vb) => {
            const viewLeft = vb - VIEWBOX_LEFT_PAD;
            const minViewLeft = guidelineLabelX;
            const rightEdgeTarget = Math.max(renderedRightX, lineEndX, caretX);
            const maxViewLeft = Math.max(
                minViewLeft,
                rightEdgeTarget + CARET_VIEW_MARGIN - visibleWorldWidth,
            );

            const clampViewLeft = (vl) => Math.min(Math.max(vl, minViewLeft), maxViewLeft);

            const followCaret = typedSinceLastLayout || !manualPanActive;

            if (followCaret) {
                const viewRight = viewLeft + visibleWorldWidth;
                let nextVb = vb;
                if (caretX < viewLeft + CARET_VIEW_MARGIN) {
                    nextVb = caretX - CARET_VIEW_MARGIN + VIEWBOX_LEFT_PAD;
                } else if (caretX > viewRight - CARET_VIEW_MARGIN) {
                    nextVb = caretX - visibleWorldWidth + CARET_VIEW_MARGIN + VIEWBOX_LEFT_PAD;
                }
                let viewLeftAfter = nextVb - VIEWBOX_LEFT_PAD;
                if (caretIndex === 0 && viewLeftAfter > guidelineLabelX) {
                    nextVb = guidelineLabelX + VIEWBOX_LEFT_PAD;
                    viewLeftAfter = guidelineLabelX;
                }
                const clamped = clampViewLeft(viewLeftAfter);
                return clamped + VIEWBOX_LEFT_PAD;
            }

            return clampViewLeft(viewLeft) + VIEWBOX_LEFT_PAD;
        });

        if (typedSinceLastLayout) setManualPanActive(false);
    }, [
        caretFollowNonce,
        caretX,
        caretIndex,
        visibleWorldWidth,
        manualPanActive,
        lineEndX,
        renderedRightX,
        centerSingleGlyph,
        guidelineLabelX,
        singleGlyphCenterX,
    ]);

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
            if (dx === 0 || centerSingleGlyph) return;

            e.preventDefault();
            setManualPanActive(true);

            const rect = svg.getBoundingClientRect();
            if (rect.width <= 0) return;
            const scale = visibleWorldWidth / rect.width;
            const dViewLeft = dx * scale;

            setVbAdjust((vb) => {
                const viewLeft = vb - VIEWBOX_LEFT_PAD;
                const minViewLeft = guidelineLabelX;
                const rightEdgeTarget = Math.max(renderedRightX, lineEndX, caretX);
                const maxViewLeft = Math.max(
                    minViewLeft,
                    rightEdgeTarget + CARET_VIEW_MARGIN - visibleWorldWidth,
                );
                let next = viewLeft + dViewLeft;
                next = Math.min(Math.max(next, minViewLeft), maxViewLeft);
                return next + VIEWBOX_LEFT_PAD;
            });
        };

        svg.addEventListener("wheel", onWheel, { passive: false });
        return () => svg.removeEventListener("wheel", onWheel);
    }, [
        visibleWorldWidth,
        lineEndX,
        renderedRightX,
        caretX,
        setViewZoom,
        centerSingleGlyph,
        guidelineLabelX,
    ]);

    let cursor = 0;

    return (
        <div
            className="aspect-[5/3] mx-auto mt-10"
            style={{
                width: compactMode
                    ? `min(90vw, ${compactMaxWidth}px)`
                    : `min(95vw, ${expandedMaxWidth}px)`,
                maxWidth: compactMode ? `${compactMaxWidth}px` : `${expandedMaxWidth}px`,
            }}
        >
            <svg
                ref={svgRef}
                className="w-full h-full block cursor-text"
                viewBox={`${vbAdjust - VIEWBOX_LEFT_PAD} ${viewMinY} ${viewWidth} ${viewHeight}`}
                preserveAspectRatio="xMinYMid slice"
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
                                opacity="0.5"
                                className="hover:opacity-100 transition-opacity duration-300"
                            >
                                <text
                                    x={guideLineLabelX}
                                    y={guideLines[key] - 8}
                                    fontSize="16"
                                    fill="#7020BF"
                                    stroke="none"
                                >
                                    {label}
                                </text>
                                <line
                                    x1={guideLineStartX}
                                    y1={guideLines[key]}
                                    x2={guideLineEndX}
                                    y2={guideLines[key]}
                                />
                                <line
                                    x1={guideLineStartX}
                                    y1={guideLines[key]}
                                    x2={guideLineEndX}
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
                        slice.pointDeltas,
                    );
                    const width = maxX - minX;
                    const xAdjust = normalizeGlyphX ? cursor - minX : 0;
                    if (normalizeGlyphX) {
                        cursor += width + RIGHT_SPACING;
                    }

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
                            setNodeX={setNodeXByKey ? setNodeXByKey(instance.stateKey) : undefined}
                            setNodeY={setNodeYByKey ? setNodeYByKey(instance.stateKey) : undefined}
                            pointDeltas={slice.pointDeltas}
                            setPointDeltas={
                                setPointDeltasByKey
                                    ? setPointDeltasByKey(instance.stateKey)
                                    : undefined
                            }
                            seeNodes={seeNodes}
                            seePathPoints={seePathPoints}
                            xAdjust={xAdjust}
                            ringDragHooks={ringDragHooks}
                            guideLines={guideLines}
                            topLayer={topLayerEl}
                        />
                    );
                })}
                {showCaret && (
                    <line
                        x1={caretX}
                        y1={guideLines.descender}
                        x2={caretX}
                        y2={guideLines.ascender}
                        stroke="#7020BF"
                        strokeWidth="3"
                        className="animate-[blink_1s_infinite] cursor-default"
                    />
                )}
                {/*
                 * Top layer for portaled node percent badges. Must be the last
                 * child of the SVG so it stacks above every glyph and node.
                 */}
                <g ref={setTopLayerEl} data-typeviz-top-layer="true" />
            </svg>
        </div>
    );
}
