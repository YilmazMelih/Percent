import { useEffect, useMemo, useState } from "react";
import { NODE_SIZE_GROUPS } from "../EditorPage/nodeGroups";
import { GLYPH_CONFIGS } from "../../../engine/fonts/glyphConfigs";
import SystemBottomBar from "./SystemBottomBar";
import SystemWorkspace from "./SystemWorkspace";

export default function SystemDesign() {
    const modeIds = useMemo(() => {
        const seen = new Set();
        const ids = [];
        for (const group of NODE_SIZE_GROUPS) {
            const id = group?.id;
            if (!id || seen.has(id)) continue;
            seen.add(id);
            ids.push(id);
        }
        return ids;
    }, []);
    const [activeMode, setActiveMode] = useState(modeIds[0] ?? "");
    const [selectedVariant, setSelectedVariant] = useState(0);

    // Reset variant selection whenever the active mode changes
    useEffect(() => { setSelectedVariant(0); }, [activeMode]);

    return (
        <div style={{ height: "calc(100vh - 60px)", overflow: "hidden", position: "relative" }}>
            <SystemWorkspace
                activeMode={activeMode}
                selectedVariant={selectedVariant}
                initialConfigs={GLYPH_CONFIGS}
            />
            <SystemBottomBar
                activeMode={activeMode}
                onModeChange={setActiveMode}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
            />
        </div>
    );
}
