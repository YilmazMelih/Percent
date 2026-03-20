import { Allotment } from "allotment";
import "allotment/dist/style.css";
import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";
import AllGlyphs from "./AllGlyphs";
import { useState, useEffect } from "react";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { aConfig } from "../../../engine/fonts/default/a";
import { HCapConfig } from "../../../engine/fonts/default/H_cap";
import { oConfig } from "../../../engine/fonts/default/o";
import { nConfig } from "../../../engine/fonts/default/n";
import {
    convertPathToGlyphObject,
    applyInferredTransformToPoint,
    shiftPointsToAnchor,
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
const testD = `
M265.95,80.77v186.72h-76.04v-71.44h-47.36v71.44h-76.04V80.77h76.04l.27,71.98h47.36l-.27-71.98h76.04Z`;
const testSVGStr = `
<circle xmlns="http://www.w3.org/2000/svg" class="cls-1" cx="104.5" cy="229.49" r="38"/>
<circle xmlns="http://www.w3.org/2000/svg" class="cls-1" cx="166.22" cy="174.42" r="21.64"/>
<circle xmlns="http://www.w3.org/2000/svg" class="cls-1" cx="227.94" cy="229.49" r="38"/>
`;
const testFromPoint = { x: 265.95, y: 80.77 };
const testP = convertPathToGlyphObject(testD);
const testPoints = shiftPointsToAnchor(testP.points, "point2", null, 267.76);
const testToPoint = testP.points.point1;
const testNodes = generateNodesFromCircles(testFromPoint, testToPoint, testSVGStr);
const testConfig = {
    basePath: testP.basePath,
    points: testPoints,
    nodes: testNodes,
};

// console.log(testConfig);

const initialConfigs = {
    A: ACapConfig,
    a: aConfig,
    H: HCapConfig,
    n: nConfig, // Corrected from N
    o: oConfig, // Corrected from O
};

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const SELECTED_GLYPH_STORAGE_KEY = "editor:selectedGlyph:v1";
const SEE_NODES_STORAGE_KEY = "editor:seeNodes:v1";
const SEE_PATH_POINTS_STORAGE_KEY = "editor:seePathPoints:v1";

const hydrateGlyphData = (configs) => {
    const baseData = initializeGlyphData(configs);
    if (typeof window === "undefined") return baseData;

    try {
        const raw = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
        if (!raw) return baseData;
        const saved = JSON.parse(raw);

        if (!saved || typeof saved !== "object") return baseData;

        for (const key of Object.keys(baseData)) {
            const savedGlyph = saved[key];
            if (!savedGlyph || typeof savedGlyph !== "object") continue;

            const nodeCount = baseData[key].config.nodes.length;
            if (Array.isArray(savedGlyph.nodeSize) && savedGlyph.nodeSize.length === nodeCount) {
                baseData[key].nodeSize = savedGlyph.nodeSize;
            }
            if (Array.isArray(savedGlyph.nodeX) && savedGlyph.nodeX.length === nodeCount) {
                baseData[key].nodeX = savedGlyph.nodeX;
            }
            if (Array.isArray(savedGlyph.nodeY) && savedGlyph.nodeY.length === nodeCount) {
                baseData[key].nodeY = savedGlyph.nodeY;
            }
        }
    } catch {
        // Ignore invalid persisted state and use defaults.
    }

    return baseData;
};

export default function Editor() {
    const [glyphData, setGlyphData] = useState(() => hydrateGlyphData(initialConfigs));
    const [selectedGlyph, setSelectedGlyph] = useState(() => {
        if (typeof window === "undefined") return "A";
        const savedGlyph = window.localStorage.getItem(SELECTED_GLYPH_STORAGE_KEY);
        return savedGlyph && initialConfigs[savedGlyph] ? savedGlyph : "A";
    });
    const [seeNodes, setSeeNodes] = useState(() => {
        if (typeof window === "undefined") return true;
        const saved = window.localStorage.getItem(SEE_NODES_STORAGE_KEY);
        return saved === null ? true : saved === "true";
    });
    const [seePathPoints, setSeePathPoints] = useState(() => {
        if (typeof window === "undefined") return false;
        const saved = window.localStorage.getItem(SEE_PATH_POINTS_STORAGE_KEY);
        return saved === null ? false : saved === "true";
    });
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

    useEffect(() => {
        window.localStorage.setItem(GLYPH_STATE_STORAGE_KEY, JSON.stringify(glyphData));
    }, [glyphData]);

    useEffect(() => {
        window.localStorage.setItem(SELECTED_GLYPH_STORAGE_KEY, selectedGlyph);
    }, [selectedGlyph]);

    useEffect(() => {
        window.localStorage.setItem(SEE_NODES_STORAGE_KEY, String(seeNodes));
    }, [seeNodes]);

    useEffect(() => {
        window.localStorage.setItem(SEE_PATH_POINTS_STORAGE_KEY, String(seePathPoints));
    }, [seePathPoints]);

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
