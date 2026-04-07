import { useMemo } from "react";
import { NODE_SIZE_GROUPS } from "../EditorPage/nodeGroups";
import "./SystemBottomBar.css";

/**
 * Pill bar that appears above the bottom bar when the active mode has multiple
 * variants (duplicate `id` entries in NODE_SIZE_GROUPS with different `no:` values).
 * One circle per variant — selected = larger + black, others = smaller + gray.
 */
function GroupVariantPicker({ activeMode, selectedVariant, onVariantChange }) {
    const variants = useMemo(() => {
        return NODE_SIZE_GROUPS
            .filter((g) => g?.id === activeMode)
            .sort((a, b) => (a.no ?? 0) - (b.no ?? 0));
    }, [activeMode]);

    if (variants.length <= 1) return null;

    return (
        <div className="group-variant-picker" aria-label="Variant selector">
            {variants.map((v) => {
                const no = v.no ?? 0;
                const isSelected = no === selectedVariant;
                return (
                    <button
                        key={no}
                        type="button"
                        aria-label={`Variant ${no}`}
                        onClick={() => onVariantChange?.(no)}
                        className={`group-variant-dot${isSelected ? " is-selected" : ""}`}
                    />
                );
            })}
        </div>
    );
}

export default function SystemBottomBar({
    activeMode = "",
    onModeChange = null,
    selectedVariant = 0,
    onVariantChange = null,
}) {
    const groupIds = useMemo(() => {
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

    return (
        <footer className="system-bottom-bar" aria-label="System bottom navigation">
            <GroupVariantPicker
                activeMode={activeMode}
                selectedVariant={selectedVariant}
                onVariantChange={onVariantChange}
            />
            <nav className="system-bottom-bar-nav">
                <div className="system-bottom-bar-links">
                    {groupIds.map((id) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => {
                                console.log(id);
                                onModeChange?.(id);
                            }}
                            className={`system-bottom-bar-link ${activeMode === id ? "is-active" : ""}`}
                        >
                            {id}
                        </button>
                    ))}
                </div>
            </nav>
        </footer>
    );
}
