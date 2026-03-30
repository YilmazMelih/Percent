import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import SidePanelGroup from "../EditorPage/SidePanelGroup";
import SettingsPanel from "../EditorPage/SettingsPanel";
import BottomPanel from "../EditorPage/BottomPanel";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { BCapConfig } from "../../../engine/fonts/default/B_cap";
import { CCapConfig } from "../../../engine/fonts/default/C_cap";
import { DCapConfig } from "../../../engine/fonts/default/D_cap";
import { ECapConfig } from "../../../engine/fonts/default/E_cap";
import { FCapConfig } from "../../../engine/fonts/default/F_cap";
import { GCapConfig } from "../../../engine/fonts/default/G_cap";
import { HCapConfig } from "../../../engine/fonts/default/H_cap";
import { ICapConfig } from "../../../engine/fonts/default/I_cap";
import { JCapConfig } from "../../../engine/fonts/default/J_cap";
import { KCapConfig } from "../../../engine/fonts/default/K_cap";
import { LCapConfig } from "../../../engine/fonts/default/L_cap";
import { MCapConfig } from "../../../engine/fonts/default/M_cap";
import { NCapConfig } from "../../../engine/fonts/default/N_cap";
import { OCapConfig } from "../../../engine/fonts/default/O_cap";
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
import { aConfig } from "../../../engine/fonts/default/a";
import { eConfig } from "../../../engine/fonts/default/e";
import { lConfig } from "../../../engine/fonts/default/l";
import TypeVisualizerWorkspace, {
    TYPE_VISUALIZER_MAX_LINE_CHARS,
    TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT,
    isTypeVisualizerSpaceEntry,
} from "./TypeVisualizerWorkspace";
import { applyGroupedNodeSizeChanges } from "../EditorPage/nodeGroups";
import { useLocalStorageBoolean, useLocalStorageJson } from "../../../hooks/useLocalStorageState";

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const SEE_NODES_STORAGE_KEY = "editor:seeNodes:v1";
const SEE_PATH_POINTS_STORAGE_KEY = "editor:seePathPoints:v1";
const SEE_GUIDELINES_STORAGE_KEY = "editor:seeGuidelines:v1";
const SETTINGS_PANEL_OPEN_STORAGE_KEY = "editor:settingsPanelOpen:v1";
const NODE_GROUP_LINKS_STORAGE_KEY = "editor:nodeGroupLinks:v1";
const SHOW_ADVANCED_STORAGE_KEY = "editor:showAdvanced:v1";

/** Maps editor glyph keys → config. Extend when adding glyphs dynamically. */
export const TYPE_VISUALIZER_CONFIG_BY_KEY = {
    A: ACapConfig,
    B: BCapConfig,
    C: CCapConfig,
    D: DCapConfig,
    E: ECapConfig,
    F: FCapConfig,
    G: GCapConfig,
    H: HCapConfig,
    I: ICapConfig,
    J: JCapConfig,
    K: KCapConfig,
    L: LCapConfig,
    M: MCapConfig,
    N: NCapConfig,
    O: OCapConfig,
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
    a: aConfig,
    e: eConfig,
    l: lConfig,
};

const allowedKeys = Object.keys(TYPE_VISUALIZER_CONFIG_BY_KEY).concat([
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    " ",
]);

function createGlyphSlice(config) {
    return {
        config,
        nodeSize: config.nodes.map((node) => node.default),
        nodeX: config.nodes.map(() => 0),
        nodeY: config.nodes.map(() => 0),
    };
}

/** Hardcoded line: three instances (A, B, C). Duplicate stateKey = shared node state. */
function createInitialLine() {
    return [{ instanceId: "0", stateKey: "A" }];
}

function hydrateGlyphStates() {
    const base = {};
    for (const stateKey of Object.keys(TYPE_VISUALIZER_CONFIG_BY_KEY)) {
        const config = TYPE_VISUALIZER_CONFIG_BY_KEY[stateKey];
        base[stateKey] = createGlyphSlice(config);
    }
    if (typeof window === "undefined") return base;

    try {
        const raw = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
        if (!raw) return base;
        const saved = JSON.parse(raw);
        if (!saved || typeof saved !== "object") return base;

        for (const stateKey of Object.keys(base)) {
            const savedGlyph = saved[stateKey];
            if (!savedGlyph || typeof savedGlyph !== "object") continue;
            const nodeCount = base[stateKey].config.nodes.length;
            if (Array.isArray(savedGlyph.nodeSize) && savedGlyph.nodeSize.length === nodeCount) {
                base[stateKey].nodeSize = savedGlyph.nodeSize;
            }
            if (Array.isArray(savedGlyph.nodeX) && savedGlyph.nodeX.length === nodeCount) {
                base[stateKey].nodeX = savedGlyph.nodeX;
            }
            if (Array.isArray(savedGlyph.nodeY) && savedGlyph.nodeY.length === nodeCount) {
                base[stateKey].nodeY = savedGlyph.nodeY;
            }
        }
    } catch {
        // ignore
    }

    return base;
}

