import {
    TYPE_VISUALIZER_VIEW_ZOOM_MAX,
    TYPE_VISUALIZER_VIEW_ZOOM_MIN,
} from "../TypeVisualizer/TypeVisualizerWorkspace";
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
    onExport,
    onResetGuidelines,
    showAdvanced = false,
    setShowAdvanced = () => {},
    /** TypeVisualizer only: viewBox zoom (see TypeVisualizerWorkspace). */
    typeVisualizerViewZoom,
    setTypeVisualizerViewZoom,
}) {
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
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                    <input
                        type="checkbox"
                        checked={seeNodes}
                        onChange={(e) => setSeeNodes(e.target.checked)}
                        className="color-red-500"
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
            {typeof setTypeVisualizerViewZoom === "function" && typeVisualizerViewZoom != null && (
                <div className="mb-4 pb-4 border-b border-gray-200 text-sm text-gray-700">
                    <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-medium text-gray-800">Workspace zoom</span>
                        <span className="tabular-nums text-gray-500 text-xs">
                            {Math.round(typeVisualizerViewZoom * 100)}%
                        </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
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
                        className="w-full accent-[#1fa961]"
                        aria-label="Workspace zoom"
                    />
                </div>
            )}
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
            ) : isMultiEmptyLine ? (
                <p className="text-sm text-gray-500">
                    Type a letter in the workspace to add glyph sliders. Global options above still
                    apply.
                </p>
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
            {(onExport || onResetGuidelines) && (
                <div
                    className="flex flex-wrap gap-2"
                    style={{
                        marginTop: "1rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid #e0e0e0",
                    }}
                >
                    {onExport && (
                        <button
                            type="button"
                            onClick={onExport}
                            className="px-3 py-1 text-xs rounded bg-purple-600 text-white hover:bg-purple-700"
                        >
                            Export
                        </button>
                    )}
                    {onResetGuidelines && (
                        <button
                            type="button"
                            onClick={onResetGuidelines}
                            className="px-3 py-1 text-xs rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
                        >
                            Reset Guidelines
                        </button>
                    )}
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
        </>
    );
}

/**
 * Returns a {@link SidePanelTab} element. Call as a function from JSX so {@link SidePanelGroup}
 * sees `SidePanelTab` as the direct child (`getTabConfig` reads tab props from that element).
 * Hooks live only in {@link SettingsPanelBody}, which mounts as a normal child in the tree.
 */
export default function SettingsPanel(props) {
    return (
        <SidePanelTab
            tabLabel="settings"
            title="Settings"
            tabText="Settings"
            tabColor="white"
            tabHoverColor="white"
            tabTextColor="black"
            tabBorderColor="black"
        >
            <SettingsPanelBody {...props} />
        </SidePanelTab>
    );
}
