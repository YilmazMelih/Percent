import { useEffect, useMemo, useRef, useState } from "react";
import { NODE_SIZE_GROUPS } from "../EditorPage/nodeGroups";
import { GLYPH_CONFIGS } from "../../../engine/fonts/glyphConfigs";
import SystemBottomBar from "./SystemBottomBar";
import SystemWorkspace from "./SystemWorkspace";
import lightbulbIcon from "../../../assets/images/Lightbulb.svg";
import bookIcon from "../../../assets/images/Book.svg";
import PageTutorial from "../../Tutorial/PageTutorial";

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
    useEffect(() => {
        setSelectedVariant(0);
    }, [activeMode]);

    const tutorialSteps = useMemo(
        () => [
            {
                target: "body",
                placement: "center",
                title: "System Editor",
                content:
                    "Welcome to the System Editor! Here you can edit glyphs together through shared components to create a cohesive type system.",
            },
            {
                target: '[data-tutorial-id="system-leftmost-node"]',
                placement: "right",
                title: "Multi-edit Letter Unity",
                content:
                    "Edit letters as a connected system. Click, drag, and resize a circle to see all linked letters update.",
                video: "/tutorialVideos/Resizing Circles.mp4",
                spotlightPadding: 16,
            },
            {
                target: '[data-tutorial-id="system-mode-links"]',
                placement: "top",
                title: "Letter Groups",
                content: "Letters are grouped by shared components. Edit one to update the group",
                spotlightPadding: 12,
            },
            {
                target: '[data-tutorial-id="system-variant-picker"]',
                placement: "top",
                title: "Linked Circles",
                content:
                    "Groups can have multiple linked circles. Adjust each circle to see how the system responds!",
                spotlightPadding: 12,
                // Switch to the multi-variant "NMW" group before this step renders so
                // the variant picker actually appears on screen as the highlight target.
                before: async () => {
                    setActiveMode("NMW");
                    // Give React a tick to render the variant picker before
                    // Joyride measures the target element.
                    await new Promise((resolve) => window.setTimeout(resolve, 100));
                },
            },
        ],
        [],
    );

    return (
        <div
            className="system-design-container"
            style={{ height: "calc(100vh - 60px)", overflow: "hidden", position: "relative" }}
        >
            <SystemWorkspace
                activeMode={activeMode}
                selectedVariant={selectedVariant}
                initialConfigs={GLYPH_CONFIGS}
            />
            <div aria-label="System quick actions" className="system-aux-actions">
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
                className="system-bottom-bar"
                activeMode={activeMode}
                onModeChange={setActiveMode}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
            />
            <PageTutorial
                ref={tutorialRef}
                storageKey="tutorial:system:seen:v1"
                steps={tutorialSteps}
            />
        </div>
    );
}
