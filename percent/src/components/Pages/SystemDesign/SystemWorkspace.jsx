import { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect } from "react";
import { buildPath, buildNodes, getAdjustedGlyphBoundsX } from "../../../engine/project";
import { NODE_SIZE_GROUPS, applyGroupedNodeSizeChanges } from "../EditorPage/nodeGroups";
import { useLocalStorageJson } from "../../../hooks/useLocalStorageState";

// ─── tunable workspace settings ──────────────────────────────────────────────
/** Zoom level: 1.0 = TypeVisualizer default. Lower = more zoomed out (more visible). */
const WORKSPACE_ZOOM = 0.65;
/** Gap in SVG units between glyphs. */
const GLYPH_GAP = 40;
/** Equal overhang the guideline lines extend past the leftmost / rightmost glyph edge. */
const GUIDELINE_SIDE_PAD = 160;
/**
 * Horizontal inset from the left end of the guideline line where the label starts.
 * The label sits ABOVE the line starting at this offset from the line's left edge.
 */
const GUIDELINE_LABEL_INSET = 8;
/** Font size (SVG units) for guideline labels. */
const GUIDELINE_LABEL_FONT_SIZE = 22;
/** Vertical gap between the bottom of the label text and the guideline line. */
const GUIDELINE_LABEL_VGAP = 4;

// ─── derived constants (don't edit these directly) ───────────────────────────
const VIEWBOX_WIDTH = 1000;
const VIEWBOX_HEIGHT = 400;
const VIEW_WIDTH = VIEWBOX_WIDTH / WORKSPACE_ZOOM;
const VIEW_HEIGHT = VIEWBOX_HEIGHT / WORKSPACE_ZOOM;

const DEFAULT_GUIDELINES = {
    ascender: 30.5,
    cap_height: 80.5,
    x_height: 131.38,
    baseline: 267.76,
    descender: 332.24,
};

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const GUIDELINES_STORAGE_KEY = "editor:guideLines:v1";

// ─── helpers ─────────────────────────────────────────────────────────────────
function hydrateGlyphData(initialConfigs) {
    let saved = null;
    try {
        const raw = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") saved = parsed;
        }
    } catch {
        /* ignore */
    }

    const out = {};
    for (const key in initialConfigs) {
        const cfg = initialConfigs[key];
        const n = cfg.nodes.length;
        const s = saved?.[key];
        out[key] = {
            config: cfg,
            nodeSize:
                Array.isArray(s?.nodeSize) && s.nodeSize.length === n
                    ? s.nodeSize
                    : cfg.nodes.map((nd) => nd.default),
            nodeX:
                Array.isArray(s?.nodeX) && s.nodeX.length === n ? s.nodeX : cfg.nodes.map(() => 0),
            nodeY:
                Array.isArray(s?.nodeY) && s.nodeY.length === n ? s.nodeY : cfg.nodes.map(() => 0),
        };
    }
    return out;
}

/**
 * Resolve which "display group" to use for a given activeMode id and variant index.
 * `selectedVariant` matches the `no` property of the desired group entry.
 */
function resolveDisplayGroup(activeMode, selectedVariant = 0) {
    const matches = NODE_SIZE_GROUPS.filter((g) => g?.id === activeMode);
    if (!matches.length) return null;
    if (matches.length === 1) return matches[0];
    return matches.find((g) => (g.no ?? 0) === selectedVariant) ?? matches[0];
}

/**
 * Build a per-glyph map of the node name to show for the active display group.
 * Returns Map<glyphKey, nodeName | null>.
 */
function buildVisibleNodeNames(group) {
    const map = new Map();
    if (!group) return map;
    for (const m of group.members ?? []) {
        if (m?.glyph && m.nodeName) map.set(m.glyph, m.nodeName);
    }
    return map;
}