/**
 * Merge current TypeVisualizer glyph states into full editor persistence without dropping other glyphs.
 */
function persistGlyphStatesSlice(glyphStates) {
    if (typeof window === "undefined") return;
    try {
        const raw = window.localStorage.getItem(GLYPH_STATE_STORAGE_KEY);
        const saved = raw ? JSON.parse(raw) : {};
        const next = saved && typeof saved === "object" ? { ...saved } : {};
        for (const stateKey of Object.keys(glyphStates)) {
            const slice = glyphStates[stateKey];
            next[stateKey] = {
                ...next[stateKey],
                config: slice.config,
                nodeSize: slice.nodeSize,
                nodeX: slice.nodeX,
                nodeY: slice.nodeY,
            };
        }
        window.localStorage.setItem(GLYPH_STATE_STORAGE_KEY, JSON.stringify(next));
    } catch {
        window.localStorage.setItem(GLYPH_STATE_STORAGE_KEY, JSON.stringify(glyphStates));
    }
}

export default function TypeVisualizer() {
    const [line, setLine] = useState([]);
    const [glyphStates, setGlyphStates] = useState(() => hydrateGlyphStates());
    const divRef = useRef(null);
    const [seeNodes, setSeeNodes] = useLocalStorageBoolean(SEE_NODES_STORAGE_KEY, true);
    const [seePathPoints, setSeePathPoints] = useLocalStorageBoolean(
        SEE_PATH_POINTS_STORAGE_KEY,
        false,
    );
    const [seeGuidelines, setSeeGuidelines] = useLocalStorageBoolean(
        SEE_GUIDELINES_STORAGE_KEY,
        true,
    );
    const [isBottomPanelVisible, setBottomPanelVisible] = useState(false);
    const [nodeGroupLinks, setNodeGroupLinks] = useLocalStorageJson(
        NODE_GROUP_LINKS_STORAGE_KEY,
        {},
    );
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useLocalStorageBoolean(
        SETTINGS_PANEL_OPEN_STORAGE_KEY,
        false,
    );

    useEffect(() => {
        persistGlyphStatesSlice(glyphStates);
    }, [glyphStates]);

    useEffect(() => {
        divRef.current?.focus();
    }, []);

    const handleNodeSizeChange = useCallback(
        (stateKey) => (value) => {
            setGlyphStates((prev) => {
                const slice = prev[stateKey];
                if (!slice) return prev;
                const prevData = { ...prev };
                const nextNodeSize = typeof value === "function" ? value(slice.nodeSize) : value;
                const nextData = {
                    ...prevData,
                    [stateKey]: {
                        ...prevData[stateKey],
                        nodeSize: nextNodeSize,
                    },
                };
                const merged = applyGroupedNodeSizeChanges(
                    prevData,
                    nextData,
                    stateKey,
                    nodeGroupLinks,
                );
                const out = { ...prev };
                for (const k of Object.keys(out)) {
                    if (merged[k]) out[k] = merged[k];
                }
                return out;
            });
        },
        [nodeGroupLinks],
    );

    const handleNodeXChange = useCallback(
        (stateKey) => (value) => {
            setGlyphStates((prev) => {
                const slice = prev[stateKey];
                if (!slice) return prev;
                const next = typeof value === "function" ? value(slice.nodeX) : value;
                return {
                    ...prev,
                    [stateKey]: { ...slice, nodeX: next },
                };
            });
        },
        [],
    );

    const handleNodeYChange = useCallback(
        (stateKey) => (value) => {
            setGlyphStates((prev) => {
                const slice = prev[stateKey];
                if (!slice) return prev;
                const next = typeof value === "function" ? value(slice.nodeY) : value;
                return {
                    ...prev,
                    [stateKey]: { ...slice, nodeY: next },
                };
            });
        },
        [],
    );

    const uniqueStateKeys = useMemo(
        () => [
            ...new Set(
                line
                    .filter((entry) => !isTypeVisualizerSpaceEntry(entry) && entry.stateKey)
                    .map((entry) => entry.stateKey),
            ),
        ],
        [line],
    );

    const glyphPanels = useMemo(
        () =>
            uniqueStateKeys
                .map((stateKey) => {
                    const slice = glyphStates[stateKey];
                    if (!slice) return null;
                    return {
                        glyphKey: stateKey,
                        title: `Glyph ${stateKey}`,
                        config: slice.config,
                        nodeSize: slice.nodeSize,
                        setNodeSize: handleNodeSizeChange(stateKey),
                        nodeX: slice.nodeX,
                        nodeY: slice.nodeY,
                        setNodeX: handleNodeXChange(stateKey),
                        setNodeY: handleNodeYChange(stateKey),
                    };
                })
                .filter(Boolean),
        [uniqueStateKeys, glyphStates, handleNodeSizeChange, handleNodeXChange, handleNodeYChange],
    );

    const bottomGlyphData = useMemo(() => ({ ...glyphStates }), [glyphStates]);

    /** 0 … line.length — index of gap before `line[index]`; `line.length` = after last glyph. */
    const [caretIndex, setCaretIndex] = useState(0);
    /** ViewBox zoom: lower = more world units visible (smaller glyphs). See TypeVisualizerWorkspace. */
    const [workspaceViewZoom, setWorkspaceViewZoom] = useState(TYPE_VISUALIZER_VIEW_ZOOM_DEFAULT);
    const [showAdvanced, setShowAdvanced] = useLocalStorageBoolean(SHOW_ADVANCED_STORAGE_KEY, false);

    useEffect(() => {
        setCaretIndex((c) => Math.min(c, line.length));
    }, [line.length]);

    return (
        <div style={{ height: "calc(100vh - 60px)" }}>
            <Allotment>
                <Allotment.Pane>
                    <Allotment vertical={true}>
                        <Allotment.Pane>
                            <div className="relative min-h-full flex">
                                <div
                                    tabIndex={0}
                                    ref={divRef}
                                    className="absolute inset-0 flex justify-center"
                                    onClick={() => divRef.current?.focus()}
                                    onKeyDown={(e) => {
                                        if (!allowedKeys.includes(e.key)) return;
                                        e.preventDefault();
                                        if (e.key === "ArrowLeft") {
                                            setCaretIndex((c) => Math.max(0, c - 1));
                                            return;
                                        }
                                        if (e.key === "ArrowRight") {
                                            setCaretIndex((c) => Math.min(line.length, c + 1));
                                            return;
                                        }
                                        if (e.key === "Backspace") {
                                            if (caretIndex <= 0) return;
                                            setLine((prev) =>
                                                prev
                                                    .slice(0, caretIndex - 1)
                                                    .concat(prev.slice(caretIndex)),
                                            );
                                            setCaretIndex((c) => c - 1);
                                            return;
                                        }
                                        if (e.key === "Delete") {
                                            setLine((prev) =>
                                                prev
                                                    .slice(0, caretIndex)
                                                    .concat(prev.slice(caretIndex + 1)),
                                            );
                                            return;
                                        }
                                        if (e.key === " ") {
                                            if (line.length >= TYPE_VISUALIZER_MAX_LINE_CHARS) return;
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
                                            return;
                                        }
                                        if (e.key in TYPE_VISUALIZER_CONFIG_BY_KEY) {
                                            if (line.length >= TYPE_VISUALIZER_MAX_LINE_CHARS) return;
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
                                        }
                                    }}
                                >
                                    <TypeVisualizerWorkspace
                                        line={line}
                                        glyphStates={glyphStates}
                                        caretIndex={caretIndex}
                                        seeNodes={seeNodes}
                                        seePathPoints={seePathPoints}
                                        seeGuidelines={seeGuidelines}
                                        setNodeSizeByKey={handleNodeSizeChange}
                                        viewZoom={workspaceViewZoom}
                                    />
                                </div>
                                <SidePanelGroup
                                    side="right"
                                    activeIndex={isSettingsPanelOpen ? 0 : null}
                                    onActiveIndexChange={(index) =>
                                        setIsSettingsPanelOpen(index !== null)
                                    }
                                >
                                    {SettingsPanel({
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
                                    })}
                                </SidePanelGroup>
                            </div>
                        </Allotment.Pane>
                        <Allotment.Pane
                            visible={isBottomPanelVisible}
                            minSize={40}
                            preferredSize="33%"
                        >
                            <BottomPanel glyphData={bottomGlyphData} />
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
}
