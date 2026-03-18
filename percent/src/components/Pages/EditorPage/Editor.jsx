import { Allotment } from "allotment";
import "allotment/dist/style.css";
import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";
import AllGlyphs from "./AllGlyphs";
import { useState, useEffect } from "react";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { aConfig } from "../../../engine/fonts/default/a";
import { oConfig } from "../../../engine/fonts/default/o";
import { nConfig } from "../../../engine/fonts/default/n";
import {
    convertPathToGlyphObject,
    applyInferredTransformToPoint,
    shiftPointsToAnchorY,
    generateNodesFromCircles,
} from "../../../../pathToGlyphObject";

// Helper to initialize the full glyph data structure
const initializeGlyphData = (configs) => {
    const data = {};
    for (const key in configs) {
        const config = configs[key];
        data[key] = {
            config: config,
            nodeSize: config.nodes.map((node) => node.default),
            nodeX: config.nodes.map(() => 0),
            nodeY: config.nodes.map(() => 0),
        };
    }
    return data;
};

const initialConfigs = {
    A: ACapConfig,
    n: nConfig, // Corrected from N
    o: oConfig, // Corrected from O
};

export default function Editor() {
    const [glyphData, setGlyphData] = useState(() => initializeGlyphData(initialConfigs));
    const [selectedGlyph, setSelectedGlyph] = useState("A");
    const [seeNodes, setSeeNodes] = useState(true);
    const [seePathPoints, setSeePathPoints] = useState(false);
    const [maxPaneSize, setMaxPaneSize] = useState((window.innerWidth * 2) / 3);

    useEffect(() => {
        const handleResize = () => {
            setMaxPaneSize((window.innerWidth * 2) / 3);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNodeSizeChange = (value) => {
        setGlyphData((prevData) => {
            const oldNodeSize = prevData[selectedGlyph].nodeSize;
            const newNodeSize = typeof value === "function" ? value(oldNodeSize) : value;
            return {
                ...prevData,
                [selectedGlyph]: {
                    ...prevData[selectedGlyph],
                    nodeSize: newNodeSize,
                },
            };
        });
    };

    const handleNodeXChange = (value) => {
        setGlyphData((prevData) => {
            const old = prevData[selectedGlyph].nodeX;
            const next = typeof value === "function" ? value(old) : value;
            return {
                ...prevData,
                [selectedGlyph]: {
                    ...prevData[selectedGlyph],
                    nodeX: next,
                },
            };
        });
    };

    const handleNodeYChange = (value) => {
        setGlyphData((prevData) => {
            const old = prevData[selectedGlyph].nodeY;
            const next = typeof value === "function" ? value(old) : value;
            return {
                ...prevData,
                [selectedGlyph]: {
                    ...prevData[selectedGlyph],
                    nodeY: next,
                },
            };
        });
    };

    const currentGlyph = glyphData[selectedGlyph];

    return (
        <div style={{ height: "calc(100vh - 60px)" }}>
            <Allotment>
                <Allotment.Pane minSize={200} preferredSize="280px" maxSize={maxPaneSize}>
                    <AllGlyphs
                        glyphData={glyphData}
                        selectedGlyph={selectedGlyph}
                        onGlyphSelect={setSelectedGlyph}
                        availableGlyphs={Object.keys(initialConfigs)}
                    />
                </Allotment.Pane>
                <Allotment.Pane>
                    <div className="relative min-h-full flex">
                        {currentGlyph && (
                            <Workspace
                                config={currentGlyph.config}
                                nodeSize={currentGlyph.nodeSize}
                                setNodeSize={handleNodeSizeChange}
                                nodeX={currentGlyph.nodeX}
                                nodeY={currentGlyph.nodeY}
                                seeNodes={seeNodes}
                                seePathPoints={seePathPoints}
                            />
                        )}
                        <SidePanelGroup side="right">
                            {currentGlyph &&
                                SettingsPanel({
                                    config: currentGlyph.config,
                                    nodeSize: currentGlyph.nodeSize,
                                    setNodeSize: handleNodeSizeChange,
                                    nodeX: currentGlyph.nodeX,
                                    nodeY: currentGlyph.nodeY,
                                    setNodeX: handleNodeXChange,
                                    setNodeY: handleNodeYChange,
                                    seeNodes,
                                    setSeeNodes,
                                    seePathPoints,
                                    setSeePathPoints,
                                })}
                        </SidePanelGroup>
                    </div>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
}
