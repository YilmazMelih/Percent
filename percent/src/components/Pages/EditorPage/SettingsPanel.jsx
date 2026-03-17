import { SidePanelTab } from "./SidePanelGroup";
import SliderPanel from "../../../engine/NodeSliders";

export default function SettingsPanel({
    config,
    nodeSize,
    setNodeSize,
    nodeX,
    setNodeX,
    nodeY,
    setNodeY,
    seeNodes,
    setSeeNodes,
    seePathPoints,
    setSeePathPoints,
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
                nodeSize={nodeSize}
                setNodeSize={setNodeSize}
                nodeX={nodeX}
                setNodeX={setNodeX}
                nodeY={nodeY}
                setNodeY={setNodeY}
                seeNodes={seeNodes}
                setSeeNodes={setSeeNodes}
                seePathPoints={seePathPoints}
                setSeePathPoints={setSeePathPoints}
            />
        </SidePanelTab>
    );
}
