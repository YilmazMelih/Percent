import { useState } from "react";
import { buildPath, extractPathPoints, buildNodes } from "../../../engine/project";

export default function Workspace({ config, nodeSize, setNodeSize, seeNodes, seePathPoints }) {
    const [ascender, setAscender] = useState(-350);
    const [cap_height, setCapHeight] = useState(-291);
    const [x_height, setXHeight] = useState(-112);
    const [baseline, setBaseline] = useState(158);
    const [descender, setDescender] = useState(350);

    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(null);
    const d = buildPath(config, nodeSize);
    const { controlPoints, endpoints } = extractPathPoints(d);

    return (
        <div className="aspect-[5/3] w-[min(90vw,1000px)] mx-auto mt-10">
            <svg className="w-full h-full block" viewBox="-600 -400 1200 800">
                <g stroke="lightgray" strokeWidth="1.5">
                    <text x={-600} y={ascender - 8} fontSize="16" fill="lightgray" stroke="none">
                        Ascender
                    </text>
                    <line x1="-600" y1={ascender} x2="600" y2={ascender} />
                    <text x={-600} y={cap_height - 8} fontSize="16" fill="lightgray" stroke="none">
                        Cap Height
                    </text>
                    <line x1="-600" y1={cap_height} x2="600" y2={cap_height} />
                    <text x={-600} y={x_height - 8} fontSize="16" fill="lightgray" stroke="none">
                        X Height
                    </text>
                    <line x1="-600" y1={x_height} x2="600" y2={x_height} />
                    <text x={-600} y={baseline - 8} fontSize="16" fill="lightgray" stroke="none">
                        Baseline
                    </text>
                    <line x1="-600" y1={baseline} x2="600" y2={baseline} />
                    <text x={-600} y={descender - 8} fontSize="16" fill="lightgray" stroke="none">
                        Descender
                    </text>
                    <line x1="-600" y1={descender} x2="600" y2={descender} />
                </g>

                <path fill="#ededed" stroke="none" strokeWidth="1" d={d}></path>
                {seeNodes &&
                    buildNodes(
                        config,
                        nodeSize,
                        setNodeSize,
                        active,
                        setActive,
                        isDragging,
                        setIsDragging,
                    )}
                {seePathPoints &&
                    controlPoints.map((point, i) => (
                        <circle key={`${i}_controlP`} r={3} cx={point.x} cy={point.y} fill="red" />
                    ))}
                {seePathPoints &&
                    endpoints.map((point, i) => (
                        <circle key={`${i}_endpoint`} r={4} cx={point.x} cy={point.y} fill="blue" />
                    ))}
            </svg>
        </div>
    );
}
