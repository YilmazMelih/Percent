import { Allotment } from "allotment";
import "allotment/dist/style.css";
import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";
import AllGlyphs from "./AllGlyphs";
import { useState } from "react";
import { AConfig } from "../../../engine/fonts/default/A";
import { oConfig } from "../../../engine/fonts/default/o";
import { nConfig } from "../../../engine/fonts/default/n";

export default function Editor() {
    const [config, setConfig] = useState(AConfig);
    const [nodeSize, setNodeSize] = useState(config.nodes.map((node) => node.default));
    const [seeNodes, setSeeNodes] = useState(true);
    const [seePathPoints, setSeePathPoints] = useState(false);

    return (
        <div style={{ height: "calc(100vh - 60px)" }}>
            <Allotment>
                <Allotment.Pane minSize={200} preferredSize="280px">
                    <AllGlyphs />
                </Allotment.Pane>
                <Allotment.Pane>
                    <div className="relative min-h-full flex">
                        <Workspace
                            config={config}
                            nodeSize={nodeSize}
                            setNodeSize={setNodeSize}
                            seeNodes={seeNodes}
                            seePathPoints={seePathPoints}
                        />
                        <SidePanelGroup side="right">
                            {SettingsPanel({
                                config,
                                nodeSize,
                                setNodeSize,
                                seeNodes,
                                setSeeNodes,
                                seePathPoints,
                                setSeePathPoints,
                            })}
                        </SidePanelGroup>
                    </div>
                </Allotment.Pane>
            </Allotment>
        </div>
    );
}
