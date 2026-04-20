import { useState } from "react";
import { buildPath, extractPathPoints, buildNodes } from "../../../engine/project";

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
    seeNodes,
    seePathPoints,
    xAdjust = 0,
    /** Optional: TypeVisualizer ring-drag lifecycle (commit-on-release isolation). */
    ringDragHooks,
    guideLines,
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(null);

    const adjustedPoints = Object.fromEntries(
        Object.entries(config.points ?? {}).map(([key, pt]) => [key, { ...pt, x: pt.x + xAdjust }]),
    );
    const adjustedConfig = { ...config, points: adjustedPoints };

    const adjustedNodesX = (nodeX ?? config.nodes.map(() => 0)).map((v) => v + xAdjust);

    const d = buildPath(adjustedConfig, nodeSize, nodeX, nodeY, guideLines);
    const { controlPoints, endpoints } = extractPathPoints(d);
    const logPointName = (point) => {
        const name = Object.keys(adjustedPoints ?? {}).find((key) => {
            const p = adjustedPoints[key];
            return p?.x === point.x && p?.y === point.y;
        });
        console.log(`${name ?? "unknown-point"} (${point.x}, ${point.y})`);
    };

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
                )}
            {seePathPoints &&
                controlPoints.map((point, i) => (
                    <circle
                        key={`${i}_controlP`}
                        className="cursor-default"
                        r={3}
                        cx={point.x}
                        cy={point.y}
                        fill="red"
                        onMouseEnter={() => logPointName(point)}
                    />
                ))}
            {seePathPoints &&
                endpoints.map((point, i) => (
                    <circle
                        key={`${i}_endpoint`}
                        className="cursor-default"
                        r={4}
                        cx={point.x}
                        cy={point.y}
                        fill="blue"
                        onMouseEnter={() => logPointName(point)}
                    />
                ))}
        </>
    );
}
