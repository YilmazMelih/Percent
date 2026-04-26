import { useRef, useState } from "react";
import {
    buildPath,
    buildNodes,
    computeGlyphPoints,
    getNamedPathPoints,
} from "../../../engine/project";

function clientToSvgPoint(e) {
    const svg = e.currentTarget.ownerSVGElement;
    if (!svg) return { x: e.clientX, y: e.clientY };
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: e.clientX, y: e.clientY };
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
}

/**
 * Draggable handle for a single named path point. When a writer (`onSetDelta`) is
 * provided the circle becomes interactive: hovering shows a hand, dragging updates
 * the per-glyph pointDeltas entry. Drag deltas are computed in SVG-CTM coords so
 * they match the absolute on-screen movement, regardless of any per-glyph xAdjust.
 */
function PathPointHandle({ name, kind, cx, cy, currentDelta, onSetDelta }) {
    const draggable = typeof onSetDelta === "function";
    const dragRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const radius = kind === "endpoint" ? 4 : 3;
    const baseFill = kind === "endpoint" ? "blue" : "red";

    function handlePointerDown(e) {
        if (!draggable || e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        const pt = clientToSvgPoint(e);
        dragRef.current = {
            pointerId: e.pointerId,
            startX: pt.x,
            startY: pt.y,
            startDx: Number.isFinite(currentDelta?.x) ? currentDelta.x : 0,
            startDy: Number.isFinite(currentDelta?.y) ? currentDelta.y : 0,
        };
        setIsDragging(true);
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
            // Some environments disallow capture on synthetic events; the handlers
            // below still work via React's normal event delegation.
        }
    }

    function handlePointerMove(e) {
        if (!dragRef.current || dragRef.current.pointerId !== e.pointerId) return;
        const pt = clientToSvgPoint(e);
        const nextX = dragRef.current.startDx + (pt.x - dragRef.current.startX);
        const nextY = dragRef.current.startDy + (pt.y - dragRef.current.startY);
        onSetDelta(name, nextX, nextY);
    }

    function handlePointerUp(e) {
        if (dragRef.current?.pointerId !== e.pointerId) return;
        dragRef.current = null;
        setIsDragging(false);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // ignore
        }
    }

    const cursor = !draggable ? "default" : isDragging ? "grabbing" : "grab";
    const fillRadius = isHovered || isDragging ? radius + 1 : radius;

    return (
        <circle
            r={fillRadius}
            cx={cx}
            cy={cy}
            fill={baseFill}
            style={{ cursor }}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={() => setIsHovered(false)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
        />
    );
}

/**
 * Horizontally shifts the glyph in **absolute SVG coordinates** (offset geometry + node X),
 * not via <g transform>, so pointer math in Node (root SVG CTM) matches what you see.
 */
export default function AdjustedGlyph({
    config,
    nodeSize,
    setNodeSize,
    nodeX,
    nodeY,
    setNodeX,
    setNodeY,
    pointDeltas,
    setPointDeltas,
    seeNodes,
    seePathPoints,
    xAdjust = 0,
    /** Optional: TypeVisualizer ring-drag lifecycle (commit-on-release isolation). */
    ringDragHooks,
    guideLines,
    /**
     * Optional SVG element to portal active-node percent badges into so they
     * render on top of every glyph and node downstream. Pass-through to buildNodes.
     */
    topLayer,
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(null);

    const adjustedPoints = Object.fromEntries(
        Object.entries(config.points ?? {}).map(([key, pt]) => [key, { ...pt, x: pt.x + xAdjust }]),
    );
    const adjustedConfig = { ...config, points: adjustedPoints };

    const adjustedNodesX = (nodeX ?? config.nodes.map(() => 0)).map((v) => v + xAdjust);

    const d = buildPath(adjustedConfig, nodeSize, nodeX, nodeY, guideLines, pointDeltas);
    const computedPoints = seePathPoints
        ? computeGlyphPoints(adjustedConfig, nodeSize, nodeX, nodeY, guideLines, pointDeltas)
        : null;
    const namedPathPoints = seePathPoints ? getNamedPathPoints(config) : [];

    const handleSetDelta = setPointDeltas
        ? (name, x, y) => {
              setPointDeltas((prev) => {
                  const next = { ...(prev || {}) };
                  if (x === 0 && y === 0) {
                      delete next[name];
                  } else {
                      next[name] = { x, y };
                  }
                  return next;
              });
          }
        : null;

    return (
        <>
            <path className="cursor-default" fill="black" stroke="none" strokeWidth="1" d={d} />

            {seeNodes &&
                buildNodes(
                    adjustedConfig,
                    nodeSize,
                    guideLines,
                    adjustedNodesX,
                    nodeY,
                    setNodeSize,
                    active,
                    setActive,
                    isDragging,
                    setIsDragging,
                    ringDragHooks?.onRingPointerDown,
                    ringDragHooks?.onRingPointerUp,
                    setNodeX,
                    setNodeY,
                    nodeX,
                    nodeY,
                    topLayer,
                )}
            {seePathPoints &&
                computedPoints &&
                namedPathPoints.map(({ name, kind }) => {
                    const pt = computedPoints[name];
                    if (!pt || !Number.isFinite(pt.x) || !Number.isFinite(pt.y)) return null;
                    return (
                        <PathPointHandle
                            key={`${kind}-${name}`}
                            name={name}
                            kind={kind}
                            cx={pt.x}
                            cy={pt.y}
                            currentDelta={pointDeltas?.[name]}
                            onSetDelta={handleSetDelta}
                        />
                    );
                })}
        </>
    );
}
