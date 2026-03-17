import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";
import { useState } from "react";
import { ACapConfig } from "../../../engine/fonts/default/A_cap";
import { aConfig } from "../../../engine/fonts/default/a";
import { oConfig } from "../../../engine/fonts/default/o";
import { nConfig } from "../../../engine/fonts/default/n";
import {
    convertPathToGlyphObject,
    applyInferredTransformToPoint,
    shiftPointsToAnchorY,
    generateNodesFromCircles,
} from "../../../../pathToGlyphObject";

export default function Editor() {
    let smallA = convertPathToGlyphObject(
        "M229.34,242.57h-26.29l-1.9-20.05s-11.5,22.76-47.42,22.76c-32.66,0-48.98-18.02-50.51-36.96-1.52-18.94,11.75-38.79,38.31-42.44,19.37-2.34,56.64-8.4,57.99-15.18,0,0,2.98-10.3-6.23-20.05-5.69-5.83-19.71-9.28-33.16-8.03s-26.32,7.22-29.71,20.22l-21.95-5.15c2.44-8.4,11.83-25.73,36.04-32.52,10.95-3.07,43.9-4.61,59.62,7.32,18.97,14.36,17.61,33.87,17.89,49.86l.54,55.55,6.77,24.66ZM200.07,173.46c-17.61,10.57-55.01,5.42-68.83,17.61-7.86,7.32-6.77,21.95,3.25,29.54,5.69,4.34,13.55,5.96,21.95,5.96,12.19,0,24.66-4.34,33.33-12.74,5.69-5.96,10.3-13.82,10.3-24.93v-15.45Z",
    );
    const [config, setConfig] = useState({ ...smallA, nodes: [], ...aConfig });
    const [nodeSize, setNodeSize] = useState(config.nodes.map((node) => node.default));
    const [nodeX, setNodeX] = useState(config.nodes.map(() => 0));
    const [nodeY, setNodeY] = useState(config.nodes.map(() => 0));
    const [seeNodes, setSeeNodes] = useState(true);
    const [seePathPoints, setSeePathPoints] = useState(false);

    return (
        <div className="relative min-h-[60vh]">
            <Workspace
                config={config}
                nodeSize={nodeSize}
                setNodeSize={setNodeSize}
                nodeX={nodeX}
                nodeY={nodeY}
                seeNodes={seeNodes}
                seePathPoints={seePathPoints}
            />
            <SidePanelGroup side="right">
                {SettingsPanel({
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
                })}
            </SidePanelGroup>
        </div>
    );
}