// ─── InteractiveGlyph ────────────────────────────────────────────────────────
function InteractiveGlyph({
    glyphKey,
    glyphState,
    xAdjust,
    guideLines,
    setNodeSizeForKey,
    visibleNodeName,
    globalActive,
    setGlobalActive,
    globalIsDragging,
    setGlobalIsDragging,
}) {
    const { config, nodeSize, nodeX, nodeY } = glyphState;

    const localActive = globalActive?.glyphKey === glyphKey ? globalActive.nodeId : null;
    const setLocalActive = useCallback(
        (nodeId) => setGlobalActive(nodeId === null ? null : { glyphKey, nodeId }),
        [glyphKey, setGlobalActive],
    );

    const adjustedPoints = useMemo(
        () =>
            Object.fromEntries(
                Object.entries(config.points ?? {}).map(([k, pt]) => [
                    k,
                    { ...pt, x: pt.x + xAdjust },
                ]),
            ),
        [config.points, xAdjust],
    );

    const adjustedConfigFull = useMemo(
        () => ({ ...config, points: adjustedPoints }),
        [config, adjustedPoints],
    );

    const adjustedConfigFiltered = useMemo(
        () => ({
            ...config,
            points: adjustedPoints,
            nodes: visibleNodeName ? config.nodes.filter((n) => n.name === visibleNodeName) : [],
        }),
        [config, adjustedPoints, visibleNodeName],
    );

    const adjustedNodesX = useMemo(
        () => (nodeX ?? config.nodes.map(() => 0)).map((v) => v + xAdjust),
        [nodeX, config.nodes, xAdjust],
    );

    const d = buildPath(adjustedConfigFull, nodeSize, nodeX, nodeY, guideLines);
    const setNodeSize = useCallback(
        (val) => setNodeSizeForKey(glyphKey)(val),
        [setNodeSizeForKey, glyphKey],
    );

    return (
        <g>
            <path fill="black" stroke="none" d={d} />
            {buildNodes(
                adjustedConfigFiltered,
                nodeSize,
                guideLines,
                adjustedNodesX,
                nodeY,
                setNodeSize,
                localActive,
                setLocalActive,
                globalIsDragging,
                setGlobalIsDragging,
                null,
                null,
            )}
        </g>
    );
}

