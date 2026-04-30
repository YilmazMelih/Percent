import { useEffect, useMemo, useRef, useState } from "react";
import { NODE_SIZE_GROUPS } from "../EditorPage/nodeGroups";
import { GLYPH_CONFIGS } from "../../../engine/fonts/glyphConfigs";
import SystemBottomBar from "./SystemBottomBar";
import SystemWorkspace from "./SystemWorkspace";
import lightbulbIcon from "../../../assets/images/Lightbulb.svg";
import bookIcon from "../../../assets/images/Book.svg";
import PageTutorial from "../../Tutorial/PageTutorial";

const SYSTEM_TUTORIAL_STEPS = [
    {
        target: "body",
        placement: "center",
        title: "Welcome to the System",
        content: "This is a placeholder step for the system tutorial.",
    },
    {
        target: "body",
        placement: "center",
        content: "Another placeholder step. Replace these with real walkthrough content later.",
    },
];

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
    const tutorialRef = useRef(null);

    // Reset variant selection whenever the active mode changes
    useEffect(() => { setSelectedVariant(0); }, [activeMode]);

    return (
        <div style={{ height: "calc(100vh - 60px)", overflow: "hidden", position: "relative" }}>
            <SystemWorkspace
                activeMode={activeMode}
                selectedVariant={selectedVariant}
                initialConfigs={GLYPH_CONFIGS}
            />
            <div
                aria-label="System quick actions"
                className="system-aux-actions"
            >
                <button
                    type="button"
                    className="system-aux-action-button"
                    onClick={() => tutorialRef.current?.restart()}
                    aria-label="Replay system tutorial"
                >
                    <img src={lightbulbIcon} alt="Lightbulb" />
                </button>
                <button type="button" className="system-aux-action-button">
                    <img src={bookIcon} alt="Book" />
                </button>
            </div>
            <SystemBottomBar
                activeMode={activeMode}
                onModeChange={setActiveMode}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
            />
            <PageTutorial
                ref={tutorialRef}
                storageKey="tutorial:system:seen:v1"
                steps={SYSTEM_TUTORIAL_STEPS}
            />
        </div>
    );
}
