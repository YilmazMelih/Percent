import { Allotment } from "allotment";
import "allotment/dist/style.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import SidePanelGroup from "../EditorPage/SidePanelGroup";
import SettingsPanel from "../EditorPage/SettingsPanel";
import BottomPanel from "../EditorPage/BottomPanel";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { BCapConfig } from "../../../engine/fonts/default/B_cap";
import { CCapConfig } from "../../../engine/fonts/default/C_cap";
import TypeVisualizerWorkspace from "./TypeVisualizerWorkspace";
import { applyGroupedNodeSizeChanges } from "../EditorPage/nodeGroups";

const GLYPH_STATE_STORAGE_KEY = "editor:glyphData:v1";
const SEE_NODES_STORAGE_KEY = "editor:seeNodes:v1";
const SEE_PATH_POINTS_STORAGE_KEY = "editor:seePathPoints:v1";
const SEE_GUIDELINES_STORAGE_KEY = "editor:seeGuidelines:v1";
const SETTINGS_PANEL_OPEN_STORAGE_KEY = "editor:settingsPanelOpen:v1";
const NODE_GROUP_LINKS_STORAGE_KEY = "editor:nodeGroupLinks:v1";

/** Maps editor glyph keys → config. Extend when adding glyphs dynamically. */
export const TYPE_VISUALIZER_CONFIG_BY_KEY = {
    A: ACapConfig,
    B: BCapConfig,
    C: CCapConfig,
};

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
    return [
        { instanceId: "0", stateKey: "A" },
        { instanceId: "1", stateKey: "B" },
        { instanceId: "2", stateKey: "C" },
    ];
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
    const [line, setLine] = useState(createInitialLine);
    const [glyphStates, setGlyphStates] = useState(() => hydrateGlyphStates());

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
    const [seeGuidelines, setSeeGuidelines] = useState(() => {
        if (typeof window === "undefined") return true;
        const saved = window.localStorage.getItem(SEE_GUIDELINES_STORAGE_KEY);
        return saved === null ? true : saved === "true";
    });
    const [isBottomPanelVisible, setBottomPanelVisible] = useState(false);
    const [nodeGroupLinks, setNodeGroupLinks] = useState(() => {
        if (typeof window === "undefined") return {};
        try {
            const raw = window.localStorage.getItem(NODE_GROUP_LINKS_STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : {};
            return parsed && typeof parsed === "object" ? parsed : {};
        } catch {
            return {};
        }
    });
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(() => {
        if (typeof window === "undefined") return false;
        const saved = window.localStorage.getItem(SETTINGS_PANEL_OPEN_STORAGE_KEY);
        return saved === "true";
    });

    useEffect(() => {
        persistGlyphStatesSlice(glyphStates);
    }, [glyphStates]);

    useEffect(() => {
        window.localStorage.setItem(SEE_NODES_STORAGE_KEY, String(seeNodes));
    }, [seeNodes]);

    useEffect(() => {
        window.localStorage.setItem(SEE_PATH_POINTS_STORAGE_KEY, String(seePathPoints));
    }, [seePathPoints]);

    useEffect(() => {
        window.localStorage.setItem(SEE_GUIDELINES_STORAGE_KEY, String(seeGuidelines));
    }, [seeGuidelines]);

    useEffect(() => {
        window.localStorage.setItem(SETTINGS_PANEL_OPEN_STORAGE_KEY, String(isSettingsPanelOpen));
    }, [isSettingsPanelOpen]);

    useEffect(() => {
        window.localStorage.setItem(NODE_GROUP_LINKS_STORAGE_KEY, JSON.stringify(nodeGroupLinks));
    }, [nodeGroupLinks]);

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
        () => [...new Set(line.map((entry) => entry.stateKey))],
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

    return (
        <div style={{ height: "calc(100vh - 60px)" }}>
            <Allotment>
                <Allotment.Pane>
                    <Allotment vertical={true}>
                        <Allotment.Pane>
                            <div className="relative min-h-full flex">
                                <div className="absolute inset-0 flex justify-center">
                                    <TypeVisualizerWorkspace
                                        line={line}
                                        glyphStates={glyphStates}
                                        seeNodes={seeNodes}
                                        seePathPoints={seePathPoints}
                                        seeGuidelines={seeGuidelines}
                                        setNodeSizeByKey={handleNodeSizeChange}
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
                            <BottomPanel glyphData={bottomGlyphData} />
                        </Allotment.Pane>
                    </Allotment>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
}
