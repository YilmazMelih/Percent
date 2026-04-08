import React from "react";
import { buildPath } from "../../../engine/project";

const GlyphPreview = ({ config, nodeSize, nodeX, nodeY, showNodes, guideLines }) => {
    if (!config) {
        return null; // Or a placeholder
    }

    const d = buildPath(config, nodeSize, nodeX, nodeY, guideLines);

    return (
        <svg viewBox="-165 0 330 400" style={{ width: "100%", height: "100%" }}>
            <path fill={showNodes ? "black" : "#333"} d={d}></path>
            {showNodes &&
                config.nodes.map((node) => {
                    const defaultGuideLines = {
                        ascender: 30.5,
                        cap_height: 80.5,
                        x_height: 131.38,
                        baseline: 267.76,
                        descender: 332.24,
                    };
                    const size = nodeSize[node.id] * node.r;
                    const tx = nodeX?.[node.id] ?? 0;
                    let ty = nodeY?.[node.id] ?? 0;
                    if (node.pos.attach) {
                        const r = node.pos.ratio ?? 1;
                        switch (node.pos.attach) {
                            case "asc":
                                ty = ty + guideLines.ascender * r - defaultGuideLines.ascender * r;
                                break;
                            case "cap":
                                ty =
                                    ty +
                                    guideLines.cap_height * r -
                                    defaultGuideLines.cap_height * r;
                                break;
                            case "xh":
                                ty = ty + guideLines.x_height * r - defaultGuideLines.x_height * r;
                                break;
                            case "base":
                                ty = ty + guideLines.baseline * r - defaultGuideLines.baseline * r;
                                break;
                            case "desc":
                                ty =
                                    ty + guideLines.descender * r - defaultGuideLines.descender * r;
                                break;
                            default:
                                break;
                        }
                    }
                    return (
                        <circle
                            key={node.id}
                            cx={node.pos.x + tx}
                            cy={node.pos.y + ty}
                            r={size}
                            fill="#beff00"
                            fillOpacity={0.9}
                        />
                    );
                })}
        </svg>
    );
};

export default GlyphPreview;
