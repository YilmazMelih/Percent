import { useState } from "react";
import {
    TYPE_VISUALIZER_VIEW_ZOOM_MAX,
    TYPE_VISUALIZER_VIEW_ZOOM_MIN,
} from "../TypeVisualizer/TypeVisualizerWorkspace";
import SliderPanel from "../../../engine/NodeSliders";
import { isNodeInAnyGroup, isNodeGroupMemberLinked, nodeGroupMemberKey } from "./nodeGroups";

/**
 * @typedef {Object} GlyphPanel
 * @property {string} glyphKey - editor glyph key (e.g. "A", "a") for node groups / persistence
 * @property {string} [title] - section heading
 * @property {object} config
 * @property {number[]} nodeSize
 * @property {function} setNodeSize
 * @property {number[]} nodeX
 * @property {number[]} nodeY
 * @property {function} setNodeX
 * @property {function} setNodeY
 */

function SettingsPanelBody({
    config,
    glyphKey,
    nodeSize,
    setNodeSize,
    nodeX,
    setNodeX,
    nodeY,
    setNodeY,
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
    onResetGuidelines,
    showAdvanced = true,
    setShowAdvanced = () => {},
    /** TypeVisualizer only: viewBox zoom (see TypeVisualizerWorkspace). */
    typeVisualizerViewZoom,
    setTypeVisualizerViewZoom,
}) {
    const [openGlyphDropdowns, setOpenGlyphDropdowns] = useState({});
    const getGroupedNodeNames = (targetGlyphKey, targetConfig) => {
        return (targetConfig?.nodes ?? [])
            .map((node) => node?.name)
            .filter((nodeName) => isNodeInAnyGroup(targetGlyphKey, nodeName));
    };

    const areAllGlyphGroupNodesLinked = (targetGlyphKey, targetConfig) => {
        const groupedNodeNames = getGroupedNodeNames(targetGlyphKey, targetConfig);
        if (groupedNodeNames.length === 0) return false;
        return groupedNodeNames.every((nodeName) =>
            isNodeGroupMemberLinked(nodeGroupLinks, targetGlyphKey, nodeName),
        );
    };

    const toggleGlyphSystemLinks = (targetGlyphKey, targetConfig) => {
        const groupedNodeNames = getGroupedNodeNames(targetGlyphKey, targetConfig);
        if (groupedNodeNames.length === 0) return;

        const shouldUnlink = groupedNodeNames.every((nodeName) =>
            isNodeGroupMemberLinked(nodeGroupLinks, targetGlyphKey, nodeName),
        );

        setNodeGroupLinks((prev) => {
            const next = { ...(prev || {}) };
            groupedNodeNames.forEach((nodeName) => {
                const key = nodeGroupMemberKey(targetGlyphKey, nodeName);
                if (shouldUnlink) {
                    next[key] = false;
                } else {
                    delete next[key];
                }
            });
            return next;
        });
    };

    const glyphPanelsIsArray = Array.isArray(glyphPanels);
    const isMulti = glyphPanelsIsArray && glyphPanels.length > 0;
    const isMultiEmptyLine = glyphPanelsIsArray && glyphPanels.length === 0;
    const sliderCommon = {
        hideGlobalToolbar: true,
        showAdvanced,
        setShowAdvanced,
        nodeGroupLinks,
        setNodeGroupLinks,
        seeNodes,
        setSeeNodes,
        seePathPoints,
        setSeePathPoints,
        seeGuidelines,
        setSeeGuidelines,
    };

    return (
        <>
            <style>
                {`
                    .settings-zoom-slider {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 100%;
                        height: 16px;
                        border-radius: 999px;
                        background:
                            linear-gradient(
                                to right,
                                #beff00 0%,
                                #beff00 var(--slider-progress, 50%),
                                transparent var(--slider-progress, 50%),
                                transparent 100%
                            )
                            center / 100% 6px no-repeat,
                            linear-gradient(
                                to right,
                                rgba(190, 255, 0, 0.2) 0%,
                                rgba(190, 255, 0, 0.2) 100%
                            )
                            center / 100% 2px no-repeat;
                        outline: none;
                    }
                    .settings-zoom-slider::-webkit-slider-runnable-track {
                        height: 16px;
                        border-radius: 999px;
                        background: transparent;
                    }
                    .settings-zoom-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 16px;
                        height: 16px;
                        border-radius: 999px;
                        border: none;
                        background: #beff00;
                        margin-top: -6px;
                        transition: transform 120ms ease, box-shadow 120ms ease;
                        box-shadow: 0 0 0 0 rgba(190, 255, 0, 0.45);
                    }
                    .settings-zoom-slider:active::-webkit-slider-thumb {
                        transform: scale(1.12);
                        box-shadow: 0 0 0 5px rgba(190, 255, 0, 0.35);
                    }
                    .settings-zoom-slider:focus-visible::-webkit-slider-thumb {
                        box-shadow: 0 0 0 4px rgba(190, 255, 0, 0.3);
                    }
                    .settings-zoom-slider::-moz-range-track {
                        height: 16px;
                        border: none;
                        border-radius: 999px;
                        background: transparent;
                    }
                    .settings-zoom-slider::-moz-range-progress {
                        height: 6px;
                        border: none;
                        border-radius: 999px;
                        background: #beff00;
                    }
                    .settings-zoom-slider::-moz-range-thumb {
                        width: 16px;
                        height: 16px;
                        border-radius: 999px;
                        border: none;
                        background: #beff00;
                        transition: transform 120ms ease, box-shadow 120ms ease;
                        box-shadow: 0 0 0 0 rgba(190, 255, 0, 0.45);
                    }
                    .settings-zoom-slider:active::-moz-range-thumb {
                        transform: scale(1.12);
                        box-shadow: 0 0 0 5px rgba(190, 255, 0, 0.35);
                    }
                    .settings-zoom-slider:focus-visible::-moz-range-thumb {
                        box-shadow: 0 0 0 4px rgba(190, 255, 0, 0.3);
                    }
                `}
            </style>
            <div className="mb-4 text-white">
                <h2 className="text-xl font-bold text-white mb-3 px-2">Settings</h2>
                <h3 className="text-base font-semibold text-white mb-2 px-2">Tools</h3>
                <div className="flex flex-col gap-2">
                    {[
                        {
                            label: "See Nodes",
                            checked: !!seeNodes,
                            onChange: (checked) => setSeeNodes(checked),
                        },
                        {
                            label: "See Guidelines",
                            checked: !!seeGuidelines,
                            onChange: (checked) => setSeeGuidelines?.(checked),
                        },
                        {
                            label: "Advanced",
                            checked: !!showAdvanced,
                            onChange: (checked) => setShowAdvanced(checked),
                        },
                    ].map((tool) => (
                        <label
                            key={tool.label}
                            className="mx-2 px-3 py-2 rounded-md flex items-center justify-between cursor-pointer"
                            style={{ backgroundColor: "#5c199d" }}
                        >
                            <span className="text-white text-base font-medium">{tool.label}</span>
                            <input
                                type="checkbox"
                                checked={tool.checked}
                                onChange={(e) => tool.onChange(e.target.checked)}
                                className="sr-only"
                            />
                            <span
                                className="inline-flex items-center justify-center w-6 h-6 rounded-full border-[3px] border-[#BEff00]"
                                aria-hidden="true"
                            >
                                <span
                                    className={`w-3.5 h-3.5 rounded-full bg-[#BEff00] transition-opacity ${
                                        tool.checked ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            {typeof setTypeVisualizerViewZoom === "function" && typeVisualizerViewZoom != null && (
                <div className="mb-4 pb-4 border-b border-gray-200 text-white">
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-base font-medium text-white">Workspace zoom</span>
                        <span className="tabular-nums text-white text-sm">
                            {Math.round(typeVisualizerViewZoom * 100)}%
                        </span>
                    </div>
                    <p className="text-sm text-white mb-2">
                        Left: zoom out (smaller type, more line visible). Right: zoom in.
                    </p>
                    <input
                        type="range"
                        min={TYPE_VISUALIZER_VIEW_ZOOM_MIN}
                        max={TYPE_VISUALIZER_VIEW_ZOOM_MAX}
                        step={0.05}
                        value={typeVisualizerViewZoom}
                        onChange={(e) =>
                            setTypeVisualizerViewZoom(Number.parseFloat(e.target.value))
                        }
                        className="settings-zoom-slider"
                        style={{
                            "--slider-progress": `${((typeVisualizerViewZoom - TYPE_VISUALIZER_VIEW_ZOOM_MIN) / (TYPE_VISUALIZER_VIEW_ZOOM_MAX - TYPE_VISUALIZER_VIEW_ZOOM_MIN)) * 100}%`,
                        }}
                        aria-label="Workspace zoom"
                    />
                </div>
            )}
            {isMulti ? (
                glyphPanels.map((panel) => {
                    const dropdownId = `glyph-${panel.glyphKey}`;
                    const isOpen = !!openGlyphDropdowns[dropdownId];
                    return (
                        <div key={dropdownId} className="mt-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenGlyphDropdowns((prev) => ({
                                        ...prev,
                                        [dropdownId]: !prev[dropdownId],
                                    }))
                                }
                                className="mx-2 w-[calc(100%-1rem)] px-3 py-2 rounded-md flex items-center justify-between text-black"
                                style={{
                                    backgroundColor: "#ffffff",
                                    appearance: "none",
                                    WebkitAppearance: "none",
                                    border: "1px solid #ffffff",
                                }}
                            >
                                <span className="text-base font-medium">
                                    {panel.title ?? `Glyph ${panel.glyphKey}`}
                                </span>
                                <span className="text-sm">{isOpen ? "▾" : "▸"}</span>
                            </button>
                            {isOpen && (
                                <div
                                    className="mx-2 mt-2 rounded-md px-3 py-3"
                                    style={{ backgroundColor: "#5c199d" }}
                                >
                                    <SliderPanel
                                        showLockButton={false}
                                        names={panel.config.nodes.map((node) => node.name)}
                                        glyphKey={panel.glyphKey}
                                        nodeSize={panel.nodeSize}
                                        setNodeSize={panel.setNodeSize}
                                        nodeX={panel.nodeX}
                                        setNodeX={panel.setNodeX}
                                        nodeY={panel.nodeY}
                                        setNodeY={panel.setNodeY}
                                        {...sliderCommon}
                                    />
                                    {getGroupedNodeNames(panel.glyphKey, panel.config).length > 0 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                toggleGlyphSystemLinks(
                                                    panel.glyphKey,
                                                    panel.config,
                                                )
                                            }
                                            className="mt-5 w-full px-3 py-2 rounded-md flex items-center justify-between cursor-pointer"
                                            style={{
                                                backgroundColor: "#5c199d",
                                                appearance: "none",
                                                WebkitAppearance: "none",
                                                border: "none",
                                            }}
                                            aria-pressed={areAllGlyphGroupNodesLinked(
                                                panel.glyphKey,
                                                panel.config,
                                            )}
                                        >
                                            <span className="text-white text-base font-medium">
                                                {areAllGlyphGroupNodesLinked(
                                                    panel.glyphKey,
                                                    panel.config,
                                                )
                                                    ? "Unlink System"
                                                    : "Link System"}
                                            </span>
                                            <span
                                                className="inline-flex items-center justify-center w-6 h-6 rounded-full border-[3px] border-[#BEff00]"
                                                aria-hidden="true"
                                            >
                                                <span
                                                    className={`w-3.5 h-3.5 rounded-full bg-[#BEff00] transition-opacity ${
                                                        areAllGlyphGroupNodesLinked(
                                                            panel.glyphKey,
                                                            panel.config,
                                                        )
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                    }`}
                                                />
                                            </span>
                                        </button>
                                    )}
                                    {showAdvanced &&
                                        typeof panel.setPointDeltas === "function" && (
                                            <button
                                                type="button"
                                                onClick={() => panel.setPointDeltas({})}
                                                className="mt-3 w-full px-3 py-2 rounded-md flex items-center justify-between cursor-pointer"
                                                style={{
                                                    backgroundColor: "#5c199d",
                                                    appearance: "none",
                                                    WebkitAppearance: "none",
                                                    border: "none",
                                                }}
                                            >
                                                <span className="text-white text-base font-medium">
                                                    Reset points
                                                </span>
                                            </button>
                                        )}
                                </div>
                            )}
                        </div>
                    );
                })
            ) : isMultiEmptyLine ? (
                <p className="text-sm text-gray-500">
                    Type a letter in the workspace to add glyph sliders. Global options above still
                    apply.
                </p>
            ) : (
                <div className="mt-3">
                    <button
                        type="button"
                        onClick={() =>
                            setOpenGlyphDropdowns((prev) => ({
                                ...prev,
                                glyphSingle: !prev.glyphSingle,
                            }))
                        }
                        className="mx-2 w-[calc(100%-1rem)] px-3 py-2 rounded-md flex items-center justify-between text-black"
                        style={{
                            backgroundColor: "#ffffff",
                            appearance: "none",
                            WebkitAppearance: "none",
                            border: "1px solid #ffffff",
                        }}
                    >
                        <span className="text-base font-medium">Glyph</span>
                        <span className="text-sm">{openGlyphDropdowns.glyphSingle ? "▾" : "▸"}</span>
                    </button>
                    {openGlyphDropdowns.glyphSingle && (
                        <div
                            className="mx-2 mt-2 rounded-md px-3 py-3"
                            style={{ backgroundColor: "#5c199d" }}
                        >
                            <SliderPanel
                                showLockButton={false}
                                names={config.nodes.map((node) => node.name)}
                                glyphKey={glyphKey}
                                nodeSize={nodeSize}
                                setNodeSize={setNodeSize}
                                nodeX={nodeX}
                                setNodeX={setNodeX}
                                nodeY={nodeY}
                                setNodeY={setNodeY}
                                {...sliderCommon}
                            />
                            {getGroupedNodeNames(glyphKey, config).length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => toggleGlyphSystemLinks(glyphKey, config)}
                                    className="mt-5 w-full px-3 py-2 rounded-md flex items-center justify-between cursor-pointer"
                                    style={{
                                        backgroundColor: "#5c199d",
                                        appearance: "none",
                                        WebkitAppearance: "none",
                                        border: "none",
                                    }}
                                    aria-pressed={areAllGlyphGroupNodesLinked(glyphKey, config)}
                                >
                                    <span className="text-white text-base font-medium">
                                        {areAllGlyphGroupNodesLinked(glyphKey, config)
                                            ? "Unlink System"
                                            : "Link System"}
                                    </span>
                                    <span
                                        className="inline-flex items-center justify-center w-6 h-6 rounded-full border-[3px] border-[#BEff00]"
                                        aria-hidden="true"
                                    >
                                        <span
                                            className={`w-3.5 h-3.5 rounded-full bg-[#BEff00] transition-opacity ${
                                                areAllGlyphGroupNodesLinked(glyphKey, config)
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                        />
                                    </span>
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )}
            <div
                className="mt-4 pt-4 flex flex-col gap-2"
                style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
            >
                {onResetGuidelines && (
                    <button
                        type="button"
                        onClick={onResetGuidelines}
                        className="mx-2 px-3 py-2 rounded-md flex items-center justify-between"
                        style={{ backgroundColor: "#5c199d" }}
                    >
                        <span className="text-white text-base font-medium">Reset Guidelines</span>
                    </button>
                )}
                <button
                    type="button"
                    onClick={() => setBottomPanelVisible(!isBottomPanelVisible)}
                    className="mx-2 px-3 py-2 rounded-md flex items-center justify-between cursor-pointer"
                    style={{ backgroundColor: "#5c199d" }}
                    aria-pressed={isBottomPanelVisible}
                >
                    <span className="text-white text-base font-medium">Display Mode</span>
                    <span
                        className="inline-flex items-center justify-center w-6 h-6 rounded-full border-[3px] border-[#BEff00]"
                        aria-hidden="true"
                    >
                        <span
                            className={`w-3.5 h-3.5 rounded-full bg-[#BEff00] transition-opacity ${
                                isBottomPanelVisible ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    </span>
                </button>
            </div>
        </>
    );
}

export default function SettingsPanel(props) {
    return <SettingsPanelBody {...props} />;
}
