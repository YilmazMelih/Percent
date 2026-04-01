import React from "react";
import { buildPath } from "../../../engine/project";

const GlyphPreview = ({ config, nodeSize, nodeX, nodeY, showNodes, guideLines }) => {
    if (!config) {
        return null; // Or a placeholder
    }

    const d = buildPath(config, nodeSize, nodeX, nodeY, guideLines);

    return (
        <svg viewBox="-165 0 330 400" style={{ width: "100%", height: "100%" }}>
            <path fill={showNodes ? "#ccc" : "#333"} d={d}></path>
            {showNodes &&
                config.nodes.map((node) => {
                    const size = nodeSize[node.id] * node.r;
                    const tx = nodeX?.[node.id] ?? 0;
                    const ty = nodeY?.[node.id] ?? 0;
                    return (
                        <circle
                            key={node.id}
                            cx={node.pos.x + tx}
                            cy={node.pos.y + ty}
                            r={size}
                            fill="#167d48" // This is the green color from the main editor
                            fillOpacity={0.8}
                        />
                    );
                })}
        </svg>
    );
};

export default GlyphPreview;
