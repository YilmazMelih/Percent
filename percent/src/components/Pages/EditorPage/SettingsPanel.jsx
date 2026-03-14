import { SidePanelTab } from "./SidePanelGroup";

export default function SettingsPanel() {
    return (
        <SidePanelTab tabLabel="settings" title="Settings" tabText="Settings">
            <p className="text-sm text-gray-500">Settings panel content.</p>
        </SidePanelTab>
    );
}
