import SidePanelGroup from "./SidePanelGroup";
import SettingsPanel from "./SettingsPanel";

export default function Editor() {
    return (
        <div className="relative min-h-[60vh]">
            <h1>Editor</h1>
            <SidePanelGroup side="right">
                {SettingsPanel()}
            </SidePanelGroup>
        </div>
    );
}
