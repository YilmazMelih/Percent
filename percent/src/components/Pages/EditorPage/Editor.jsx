import { Allotment } from "allotment";
import { Link } from "react-router-dom";
import "./Editor.css";
import "allotment/dist/style.css";
import SidePanelGroup, { SidePanelTab } from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import AllGlyphs from "./AllGlyphs";
import BottomPanel from "./BottomPanel";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import slidersIcon from "../../../assets/images/sliders-icon.svg";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { aConfig } from "../../../engine/fonts/default/a";
import { BCapConfig } from "../../../engine/fonts/default/B_cap";
import { bConfig } from "../../../engine/fonts/default/b";
import { CCapConfig } from "../../../engine/fonts/default/C_cap";
import { cConfig } from "../../../engine/fonts/default/c";
import { DCapConfig } from "../../../engine/fonts/default/D_cap";
import { dConfig } from "../../../engine/fonts/default/d";
import { ECapConfig } from "../../../engine/fonts/default/E_cap";
import { eConfig } from "../../../engine/fonts/default/e";
import { FCapConfig } from "../../../engine/fonts/default/F_cap";
import { fConfig } from "../../../engine/fonts/default/f";
import { GCapConfig } from "../../../engine/fonts/default/G_cap";
import { gConfig } from "../../../engine/fonts/default/g";
import { HCapConfig } from "../../../engine/fonts/default/H_cap";
import { hConfig } from "../../../engine/fonts/default/h";
import { ICapConfig } from "../../../engine/fonts/default/I_cap";
import { iConfig } from "../../../engine/fonts/default/i";
import { JCapConfig } from "../../../engine/fonts/default/J_cap";
import { jConfig } from "../../../engine/fonts/default/j";
import { KCapConfig } from "../../../engine/fonts/default/K_cap";
import { kConfig } from "../../../engine/fonts/default/k";
import { LCapConfig } from "../../../engine/fonts/default/L_cap";
import { lConfig } from "../../../engine/fonts/default/l";
import { MCapConfig } from "../../../engine/fonts/default/M_cap";
import { mConfig } from "../../../engine/fonts/default/m";
import { NCapConfig } from "../../../engine/fonts/default/N_cap";
import { nConfig } from "../../../engine/fonts/default/n";
import { OCapConfig } from "../../../engine/fonts/default/O_cap";
import { oConfig } from "../../../engine/fonts/default/o";
import { PCapConfig } from "../../../engine/fonts/default/P_cap";
import { pConfig } from "../../../engine/fonts/default/p";
import { QCapConfig } from "../../../engine/fonts/default/Q_cap";
import { qConfig } from "../../../engine/fonts/default/q";
import { RCapConfig } from "../../../engine/fonts/default/R_cap";
import { rConfig } from "../../../engine/fonts/default/r";
import { SCapConfig } from "../../../engine/fonts/default/S_cap";
import { sConfig } from "../../../engine/fonts/default/s";
import { TCapConfig } from "../../../engine/fonts/default/T_cap";
import { tConfig } from "../../../engine/fonts/default/t";
import { UCapConfig } from "../../../engine/fonts/default/U_cap";
import { uConfig } from "../../../engine/fonts/default/u";
import { VCapConfig } from "../../../engine/fonts/default/V_cap";
import { vConfig } from "../../../engine/fonts/default/v";
import { WCapConfig } from "../../../engine/fonts/default/W_cap";
import { wConfig } from "../../../engine/fonts/default/w";
import { XCapConfig } from "../../../engine/fonts/default/X_cap";
import { xConfig } from "../../../engine/fonts/default/x";
import { YCapConfig } from "../../../engine/fonts/default/Y_cap";
import { yConfig } from "../../../engine/fonts/default/y";
import { ZCapConfig } from "../../../engine/fonts/default/Z_cap";
import { zConfig } from "../../../engine/fonts/default/z";
import { exportGlyphBasePaths } from "./exportGlyphBasePath";
import { applyGroupedNodeSizeChanges } from "./nodeGroups";
import {
    convertPathToGlyphObject,
    applyInferredTransformToPoint,
    shiftPointsToAnchor,
    generateNodesFromCircles,
} from "../../../../pathToGlyphObject";
import {
    useLocalStorageBoolean,
    useLocalStorageJson,
    useLocalStorageString,
} from "../../../hooks/useLocalStorageState";
import TypeVisualizerWorkspace, {
    TYPE_VISUALIZER_MAX_LINE_CHARS,
    TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT,
    isTypeVisualizerSpaceEntry,
} from "../TypeVisualizer/TypeVisualizerWorkspace";

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
// X Height 131.38
// Baseline 267.76
// Descender 332.24

