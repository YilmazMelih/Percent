import { useRef, useState } from "react";
import {
    buildPath,
    extractPathPoints,
    buildNodes,
    computeGlyphPoints,
} from "../../../engine/project";

export default function Workspace({
    config,
    nodeSize,
    setNodeSize,
    nodeX,
    nodeY,
    seeNodes,
    seePathPoints,
    seeGuidelines,
    guideLines,
    setGuideLines,
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(null);
    const svgRef = useRef(null);
    const draggingGuideline = useRef(null);
    const dragOffset = useRef(0);

    function clientToSvgY(clientY) {
        const pt = svgRef.current.createSVGPoint();
        pt.y = clientY;
        return pt.matrixTransform(svgRef.current.getScreenCTM().inverse()).y;
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
    const d = buildPath(config, nodeSize, nodeX, nodeY, guideLines);
    const computedPoints = computeGlyphPoints(config, nodeSize, nodeX, nodeY, guideLines);
    const { controlPoints, endpoints } = extractPathPoints(d);
    const logPointName = (point) => {
        const name = Object.keys(config.points ?? {}).find((key) => {
            const p = config.points[key];
            return p?.x === point.x && p?.y === point.y;
        });
        console.log(`${name ?? "unknown-point"} (${point.x}, ${point.y})`);
    };

    return (
        <div className="aspect-[5/3] w-[min(90vw,1000px)] mx-auto mt-10">
            <svg
                ref={svgRef}
                className="w-full h-full block"
                viewBox="-330 0 660 400"
                onMouseMove={handleGuidelineDrag}
                onMouseUp={handleGuidelineRelease}
                onMouseLeave={handleGuidelineRelease}
            >
                <defs>
                    <marker
                        id="skeleton-arrow"
                        markerWidth="8"
                        markerHeight="8"
                        refX="7"
                        refY="4"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path d="M 0 0 L 8 4 L 0 8 z" fill="#7c3aed" />
                    </marker>
                </defs>
                {seeGuidelines && (
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
                                onMouseDown={handleGuideLineChange(key)}
                                cursor="ns-resize"
                                opacity="0.5"
                                className="hover:opacity-100 transition-opacity duration-300"
                            >
                                <text
                                    x={-330}
                                    y={guideLines[key] - 8}
                                    fontSize="16"
                                    fill="#7020BF"
                                    stroke="none"
                                >
                                    {label}
                                </text>
                                <line
                                    x1="-330"
                                    y1={guideLines[key]}
                                    x2="330"
                                    y2={guideLines[key]}
                                />
                                <line
                                    x1="-330"
                                    y1={guideLines[key]}
                                    x2="330"
                                    y2={guideLines[key]}
                                    stroke="transparent"
                                    strokeWidth="10"
                                />
                            </g>
                        ))}
                    </g>
                )}

                <path fill="black" stroke="none" strokeWidth="1" d={d}></path>
                {/* <path
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    d={`M -47.73 162.41 C -47.73 162.41 -39.08 133.35 -1.18 133.87 C 36.73 134.39 44.44 154.34 44.44 154.34 C 44.44 154.34 49.88 163.8 49.7 184.21 L 49.7 242.33 L 53.34 267.76 M 49.7 184.21 C 49.7 184.21 31.17 195.45 16.09 195.9 C -6.8 196.58 -29.5 199.89 -29.5 199.89 C -29.5 199.89 -56.59 205.09 -56.45 232.27 C -56.31 256.95 -29 264.99 -29 264.99 C -29 264.99 26.7 282.05 49.7 225.04`}
                ></path> */}

                {seeNodes &&
                    buildNodes(
                        config,
                        nodeSize,
                        guideLines,
                        nodeX,
                        nodeY,
                        setNodeSize,
                        active,
                        setActive,
                        isDragging,
                        setIsDragging,
                    )}
                {seePathPoints &&
                    Object.keys(computedPoints ?? {}).map((name) => {
                        const from = computedPoints[name];
                        const to = config?.skeletonEndpoints?.[name];
                        if (!from || !to || !Number.isFinite(to.x) || !Number.isFinite(to.y)) {
                            return null;
                        }
                        const dx = to.x - from.x;
                        const dy = to.y - from.y;
                        const mag = Math.hypot(dx, dy);
                        if (mag < 0.001) return null;
                        const arrowLen = 10;
                        const x2 = from.x + (dx / mag) * arrowLen;
                        const y2 = from.y + (dy / mag) * arrowLen;
                        return (
                            <line
                                key={`skeleton-arrow-${name}`}
                                x1={from.x}
                                y1={from.y}
                                x2={x2}
                                y2={y2}
                                stroke="#7c3aed"
                                strokeWidth="1.25"
                                opacity="0.85"
                                markerEnd="url(#skeleton-arrow)"
                                pointerEvents="none"
                            />
                        );
                    })}
                {seePathPoints &&
                    controlPoints.map((point, i) => (
                        <circle
                            key={`${i}_controlP`}
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
                            r={4}
                            cx={point.x}
                            cy={point.y}
                            fill="blue"
                            onMouseEnter={() => logPointName(point)}
                        />
                    ))}
            </svg>
        </div>
    );
}
