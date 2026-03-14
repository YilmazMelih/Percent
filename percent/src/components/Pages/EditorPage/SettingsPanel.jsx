import { SidePanelTab } from "./SidePanelGroup";

export default function SettingsPanel() {
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
            <p className="text-sm text-gray-500">Settings panel content.</p>
        </SidePanelTab>
    );
}