// ─── SystemWorkspace ─────────────────────────────────────────────────────────
export default function SystemWorkspace({ activeMode, selectedVariant = 0, initialConfigs }) {
    const [glyphData, setGlyphData] = useState(() => hydrateGlyphData(initialConfigs));
    const [guideLines, setGuideLines] = useLocalStorageJson(
        GUIDELINES_STORAGE_KEY,
        DEFAULT_GUIDELINES,
    );

    // Cross-glyph active / dragging state
    const [globalActive, setGlobalActive] = useState(null); // { glyphKey, nodeId } | null
    const [globalIsDragging, setGlobalIsDragging] = useState(false);

    // Anchor state: during drag, the glyphKey being edited is fixed at anchorXAdjust
    // so surrounding glyphs shift around it instead of the whole group re-centering.
    const [anchorState, setAnchorState] = useState(null); // { glyphKey, xAdjust } | null
    const prevIsDraggingRef = useRef(false);

    const svgRef = useRef(null);
    const draggingGuideline = useRef(null);
    const dragOffset = useRef(0);

    // Persist glyph data to localStorage (same key + pattern as Editor)
    useEffect(() => {
        window.localStorage.setItem(GLYPH_STATE_STORAGE_KEY, JSON.stringify(glyphData));
    }, [glyphData]);

    // ─── Node size setter — always propagates to all linked group members ─────
    const setNodeSizeByKey = useCallback(
        (stateKey) => (value) =>
            setGlyphData((prev) => {
                const slice = prev[stateKey];
                if (!slice) return prev;
                const newNodeSize = typeof value === "function" ? value(slice.nodeSize) : value;
                const nextData = { ...prev, [stateKey]: { ...slice, nodeSize: newNodeSize } };
                // Always sync all node groups (no link overrides on this page)
                return applyGroupedNodeSizeChanges(prev, nextData, stateKey, {}, NODE_SIZE_GROUPS);
            }),
        [],
    );

    // ─── Guideline drag ───────────────────────────────────────────────────────
    function clientToSvgY(clientY) {
        if (!svgRef.current) return clientY;
        const pt = svgRef.current.createSVGPoint();
        pt.y = clientY;
        return pt.matrixTransform(svgRef.current.getScreenCTM().inverse()).y;
    }
    const handleGuidelineMouseDown = (key) => (e) => {
        e.preventDefault();
        draggingGuideline.current = key;
        dragOffset.current = clientToSvgY(e.clientY) - guideLines[key];
    };
    const handleSvgMouseMove = (e) => {
        if (!draggingGuideline.current) return;
        const svgY = clientToSvgY(e.clientY);
        setGuideLines((prev) => ({
            ...prev,
            [draggingGuideline.current]: svgY - dragOffset.current,
        }));
    };
    const handleSvgMouseUp = () => {
        draggingGuideline.current = null;
    };

    // ─── Resolve active display group + visible node names ───────────────────
    const displayGroup = useMemo(
        () => resolveDisplayGroup(activeMode, selectedVariant),
        [activeMode, selectedVariant],
    );
    const visibleNodeNames = useMemo(() => buildVisibleNodeNames(displayGroup), [displayGroup]);

    const allMembersForMode = useMemo(() => {
        const groups = NODE_SIZE_GROUPS.filter((g) => g?.id === activeMode);
        const seen = new Set();
        const out = [];
        for (const g of groups) {
            for (const m of g?.members ?? []) {
                if (m?.glyph && !seen.has(m.glyph)) {
                    seen.add(m.glyph);
                    out.push(m.glyph);
                }
            }
        }
        return out;
    }, [activeMode]);

    const glyphSlices = useMemo(() => {
        return allMembersForMode.flatMap((key) => {
            const slice = glyphData[key];
            const cfg = initialConfigs[key];
            if (!cfg) return [];
            return [
                {
                    key,
                    config: cfg,
                    nodeSize: slice?.nodeSize ?? cfg.nodes.map((n) => n.default),
                    nodeX: slice?.nodeX ?? cfg.nodes.map(() => 0),
                    nodeY: slice?.nodeY ?? cfg.nodes.map(() => 0),
                },
            ];
        });
    }, [allMembersForMode, glyphData, initialConfigs]);

    // ─── Centered layout (no anchor correction) ───────────────────────────────
    const centeredLayout = useMemo(() => {
        if (!glyphSlices.length) return [];

        let cursor = 0;
        const raw = glyphSlices.map((slice) => {
            const { minX, maxX } = getAdjustedGlyphBoundsX(
                slice.config,
                slice.nodeSize,
                slice.nodeX,
                slice.nodeY,
                guideLines,
            );
            const xAdjust = cursor - minX;
            const width = maxX - minX;
            cursor += width + GLYPH_GAP;
            return { ...slice, xAdjust, width };
        });

        const totalWidth =
            raw.reduce((s, r) => s + r.width, 0) + Math.max(0, raw.length - 1) * GLYPH_GAP;
        const shift = -totalWidth / 2;

        return raw.map((s) => ({ ...s, xAdjust: s.xAdjust + shift }));
    }, [glyphSlices, guideLines]);

    // ─── Capture anchor position at drag start, clear on drag end ─────────────
    useLayoutEffect(() => {
        const dragStarted = globalIsDragging && !prevIsDraggingRef.current;
        const dragEnded = !globalIsDragging && prevIsDraggingRef.current;
        prevIsDraggingRef.current = globalIsDragging;

        if (dragStarted) {
            const key = globalActive?.glyphKey;
            const slice = centeredLayout.find((s) => s.key === key);
            if (key && slice) {
                setAnchorState({ glyphKey: key, xAdjust: slice.xAdjust });
            }
        } else if (dragEnded) {
            setAnchorState(null);
        }
    }, [globalIsDragging]); // intentionally omitting centeredLayout / globalActive so we only fire on drag transition

    // ─── Final layout: apply anchor correction during drag ────────────────────
    const glyphLayout = useMemo(() => {
        if (!globalIsDragging || !anchorState) return centeredLayout;

        const anchorSlice = centeredLayout.find((s) => s.key === anchorState.glyphKey);
        if (!anchorSlice) return centeredLayout;

        // Shift every glyph so the anchor glyph stays at its pre-drag xAdjust
        const shift = anchorState.xAdjust - anchorSlice.xAdjust;
        if (shift === 0) return centeredLayout;
        return centeredLayout.map((s) => ({ ...s, xAdjust: s.xAdjust + shift }));
    }, [centeredLayout, globalIsDragging, anchorState]);

    // ─── Content bounds for guideline line extents ────────────────────────────
    // Computed using max node size (1.0 for every node) so guidelines never
    // shrink as the user resizes nodes. The max-size layout is independently
    // centered so both layouts share the same center of mass.
    const { contentMinX, contentMaxX } = useMemo(() => {
        if (!glyphSlices.length) return { contentMinX: 0, contentMaxX: 0 };

        // Build a layout identical to centeredLayout but with all nodes at 1.0
        let cursor = 0;
        const raw = glyphSlices.map((slice) => {
            const maxNodeSize = slice.config.nodes.map(() => 1.0);
            const { minX, maxX } = getAdjustedGlyphBoundsX(
                slice.config,
                maxNodeSize,
                slice.nodeX,
                slice.nodeY,
                guideLines,
            );
            const width = maxX - minX;
            const xAdjust = cursor - minX;
            cursor += width + GLYPH_GAP;
            return { xAdjust, width, minX, maxX };
        });

        const totalWidth =
            raw.reduce((s, r) => s + r.width, 0) + Math.max(0, raw.length - 1) * GLYPH_GAP;
        const shift = -totalWidth / 2;

        let minX = Infinity,
            maxX = -Infinity;
        for (const r of raw) {
            minX = Math.min(minX, r.xAdjust + shift + r.minX);
            maxX = Math.max(maxX, r.xAdjust + shift + r.maxX);
        }
        return {
            contentMinX: isFinite(minX) ? minX : 0,
            contentMaxX: isFinite(maxX) ? maxX : 0,
        };
    }, [glyphSlices, guideLines]);

    // ─── Guideline geometry ───────────────────────────────────────────────────
    const guideLineStartX = contentMinX - GUIDELINE_SIDE_PAD;
    const guideLineEndX = contentMaxX + GUIDELINE_SIDE_PAD;
    // Label starts just inside the left end of the guideline line, sitting above it
    const guideLineLabelX = guideLineStartX + GUIDELINE_LABEL_INSET;

    const vertCenterY = (guideLines.ascender + guideLines.descender) / 2;
    const viewMinY = vertCenterY - VIEW_HEIGHT / 2;
    const viewMinX = -VIEW_WIDTH / 2;

    return (
        <div
            className="w-full"
            style={{
                aspectRatio: "5/3",
                maxWidth: "min(96vw, 1400px)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <svg
                ref={svgRef}
                className="w-full h-full block"
                viewBox={`${viewMinX} ${viewMinY} ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
                preserveAspectRatio="xMidYMid meet"
                onMouseMove={handleSvgMouseMove}
                onMouseUp={handleSvgMouseUp}
                onMouseLeave={handleSvgMouseUp}
            >
                {/* Guidelines */}
                <g stroke="#7020BF" strokeWidth="2">
                    {[
                        { key: "ascender", label: "Ascender" },
                        { key: "cap_height", label: "Cap Height" },
                        { key: "x_height", label: "X Height" },
                        { key: "baseline", label: "Baseline" },
                        { key: "descender", label: "Descender" },
                    ].map(({ key, label }) => (
                        <g
                            key={key}
                            onMouseDown={handleGuidelineMouseDown(key)}
                            cursor="ns-resize"
                            opacity="0.5"
                            className="hover:opacity-100 transition-opacity duration-300"
                        >
                            {/* Label sits above the line, left-aligned to the line's left end */}
                            <text
                                x={guideLineLabelX}
                                y={guideLines[key] - GUIDELINE_LABEL_VGAP}
                                fontSize={GUIDELINE_LABEL_FONT_SIZE}
                                fill="#7020BF"
                                stroke="none"
                                textAnchor="start"
                                dominantBaseline="auto"
                            >
                                {label}
                            </text>
                            <line
                                x1={guideLineStartX}
                                y1={guideLines[key]}
                                x2={guideLineEndX}
                                y2={guideLines[key]}
                            />
                            {/* Wider invisible hit area */}
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

                {/* Glyphs */}
                {glyphLayout.map((slice) => (
                    <InteractiveGlyph
                        key={slice.key}
                        glyphKey={slice.key}
                        glyphState={slice}
                        xAdjust={slice.xAdjust}
                        guideLines={guideLines}
                        setNodeSizeForKey={setNodeSizeByKey}
                        visibleNodeName={visibleNodeNames.get(slice.key) ?? null}
                        globalActive={globalActive}
                        setGlobalActive={setGlobalActive}
                        globalIsDragging={globalIsDragging}
                        setGlobalIsDragging={setGlobalIsDragging}
                    />
                ))}
            </svg>
        </div>
    );
}
