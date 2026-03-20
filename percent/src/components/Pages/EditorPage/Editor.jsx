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
M253.5,243.34h-68.47l-2.16-18.94s-3.62,16.2-23.09,20.65c-15.01,3.43-80.22,1.21-80.83-33.1-.61-34.24,29.71-44.57,59.26-46,20.47-.99,36.18-5.37,40.59-6.34,1.89-3.25,1.08-12.6-2.16-16.39-6.49-7.58-26.25-8.12-28.14,10.82l-61.43-8.39c1.62-15.15,10.55-25.44,21.92-31.66,37.89-20.3,100.13-10.82,113.66-1.89,23.81,16.24,24.08,38.7,24.08,71.17,0,0-1.08,38.7,1.62,44.92l5.14,15.15ZM180.53,179.55c-15.52,3.19-26.24-1.01-34.73,14.55-7.31,13.53,7.22,38.49,27.59,29.64,10.55-5.95,7.13-38.77,7.13-44.19Z`;
const testP = convertPathToGlyphObject(testD);
const testPoints = shiftPointsToAnchor(testP.points, "point8", -86.97, 236.37);
const testConfig = {
    basePath: testP.basePath,
    points: testPoints,
    nodes: [],
};

const initialConfigs = {
    A: ACapConfig,
    a: aConfig,
    // b: testConfig,
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
