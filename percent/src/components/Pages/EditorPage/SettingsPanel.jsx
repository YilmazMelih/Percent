import { SidePanelTab } from "./SidePanelGroup";
import SliderPanel from "../../../engine/NodeSliders";

export default function SettingsPanel({
    config,
    glyphKey,
    nodeSize,
    setNodeSize,
    nodeX,
    setNodeX,
    nodeY,
    setNodeY,
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
            <SliderPanel
                names={config.nodes.map((node) => node.name)}
                glyphKey={glyphKey}
                nodeSize={nodeSize}
                setNodeSize={setNodeSize}
                nodeX={nodeX}
                setNodeX={setNodeX}
                nodeY={nodeY}
                setNodeY={setNodeY}
                nodeGroupLinks={nodeGroupLinks}
                setNodeGroupLinks={setNodeGroupLinks}
                seeNodes={seeNodes}
                setSeeNodes={setSeeNodes}
                seePathPoints={seePathPoints}
                setSeePathPoints={setSeePathPoints}
                seeGuidelines={seeGuidelines}
                setSeeGuidelines={setSeeGuidelines}
            />
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