let testFullInnerHTML = `
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 332.45 348.26">
  <defs>
    <style>
      .cls-1 {
        fill: #39b54a;
      }
    </style>
  </defs>
  <path d="M228.87,255.55c-31.12,19.21-84.43,17.59-97.42-1.89-7.85-12.18-7.58-25.44-7.58-47.63l.54-38.43-20.84.54v-38.97l20.57.27-.27-34.37,62.78-15.97-.81,50.33,16.51-.54h14.88v39.24h-16.51l-14.88-.54.54,28.14c0,15.15-.54,25.98,14.61,25.44,7.85-.27,18.67-6.77,18.67-6.77l9.2,41.13Z"/>
  <circle class="cls-1" cx="155" cy="202.84" r="31.1"/>
  <circle class="cls-1" cx="190.47" cy="148.54" r="19.19"/>
</svg>
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
({ testD, testSVGStr, testFromPoint } = extractTestInputsFromInnerHTML(testFullInnerHTML));
const testP = convertPathToGlyphObject(testD);
const testPoints = shiftPointsToAnchor(testP.points, "point10", null, 132.18);
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
    b: bConfig,
    C: CCapConfig,
    c: cConfig,
    D: DCapConfig,
    d: dConfig,
    E: ECapConfig,
    e: eConfig,
    F: FCapConfig,
    f: fConfig,
    G: GCapConfig,
    g: gConfig,
    H: HCapConfig,
    h: hConfig,
    I: ICapConfig,
    i: iConfig,
    J: JCapConfig,
    j: jConfig,
    K: KCapConfig,
    k: kConfig,
    L: LCapConfig,
    l: lConfig,
    M: MCapConfig,
    m: mConfig,
    N: NCapConfig,
    n: nConfig,
    O: OCapConfig,
    o: oConfig,
    P: PCapConfig,
    p: pConfig,
    Q: QCapConfig,
    q: qConfig,
    R: RCapConfig,
    r: rConfig,
    S: SCapConfig,
    s: sConfig,
    T: TCapConfig,
    t: tConfig,
    U: UCapConfig,
    u: uConfig,
    V: VCapConfig,
    v: vConfig,
    W: WCapConfig,
    w: wConfig,
    X: XCapConfig,
    x: xConfig,
    Y: YCapConfig,
    y: yConfig,
    Z: ZCapConfig,
    z: zConfig,
};

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const SELECTED_GLYPH_STORAGE_KEY = "editor:selectedGlyph:v1";
const SEE_NODES_STORAGE_KEY = "editor:seeNodes:v1";
const SEE_PATH_POINTS_STORAGE_KEY = "editor:seePathPoints:v1";
const SEE_GUIDELINES_STORAGE_KEY = "editor:seeGuidelines:v1";
const BOTTOM_PANEL_VISIBLE_STORAGE_KEY = "editor:bottomPanelVisible:v1";
const SETTINGS_PANEL_OPEN_STORAGE_KEY = "editor:settingsPanelOpen:v1";
const NODE_GROUP_LINKS_STORAGE_KEY = "editor:nodeGroupLinks:v1";
const SHOW_ADVANCED_STORAGE_KEY = "editor:showAdvanced:v1";
const GUIDELINES_STORAGE_KEY = "editor:guideLines:v1";
const GLYPH_PANEL_OPEN_STORAGE_KEY = "editor:glyphPanelOpen:v1";
const GLYPH_PANEL_WIDTH_STORAGE_KEY = "editor:glyphPanelWidth:v1";
const GLYPH_MODE_PANE_WIDTHS_STORAGE_KEY = "editor:glyphModePaneWidths:v1";

const DEFAULT_GUIDELINES = {
    ascender: 30.5,
    cap_height: 80.5,
    x_height: 131.38,
    baseline: 267.76,
    descender: 332.24,
};

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
    const GLYPH_PANE_MIN_SIZE = 100;
    const GLYPH_PANE_MAX_SIZE = 350;
    const [glyphData, setGlyphData] = useState(() => hydrateGlyphData(initialConfigs));
    const [selectedGlyphRaw, setSelectedGlyphRaw] = useLocalStorageString(
        SELECTED_GLYPH_STORAGE_KEY,
        "A",
    );
    const selectedGlyph = initialConfigs[selectedGlyphRaw] ? selectedGlyphRaw : "A";
    const setSelectedGlyph = (next) => setSelectedGlyphRaw(initialConfigs[next] ? next : "A");
    const [guideLines, setGuideLines] = useLocalStorageJson(
        GUIDELINES_STORAGE_KEY,
        DEFAULT_GUIDELINES,
    );

    const [seeNodes, setSeeNodes] = useLocalStorageBoolean(SEE_NODES_STORAGE_KEY, true);
    const [seePathPoints, setSeePathPoints] = useLocalStorageBoolean(
        SEE_PATH_POINTS_STORAGE_KEY,
        false,
    );
    const [seeGuidelines, setSeeGuidelines] = useLocalStorageBoolean(
        SEE_GUIDELINES_STORAGE_KEY,
        true,
    );
    const [isBottomPanelVisible, setBottomPanelVisible] = useLocalStorageBoolean(
        BOTTOM_PANEL_VISIBLE_STORAGE_KEY,
        false,
    );

    const [nodeGroupLinks, setNodeGroupLinks] = useLocalStorageJson(
        NODE_GROUP_LINKS_STORAGE_KEY,
        {},
    );
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useLocalStorageBoolean(
        SETTINGS_PANEL_OPEN_STORAGE_KEY,
        true,
    );
    const [sizes, setSizes] = useState(() => {
        let rawGlyphWidth = GLYPH_PANE_MAX_SIZE;
        if (typeof window !== "undefined") {
            try {
                const raw = window.localStorage.getItem(GLYPH_MODE_PANE_WIDTHS_STORAGE_KEY);
                const parsed = raw ? JSON.parse(raw) : null;
                if (parsed && Number.isFinite(parsed.glyph)) {
                    rawGlyphWidth = parsed.glyph;
                }
            } catch {
                // Ignore malformed persisted value.
            }
        }

        const clampedLeft = Math.min(
            Math.max(rawGlyphWidth, GLYPH_PANE_MIN_SIZE),
            GLYPH_PANE_MAX_SIZE,
        );
        const totalSize =
            typeof window !== "undefined"
                ? Math.max(window.innerWidth - 160, clampedLeft + 320)
                : clampedLeft + 320;
        return [clampedLeft, Math.max(totalSize - clampedLeft, 100)];
    });
    const sizesRef = useRef([]);
    const allotmentRef = useRef(null);
    const allotmentReadyRef = useRef(false);
    const paneAnimationFrameRef = useRef(null);
    const [maxPaneSize, setMaxPaneSize] = useState((window.innerWidth * 2) / 3);
    const [showAdvanced, setShowAdvanced] = useLocalStorageBoolean(
        SHOW_ADVANCED_STORAGE_KEY,
        false,
    );
    const [typingMode, setTypingMode] = useState(false);
    const [preTypingCaret, setPreTypingCaret] = useState(false);
    const [isGlyphPanelOpen, setIsGlyphPanelOpen] = useLocalStorageBoolean(
        GLYPH_PANEL_OPEN_STORAGE_KEY,
        true,
    );
    const [glyphPanelWidth, setGlyphPanelWidth] = useLocalStorageJson(
        GLYPH_PANEL_WIDTH_STORAGE_KEY,
        320,
    );
    const [glyphModePaneWidths, setGlyphModePaneWidths] = useLocalStorageJson(
        GLYPH_MODE_PANE_WIDTHS_STORAGE_KEY,
        {
            typing: GLYPH_PANE_MIN_SIZE,
            glyph: GLYPH_PANE_MAX_SIZE,
        },
    );
    const [line, setLine] = useState([]);
    const [caretIndex, setCaretIndex] = useState(0);
    const [caretFollowNonce, setCaretFollowNonce] = useState(0);
    const [workspaceViewZoom, setWorkspaceViewZoom] = useState(TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT);
    const editorInputRef = useRef(null);

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

    const resizeGlyphPane = useCallback((targetLeftSize, commitState = true) => {
        if (!allotmentReadyRef.current || !allotmentRef.current?.resize) return;
        const currentSizes = sizesRef.current;
        let totalSize = 0;
        if (Array.isArray(currentSizes) && currentSizes.length === 2) {
            totalSize = currentSizes[0] + currentSizes[1];
        } else if (typeof window !== "undefined") {
            totalSize = Math.max(window.innerWidth - 160, targetLeftSize + 320);
        } else {
            totalSize = targetLeftSize + 320;
        }

        const clampedLeft = Math.min(
            Math.max(targetLeftSize, GLYPH_PANE_MIN_SIZE),
            GLYPH_PANE_MAX_SIZE,
        );
        const nextSizes = [clampedLeft, Math.max(totalSize - clampedLeft, 100)];
        try {
            allotmentRef.current.resize(nextSizes);
            sizesRef.current = nextSizes;
            if (commitState) setSizes(nextSizes);
        } catch {
            // Ignore transient resize attempts before Allotment internals are fully ready.
        }
    }, []);

    const animateGlyphPaneResize = useCallback(
        (targetLeftSize) => {
            if (paneAnimationFrameRef.current !== null) {
                window.cancelAnimationFrame(paneAnimationFrameRef.current);
                paneAnimationFrameRef.current = null;
            }

            const startLeftRaw =
                Array.isArray(sizesRef.current) && sizesRef.current.length === 2
                    ? sizesRef.current[0]
                    : targetLeftSize;
            const startLeft = Math.min(
                Math.max(startLeftRaw, GLYPH_PANE_MIN_SIZE),
                GLYPH_PANE_MAX_SIZE,
            );
            const endLeft = Math.min(
                Math.max(targetLeftSize, GLYPH_PANE_MIN_SIZE),
                GLYPH_PANE_MAX_SIZE,
            );

            if (Math.abs(endLeft - startLeft) < 0.5) {
                resizeGlyphPane(endLeft);
                return;
            }

            const durationMs = 120;
            const startTime = performance.now();
            const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

            const step = (now) => {
                const t = Math.min((now - startTime) / durationMs, 1);
                const easedT = easeInOutQuad(t);
                const currentLeft = startLeft + (endLeft - startLeft) * easedT;
                resizeGlyphPane(currentLeft, false);

                if (t < 1) {
                    paneAnimationFrameRef.current = window.requestAnimationFrame(step);
                    return;
                }

                paneAnimationFrameRef.current = null;
                resizeGlyphPane(endLeft, true);
            };

            paneAnimationFrameRef.current = window.requestAnimationFrame(step);
        },
        [resizeGlyphPane],
    );

    const getStoredPaneWidthForMode = useCallback(
        (isTypingMode) => {
            const rawWidth = isTypingMode
                ? glyphModePaneWidths?.typing
                : glyphModePaneWidths?.glyph;
            const fallback = isTypingMode ? GLYPH_PANE_MIN_SIZE : GLYPH_PANE_MAX_SIZE;
            const numericWidth = Number.isFinite(rawWidth) ? rawWidth : fallback;
            return Math.min(Math.max(numericWidth, GLYPH_PANE_MIN_SIZE), GLYPH_PANE_MAX_SIZE);
        },
        [glyphModePaneWidths],
    );

    useEffect(() => {
        const raf = window.requestAnimationFrame(() => {
            allotmentReadyRef.current = true;
            animateGlyphPaneResize(getStoredPaneWidthForMode(typingMode));
        });
        return () => window.cancelAnimationFrame(raf);
    }, [typingMode, animateGlyphPaneResize, getStoredPaneWidthForMode]);

    useEffect(
        () => () => {
            if (paneAnimationFrameRef.current !== null) {
                window.cancelAnimationFrame(paneAnimationFrameRef.current);
            }
        },
        [],
    );

    const setNodeSizeByKey = useCallback(
        (stateKey) => (value) => {
            setGlyphData((prevData) => {
                const prevSlice = prevData[stateKey];
                if (!prevSlice) return prevData;
                const newNodeSize = typeof value === "function" ? value(prevSlice.nodeSize) : value;
                const nextData = {
                    ...prevData,
                    [stateKey]: {
                        ...prevSlice,
                        nodeSize: newNodeSize,
                    },
                };
                return applyGroupedNodeSizeChanges(prevData, nextData, stateKey, nodeGroupLinks);
            });
        },
        [nodeGroupLinks],
    );

    const handleNodeSizeChange = (value) => {
        setGlyphData((prevData) => {
            const oldNodeSize = prevData[selectedGlyph].nodeSize;
            const newNodeSize = typeof value === "function" ? value(oldNodeSize) : value;
            const nextData = {
                ...prevData,
                [selectedGlyph]: {
                    ...prevData[selectedGlyph],
                    nodeSize: newNodeSize,
                },
            };
            return applyGroupedNodeSizeChanges(prevData, nextData, selectedGlyph, nodeGroupLinks);
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
    const typingAllowedKeys = useMemo(
        () =>
            Object.keys(initialConfigs).concat([
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
                " ",
            ]),
        [],
    );

    const workspaceLine = typingMode
        ? line
        : selectedGlyph
          ? [{ instanceId: "selected-preview", stateKey: selectedGlyph }]
          : [];
    const workspaceCaret = typingMode ? caretIndex : preTypingCaret ? 1 : 0;

    const activeStateKeys = useMemo(() => {
        if (!typingMode) return selectedGlyph ? [selectedGlyph] : [];
        return [
            ...new Set(
                line.filter((entry) => !isTypeVisualizerSpaceEntry(entry)).map((e) => e.stateKey),
            ),
        ];
    }, [typingMode, selectedGlyph, line]);

    const glyphPanels = useMemo(
        () =>
            activeStateKeys
                .map((stateKey) => {
                    const slice = glyphData[stateKey];
                    if (!slice) return null;
                    return {
                        glyphKey: stateKey,
                        title: `Glyph ${stateKey}`,
                        config: slice.config,
                        nodeSize: slice.nodeSize,
                        setNodeSize: setNodeSizeByKey(stateKey),
                        nodeX: slice.nodeX,
                        nodeY: slice.nodeY,
                        setNodeX: (value) =>
                            setGlyphData((prev) => {
                                const s = prev[stateKey];
                                if (!s) return prev;
                                const next = typeof value === "function" ? value(s.nodeX) : value;
                                return { ...prev, [stateKey]: { ...s, nodeX: next } };
                            }),
                        setNodeY: (value) =>
                            setGlyphData((prev) => {
                                const s = prev[stateKey];
                                if (!s) return prev;
                                const next = typeof value === "function" ? value(s.nodeY) : value;
                                return { ...prev, [stateKey]: { ...s, nodeY: next } };
                            }),
                    };
                })
                .filter(Boolean),
        [activeStateKeys, glyphData, setNodeSizeByKey],
    );

    const handleCaretPlacementFromSvg = useCallback(
        (index) => {
            editorInputRef.current?.focus();
            if (!typingMode) {
                if (!selectedGlyph) return;
                setPreTypingCaret(true);
                setCaretFollowNonce((n) => n + 1);
                return;
            }
            const next = Math.max(0, Math.min(line.length, index));
            setCaretFollowNonce((n) => n + 1);
            setCaretIndex(next);
        },
        [typingMode, selectedGlyph, line.length],
    );

    useEffect(() => {
        if (!typingMode) return;
        const closeGlyphPanel = () => setIsGlyphPanelOpen(false);
        closeGlyphPanel();
    }, [typingMode, setIsGlyphPanelOpen]);

    return (
        <div className="editor-container bg-gray-100">
            <button
                className={`settings-toggle-button ${isSettingsPanelOpen ? "active" : ""}`}
                onClick={() => setIsSettingsPanelOpen(!isSettingsPanelOpen)}
            >
                <img src={slidersIcon} alt="Settings" />
            </button>
            {/* <Link to="/playground" className="test-workplace-link">Test Workplace</Link> */}
            <Allotment
                ref={allotmentRef}
                defaultSizes={sizes.length > 0 ? sizes : undefined}
                onChange={(nextSizes) => {
                    sizesRef.current = nextSizes;
                }}
                onDragEnd={(finalSizes) => {
                    if (!Array.isArray(finalSizes) || finalSizes.length !== 2) return;
                    if (paneAnimationFrameRef.current !== null) {
                        window.cancelAnimationFrame(paneAnimationFrameRef.current);
                        paneAnimationFrameRef.current = null;
                    }
                    sizesRef.current = finalSizes;
                    setSizes(finalSizes);
                    const finalLeftSize = Math.min(
                        Math.max(finalSizes[0], GLYPH_PANE_MIN_SIZE),
                        GLYPH_PANE_MAX_SIZE,
                    );
                    setGlyphModePaneWidths((prev) => ({
                        ...(prev && typeof prev === "object" ? prev : {}),
                        [typingMode ? "typing" : "glyph"]: finalLeftSize,
                    }));
                }}
            >
                <Allotment.Pane
                    preferredSize={GLYPH_PANE_MAX_SIZE}
                    minSize={GLYPH_PANE_MIN_SIZE}
                    maxSize={GLYPH_PANE_MAX_SIZE}
                >
                    <AllGlyphs
                        guideLines={guideLines}
                        glyphData={glyphData}
                        selectedGlyph={typingMode ? "" : selectedGlyph}
                        onGlyphSelect={(next) => {
                            setSelectedGlyph(next);
                            setTypingMode(false);
                            setPreTypingCaret(false);
                            setLine([]);
                            setCaretIndex(0);
                            setCaretFollowNonce((n) => n + 1);
                        }}
                        availableGlyphs={Object.keys(initialConfigs)}
                    />
                </Allotment.Pane>
                <Allotment.Pane>
                    <Allotment vertical={true}>
                        <Allotment.Pane>
                            <div className="relative min-h-full flex bg-white rounded-r-md">
                                <div
                                    tabIndex={0}
                                    ref={editorInputRef}
                                    className="absolute inset-0 flex justify-center outline-none focus:outline-none focus-visible:outline-none"
                                    onClick={() => editorInputRef.current?.focus()}
                                    onKeyDown={(e) => {
                                        if (!typingAllowedKeys.includes(e.key)) return;

                                        if (!typingMode) {
                                            if (!preTypingCaret) return;
                                            if (e.key === "ArrowLeft" || e.key === "ArrowRight")
                                                return;
                                            if (!selectedGlyph) return;
                                            e.preventDefault();
                                            const baseLine = [
                                                {
                                                    instanceId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                                                    stateKey: selectedGlyph,
                                                },
                                            ];
                                            let nextLine = baseLine;
                                            let nextCaret = 1;

                                            if (e.key === "Backspace") {
                                                nextLine = [];
                                                nextCaret = 0;
                                            } else if (e.key === " ") {
                                                nextLine = baseLine.concat([
                                                    {
                                                        kind: "space",
                                                        instanceId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                                                    },
                                                ]);
                                                nextCaret = 2;
                                            } else if (e.key in initialConfigs) {
                                                nextLine = baseLine.concat([
                                                    {
                                                        instanceId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                                                        stateKey: e.key,
                                                    },
                                                ]);
                                                nextCaret = 2;
                                            } else if (e.key === "Delete") {
                                                nextLine = baseLine;
                                                nextCaret = 1;
                                            } else {
                                                return;
                                            }

                                            setTypingMode(true);
                                            setPreTypingCaret(false);

                                            setLine(nextLine);
                                            setCaretIndex(nextCaret);
                                            setCaretFollowNonce((n) => n + 1);
                                            return;
                                        }
                                        if (!typingAllowedKeys.includes(e.key)) return;
                                        e.preventDefault();
                                        if (e.key === "ArrowLeft") {
                                            setCaretFollowNonce((n) => n + 1);
                                            setCaretIndex((c) => Math.max(0, c - 1));
                                            return;
                                        }
                                        if (e.key === "ArrowRight") {
                                            setCaretFollowNonce((n) => n + 1);
                                            setCaretIndex((c) =>
                                                Math.min(workspaceLine.length, c + 1),
                                            );
                                            return;
                                        }
                                        if (e.key === "Backspace") {
                                            if (caretIndex <= 0) return;
                                            setCaretFollowNonce((n) => n + 1);
                                            setLine((prev) =>
                                                prev
                                                    .slice(0, caretIndex - 1)
                                                    .concat(prev.slice(caretIndex)),
                                            );
                                            setCaretIndex((c) => c - 1);
                                            setPreTypingCaret(false);
                                            return;
                                        }
                                        if (e.key === "Delete") {
                                            setCaretFollowNonce((n) => n + 1);
                                            setLine((prev) =>
                                                prev
                                                    .slice(0, caretIndex)
                                                    .concat(prev.slice(caretIndex + 1)),
                                            );
                                            return;
                                        }
                                        if (e.key === " ") {
                                            if (
                                                workspaceLine.length >=
                                                TYPE_VISUALIZER_MAX_LINE_CHARS
                                            )
                                                return;
                                            setCaretFollowNonce((n) => n + 1);
                                            const entry = {
                                                kind: "space",
                                                instanceId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                                            };
                                            setLine((prev) =>
                                                prev
                                                    .slice(0, caretIndex)
                                                    .concat([entry], prev.slice(caretIndex)),
                                            );
                                            setCaretIndex((c) => c + 1);
                                            setPreTypingCaret(false);
                                            return;
                                        }
                                        if (e.key in initialConfigs) {
                                            if (
                                                workspaceLine.length >=
                                                TYPE_VISUALIZER_MAX_LINE_CHARS
                                            )
                                                return;
                                            setCaretFollowNonce((n) => n + 1);
                                            const entry = {
                                                instanceId: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                                                stateKey: e.key,
                                            };
                                            setLine((prev) =>
                                                prev
                                                    .slice(0, caretIndex)
                                                    .concat([entry], prev.slice(caretIndex)),
                                            );
                                            setCaretIndex((c) => c + 1);
                                            setPreTypingCaret(false);
                                        }
                                    }}
                                >
                                    <TypeVisualizerWorkspace
                                        line={workspaceLine}
                                        glyphStates={glyphData}
                                        caretIndex={workspaceCaret}
                                        caretFollowNonce={caretFollowNonce}
                                        onCaretPlacement={handleCaretPlacementFromSvg}
                                        seeNodes={seeNodes}
                                        seePathPoints={seePathPoints}
                                        seeGuidelines={seeGuidelines}
                                        guideLines={guideLines}
                                        setGuideLines={setGuideLines}
                                        setNodeSizeByKey={setNodeSizeByKey}
                                        viewZoom={workspaceViewZoom}
                                        setViewZoom={setWorkspaceViewZoom}
                                        showCaret={typingMode || preTypingCaret}
                                        normalizeGlyphX={typingMode}
                                        compactMode={!typingMode}
                                        expandedMaxWidth={1300}
                                        viewBaseWidth={typingMode ? 1000 : 660}
                                        viewBaseHeight={400}
                                        guidelineLabelX={typingMode ? -130 : -330}
                                        guidelineLineOverhang={typingMode ? 800 : 0}
                                    />
                                </div>
                                <SidePanelGroup
                                    side="right"
                                    activeIndex={isSettingsPanelOpen ? 0 : null}
                                    onActiveIndexChange={(index) =>
                                        setIsSettingsPanelOpen(index !== null)
                                    }
                                >
                                    {glyphPanels.length > 0 &&
                                        SettingsPanel({
                                            glyphPanels,
                                            nodeGroupLinks,
                                            setNodeGroupLinks,
                                            seeNodes,
                                            setSeeNodes,
                                            seePathPoints,
                                            setSeePathPoints,
                                            seeGuidelines,
                                            setSeeGuidelines,
                                            showAdvanced,
                                            setShowAdvanced,
                                            isBottomPanelVisible,
                                            setBottomPanelVisible,
                                            typeVisualizerViewZoom: workspaceViewZoom,
                                            setTypeVisualizerViewZoom: setWorkspaceViewZoom,
                                            onResetGuidelines: () =>
                                                setGuideLines(DEFAULT_GUIDELINES),
                                            onExport: () =>
                                                exportGlyphBasePaths(
                                                    glyphData,
                                                    Object.keys(initialConfigs),
                                                    guideLines,
                                                ),
                                        })}
                                </SidePanelGroup>
                            </div>
                        </Allotment.Pane>
                        <Allotment.Pane
                            visible={isBottomPanelVisible}
                            minSize={40}
                            preferredSize="25%"
                        >
                            <BottomPanel glyphData={glyphData} guideLines={guideLines} />
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
}
