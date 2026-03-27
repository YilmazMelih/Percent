import { useState } from "react";
import AdjustedGlyph from "./AdjustedGlyph";

/**
 * @param {Object} props
 * @param {{ instanceId: string, stateKey: string }[]} props.line — display order; duplicate stateKey shares glyph state
 * @param {Record<string, { config: object, nodeSize: number[], nodeX: number[], nodeY: number[] }>} props.glyphStates
 * @param {(stateKey: string) => (value: unknown) => void} props.setNodeSizeByKey
 */
export default function TypeVisualizerWorkspace({
    line,
    glyphStates,
    seeNodes,
    seePathPoints,
    seeGuidelines,
    setNodeSizeByKey,
}) {
    const [ascender, setAscender] = useState(30.5);
    const [cap_height, setCapHeight] = useState(80.5);
    const [x_height, setXHeight] = useState(136.25);
    const [baseline, setBaseline] = useState(267.76);
    const [descender, setDescender] = useState(320);

    return (
        <div className="aspect-[5/3] w-[min(90vw,1000px)] mx-auto mt-10">
            <svg className="w-full h-full block" viewBox="-130 0 1000 400">
                {seeGuidelines && (
                    <g stroke="lightgray" strokeWidth="1.5">
                        <text
                            x={-130}
                            y={ascender - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Ascender
                        </text>
                        <line x1="-330" y1={ascender} x2="3000" y2={ascender} />
                        <text
                            x={-130}
                            y={cap_height - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Cap Height
                        </text>
                        <line x1="-330" y1={cap_height} x2="3000" y2={cap_height} />
                        <text
                            x={-130}
                            y={x_height - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            X Height
                        </text>
                        <line x1="-330" y1={x_height} x2="3000" y2={x_height} />
                        <text
                            x={-130}
                            y={baseline - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Baseline
                        </text>
                        <line x1="-330" y1={baseline} x2="3000" y2={baseline} />
                        <text
                            x={-130}
                            y={descender - 8}
                            fontSize="16"
                            fill="lightgray"
                            stroke="none"
                        >
                            Descender
                        </text>
                        <line x1="-330" y1={descender} x2="3000" y2={descender} />
                    </g>
                )}

                {line.map((instance) => {
                    const slice = glyphStates[instance.stateKey];
                    if (!slice) return null;
                    return (
                        <AdjustedGlyph
                            key={instance.instanceId}
                            config={slice.config}
                            nodeSize={slice.nodeSize}
                            setNodeSize={setNodeSizeByKey(instance.stateKey)}
                            nodeX={slice.nodeX}
                            nodeY={slice.nodeY}
                            seeNodes={seeNodes}
                            seePathPoints={seePathPoints}
                            xAdjust={instance.instanceId * 250}
                        />
                    );
                })}
            </svg>
        </div>
    );
}
