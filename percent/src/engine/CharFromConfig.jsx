import { useState } from "react";
import { buildPath, extractPathPoints, buildNodes } from "./project";
import SliderPanel from "./NodeSliders";

export default function CharFromConfig({ config }) {
    const [nodeSize, setNodeSize] = useState(config.nodes.map((node) => node.default));
    const [seeNodes, setSeeNodes] = useState(true);
    const [seePathPoints, setSeePathPoints] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [active, setActive] = useState(null);
    const d = buildPath(config, nodeSize);
    const { controlPoints, endpoints } = extractPathPoints(d);

    return (
        <>
            <svg
                height="250"
                width="250"
                viewBox="-160 -160 320 320"
                xmlns="http://www.w3.org/2000/svg"
                className="border border-gray-400 rounded-lg"
            >
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
                        <circle key={`${i}_controlP`} r={2} cx={point.x} cy={point.y} fill="red" />
                    ))}
                {seePathPoints &&
                    endpoints.map((point, i) => (
                        <circle key={`${i}_endpoint`} r={3} cx={point.x} cy={point.y} fill="blue" />
                    ))}
            </svg>
            <SliderPanel
                names={config.nodes.map((node) => node.name)}
                nodeSize={nodeSize}
                setNodeSize={setNodeSize}
                seeNodes={seeNodes}
                setSeeNodes={setSeeNodes}
                seePathPoints={seePathPoints}
                setSeePathPoints={setSeePathPoints}
            />
        </>
    );
}
