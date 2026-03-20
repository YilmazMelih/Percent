import { Allotment } from "allotment";
import "allotment/dist/style.css";
import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";
import AllGlyphs from "./AllGlyphs";
import BottomPanel from "./BottomPanel";
import { useState, useEffect } from "react";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { aConfig } from "../../../engine/fonts/default/a";
import { BCapConfig } from "../../../engine/fonts/default/B_cap";
import { CCapConfig } from "../../../engine/fonts/default/C_cap";
import { DCapConfig } from "../../../engine/fonts/default/D_cap";
import { ECapConfig } from "../../../engine/fonts/default/E_cap";
import { FCapConfig } from "../../../engine/fonts/default/F_cap";
import { GCapConfig } from "../../../engine/fonts/default/G_cap";
import { HCapConfig } from "../../../engine/fonts/default/H_cap";
import { ICapConfig } from "../../../engine/fonts/default/I_cap";
import { JCapConfig } from "../../../engine/fonts/default/J_cap";
import { eConfig } from "../../../engine/fonts/default/e";
import { lConfig } from "../../../engine/fonts/default/l";
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
M245.63,176.3c0,72.8-23.38,91.33-87.52,91.33l-87.68-.27V80.63h84.43c56.29,0,90.77,14.48,90.77,95.67ZM220.97,173.05c0-51.89-45.54-53.44-66.65-53.44-7.31,0-15.7.27-15.7.27v108.79h13.8c22.46,0,68.54,4.68,68.54-55.61Z
`;
const testSVGStr = `

`;
const testFromPoint = { x: 269.87, y: 199.11 };
const testP = convertPathToGlyphObject(testD);
const testPoints = shiftPointsToAnchor(testP.points, "point6", -95.8, 80.76);
const testToPoint = testPoints.point1;
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
    B: BCapConfig,
    C: CCapConfig,
    D: DCapConfig,
    E: ECapConfig,
    F: FCapConfig,
    G: GCapConfig,
    H: HCapConfig,
    I: ICapConfig,
    J: JCapConfig,
    e: eConfig,
    l: lConfig,
    n: nConfig,
    o: oConfig,
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
    const [isBottomPanelVisible, setBottomPanelVisible] = useState(false);
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
                    <Allotment vertical={true}>
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
                                            isBottomPanelVisible,
                                            setBottomPanelVisible,
                                        })}
                                </SidePanelGroup>
                            </div>
                        </Allotment.Pane>
                        <Allotment.Pane
                            visible={isBottomPanelVisible}
                            minSize={40}
                            preferredSize="33%"
                        >
                            <BottomPanel glyphData={glyphData} />
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
}
