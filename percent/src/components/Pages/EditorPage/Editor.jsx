import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";
import { useState } from "react";
import { nConfig } from "../../../engine/fonts/default/n";

export default function Editor() {
    const [config, setConfig] = useState(nConfig);
    const [nodeSize, setNodeSize] = useState(config.nodes.map((node) => node.default));
    const [seeNodes, setSeeNodes] = useState(true);
    const [seePathPoints, setSeePathPoints] = useState(true);

    return (
        <div className="relative min-h-[60vh]">
            <Workspace
                config={config}
                nodeSize={nodeSize}
                setNodeSize={setNodeSize}
                seeNodes={seeNodes}
                seePathPoints={seePathPoints}
            />
            <SidePanelGroup side="right">{SettingsPanel()}</SidePanelGroup>
        </div>
    );
}
