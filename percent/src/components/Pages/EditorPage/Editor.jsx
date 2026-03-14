import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";
import Workspace from "./Workspace";

export default function Editor() {
    return (
        <div className="relative min-h-[60vh]">
            <Workspace />
            <SidePanelGroup side="right">{SettingsPanel()}</SidePanelGroup>
        </div>
    );
}
