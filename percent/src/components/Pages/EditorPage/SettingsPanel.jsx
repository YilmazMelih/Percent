import { useState } from "react";
import { SidePanelTab } from "./SidePanelGroup";
import SliderPanel from "../../../engine/NodeSliders";

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

export default function SettingsPanel({
    config,
    glyphKey,
    nodeSize,
    setNodeSize,
    nodeX,
    setNodeX,
    nodeY,
    setNodeY,
    /** @type {GlyphPanel[] | undefined} If set, renders one slider block per entry (e.g. TypeVisualizer). */
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
    onExport,
}) {
    const isMulti = Array.isArray(glyphPanels) && glyphPanels.length > 0;
    const [showAdvanced, setShowAdvanced] = useState(false);

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
        <SidePanelTab
            tabLabel="settings"
            title="Settings"
            tabText="Settings"
            tabColor="#1fa961"
            tabHoverColor="#2dbe73"
            tabTextColor="#ffffff"
            tabBorderColor="#1fa961"
        >
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                    <input
                        type="checkbox"
                        checked={seeNodes}
                        onChange={(e) => setSeeNodes(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    See Nodes
                </label>
                <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                    <input
                        type="checkbox"
                        checked={seePathPoints}
                        onChange={(e) => setSeePathPoints(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    See Path Points
                </label>
                <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                    <input
                        type="checkbox"
                        checked={!!seeGuidelines}
                        onChange={(e) => setSeeGuidelines?.(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    See Guidelines
                </label>
                <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                    <input
                        type="checkbox"
                        checked={showAdvanced}
                        onChange={(e) => setShowAdvanced(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    Advanced
                </label>
            </div>
            {isMulti ? (
                glyphPanels.map((panel, idx) => (
                    <div
                        key={`${panel.glyphKey}-${idx}`}
                        className={idx ? "mt-6 pt-4 border-t border-gray-200" : ""}
                    >
                        <h3 className="text-sm font-medium text-gray-800 mb-2">
                            {panel.title ?? `Glyph ${panel.glyphKey}`}
                        </h3>
                        <SliderPanel
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
                    </div>
                ))
            ) : (
                <SliderPanel
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
            )}
            {onExport && (
                <div
                    className="control-group"
                    style={{
                        marginTop: "1rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid #e0e0e0",
                    }}
                >
                    <button
                        type="button"
                        onClick={onExport}
                        className="px-3 py-1 text-xs rounded bg-purple-600 text-white hover:bg-purple-700"
                    >
                        Export
                    </button>
                </div>
            )}
            <div
                className="control-group"
                style={{ marginTop: "1rem", borderTop: "1px solid #e0e0e0", paddingTop: "1rem" }}
            >
                <label htmlFor="display-toggle">Display</label>
                <input
                    id="display-toggle"
                    type="checkbox"
                    checked={isBottomPanelVisible}
                    onChange={(e) => setBottomPanelVisible(e.target.checked)}
                />
            </div>
        </SidePanelTab>
    );
}
