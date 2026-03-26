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
import { eConfig } from "../../../engine/fonts/default/e";
import { FCapConfig } from "../../../engine/fonts/default/F_cap";
import { GCapConfig } from "../../../engine/fonts/default/G_cap";
import { HCapConfig } from "../../../engine/fonts/default/H_cap";
import { ICapConfig } from "../../../engine/fonts/default/I_cap";
import { JCapConfig } from "../../../engine/fonts/default/J_cap";
import { KCapConfig } from "../../../engine/fonts/default/K_cap";
import { LCapConfig } from "../../../engine/fonts/default/L_cap";
import { lConfig } from "../../../engine/fonts/default/l";
import { MCapConfig } from "../../../engine/fonts/default/M_cap";
import { NCapConfig } from "../../../engine/fonts/default/N_cap";
import { nConfig } from "../../../engine/fonts/default/n";
import { OCapConfig } from "../../../engine/fonts/default/O_cap";
import { oConfig } from "../../../engine/fonts/default/o";
import { PCapConfig } from "../../../engine/fonts/default/P_cap";
import { QCapConfig } from "../../../engine/fonts/default/Q_cap";
import { RCapConfig } from "../../../engine/fonts/default/R_cap";
import { SCapConfig } from "../../../engine/fonts/default/S_cap";
import { TCapConfig } from "../../../engine/fonts/default/T_cap";
import { UCapConfig } from "../../../engine/fonts/default/U_cap";
import { VCapConfig } from "../../../engine/fonts/default/V_cap";
import { WCapConfig } from "../../../engine/fonts/default/W_cap";
import { XCapConfig } from "../../../engine/fonts/default/X_cap";
import { YCapConfig } from "../../../engine/fonts/default/Y_cap";
import { ZCapConfig } from "../../../engine/fonts/default/Z_cap";
import { exportGlyphBasePaths } from "./exportGlyphBasePath";
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

// Ascender 30.5
// Cap Height 80.5
// X Height 136.25
// Baseline 267.76
//Midheight-187.26
// Descender 320

let testFullInnerHTML = `


`;
let testD = `
M147.44,247.76l93.58-.19v20.87H80.83l.69-36.53,84.7-106.62h-84.7l.54-44.65h168.86v33.02l-103.48,134.11Z
`;
let testSVGStr = "";
let testFromPoint = { x: 0, y: 0 };

// Temporary test helper: derive test inputs directly from full SVG innerHTML.
const extractTestInputsFromInnerHTML = (innerHTML) => {
    const pathMatch = innerHTML.match(/<path\b[^>]*\bd="([^"]*)"/i);
    const extractedD = pathMatch?.[1] ?? "";

    const circleMatches = innerHTML.match(/<circle\b[^>]*\/?>/gi) ?? [];
    const extractedCircles = circleMatches.join("\n");

    const mMatch = extractedD.match(
        /M\s*([-+]?\d*\.?\d+(?:e[-+]?\d+)?)\s*,?\s*([-+]?\d*\.?\d+(?:e[-+]?\d+)?)/i,
    );
    const extractedFromPoint = mMatch
        ? { x: Number(mMatch[1]), y: Number(mMatch[2]) }
        : { x: 0, y: 0 };

    return {
        testD: extractedD,
        testSVGStr: extractedCircles,
        testFromPoint: extractedFromPoint,
    };
};
// ({ testD, testSVGStr, testFromPoint } = extractTestInputsFromInnerHTML(testFullInnerHTML));
const testP = convertPathToGlyphObject(testD);
const testPoints = shiftPointsToAnchor(testP.points, "point8", -84.16, 80.77);
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
    e: eConfig,
    F: FCapConfig,
    G: GCapConfig,
    H: HCapConfig,
    I: ICapConfig,
    J: JCapConfig,
    K: KCapConfig,
    L: LCapConfig,
    l: lConfig,
    M: MCapConfig,
    N: NCapConfig,
    // n: nConfig,
    O: OCapConfig,
    // o: oConfig,
    P: PCapConfig,
    Q: QCapConfig,
    R: RCapConfig,
    S: SCapConfig,
    T: TCapConfig,
    U: UCapConfig,
    V: VCapConfig,
    W: WCapConfig,
    X: XCapConfig,
    Y: YCapConfig,
    Z: ZCapConfig,
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
                                            onExport: () =>
                                                exportGlyphBasePaths(glyphData, [
                                                    "A",
                                                    "a",
                                                    "B",
                                                    "C",
                                                    "D",
                                                    "E",
                                                    "e",
                                                    "F",
                                                    "G",
                                                    "H",
                                                    "I",
                                                    "J",
                                                    "K",
                                                    "L",
                                                    "l",
                                                    "M",
                                                    "N",
                                                    "O",
                                                    "P",
                                                    "Q",
                                                    "R",
                                                    "S",
                                                    "T",
                                                    "U",
                                                    "V",
                                                    "W",
                                                    "X",
                                                    "Y",
                                                    "Z",
                                                ]),
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
