import { useEffect, useRef, useState } from "react";
import {
    isNodeGroupMemberLinked,
    isNodeInAnyGroup,
    getNodeGroupNamesForMember,
    nodeGroupMemberKey,
} from "../components/Pages/EditorPage/nodeGroups";

export default function SliderPanel({
    names,
    glyphKey,
    /** When true (e.g. Settings panel), global + Advanced toggles are omitted — parent renders them. */
    hideGlobalToolbar = false,
    showLockButton = true,
    /** Required when hideGlobalToolbar is true; optional otherwise (uses local state). */
    showAdvanced: showAdvancedProp,
    setShowAdvanced: setShowAdvancedProp,
    nodeSize,
    setNodeSize,
    nodeX,
    setNodeX,
    nodeY,
    setNodeY,
    nodeGroupLinks,
    setNodeGroupLinks,
    seeNodes,
    setSeeNodes,
    seePathPoints,
    setSeePathPoints,
    seeGuidelines,
    setSeeGuidelines,
}) {
    const formatNodeName = (name) => {
        if (typeof name !== "string" || name.length === 0) return name;
        return name[0].toUpperCase() + name.slice(1);
    };
    const [internalShowAdvanced, setInternalShowAdvanced] = useState(false);
    const showAdvanced = hideGlobalToolbar
        ? (showAdvancedProp ?? internalShowAdvanced)
        : internalShowAdvanced;
    const setShowAdvanced = hideGlobalToolbar
        ? (setShowAdvancedProp ?? setInternalShowAdvanced)
        : setInternalShowAdvanced;
    const [drafts, setDrafts] = useState({});
    const [tooltipIndex, setTooltipIndex] = useState(null);
    const hoverTimerRef = useRef(null);
    const handleSizeChange = (index, newValue) => {
        const updated = [...nodeSize];
        updated[index] = parseFloat(newValue);
        setNodeSize(updated);
    };

    const handleXChange = (index, newValue) => {
        const updated = [...nodeX];
        const parsed = parseFloat(newValue);
        updated[index] = Number.isNaN(parsed) ? 0 : parsed;
        setNodeX(updated);
    };

    const handleYChange = (index, newValue) => {
        const updated = [...nodeY];
        const parsed = parseFloat(newValue);
        // Flip sign so positive in UI means negative in internal coords
        updated[index] = Number.isNaN(parsed) ? 0 : -parsed;
        setNodeY(updated);
    };

    const isInterimNumber = (v) => v === "" || v === "-" || v === "." || v === "-.";
    const isValidNumber = (v) => /^-?\d*\.?\d+$/.test(v);
    const draftKey = (axis, index) => `${axis}-${index}`;

    useEffect(() => {
        // Switching glyphs/panels should show live translation values for the new selection.
        setDrafts({});
    }, [glyphKey, names]);

    const handleInputChange = (axis, index, value) => {
        const key = draftKey(axis, index);
        setDrafts((prev) => ({ ...prev, [key]: value }));
    };

    const commitDraft = (axis, index) => {
        const key = draftKey(axis, index);
        const draftValue = drafts[key];
        if (draftValue == null) return;
        if (!isValidNumber(draftValue)) return;
        if (axis === "x") handleXChange(index, draftValue);
        else handleYChange(index, draftValue);
    };

    const clearDraft = (axis, index) => {
        const key = draftKey(axis, index);
        setDrafts((prev) => {
            const next = { ...prev };
            const val = next[key];
            if (val !== undefined && (isInterimNumber(val) || !isValidNumber(val))) {
                delete next[key];
                return next;
            }
            delete next[key];
            return next;
        });
    };

    const handleReset = (index) => {
        const newX = [...nodeX];
        const newY = [...nodeY];
        newX[index] = 0;
        newY[index] = 0;
        setNodeX(newX);
        setNodeY(newY);
        setDrafts((prev) => {
            const next = { ...prev };
            delete next[draftKey("x", index)];
            delete next[draftKey("y", index)];
            return next;
        });
    };

    const formatAxisValue = (value) => {
        const n = Number(value);
        if (!Number.isFinite(n)) return "0.00";
        return n.toFixed(2);
    };

    const nudgeAxis = (axis, index, delta) => {
        if (axis === "x") {
            const updated = [...nodeX];
            updated[index] = (updated[index] ?? 0) + delta;
            setNodeX(updated);
        } else {
            // UI shows Y as -nodeY, so nudging displayed value up should
            // decrease internal nodeY and vice versa.
            const updated = [...nodeY];
            updated[index] = (updated[index] ?? 0) - delta;
            setNodeY(updated);
        }

        const key = draftKey(axis, index);
        setDrafts((prev) => {
            if (!(key in prev)) return prev;
            const next = { ...prev };
            delete next[key];
            return next;
        });
    };

    const handleLockMouseEnter = (index) => {
        if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = window.setTimeout(() => {
            setTooltipIndex(index);
        }, 500);
    };

    const handleLockMouseLeave = () => {
        if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
        setTooltipIndex(null);
    };

    const toggleNodeLinkOverride = (nodeName) => {
        if (!glyphKey || !nodeName || !setNodeGroupLinks) return;
        const k = nodeGroupMemberKey(glyphKey, nodeName);
        setNodeGroupLinks((prev) => {
            const next = { ...(prev ?? {}) };
            if (next[k] === false) delete next[k];
            else next[k] = false;
            return next;
        });
    };

    return (
        <>
            <style>
                {`
                    .glyph-node-slider {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 100%;
                        height: 16px;
                        border-radius: 999px;
                        background:
                            linear-gradient(
                                to right,
                                #beff00 0%,
                                #beff00 var(--slider-progress, 50%),
                                transparent var(--slider-progress, 50%),
                                transparent 100%
                            )
                            center / 100% 6px no-repeat,
                            linear-gradient(
                                to right,
                                rgba(190, 255, 0, 0.2) 0%,
                                rgba(190, 255, 0, 0.2) 100%
                            )
                            center / 100% 2px no-repeat;
                        outline: none;
                    }
                    .glyph-node-slider::-webkit-slider-runnable-track {
                        height: 16px;
                        border-radius: 999px;
                        background: transparent;
                    }
                    .glyph-node-slider::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        appearance: none;
                        width: 16px;
                        height: 16px;
                        border-radius: 999px;
                        border: none;
                        background: #beff00;
                        margin-top: 0;
                        transition: transform 120ms ease, box-shadow 120ms ease;
                        box-shadow: 0 0 0 0 rgba(190, 255, 0, 0.45);
                    }
                    .glyph-node-slider:active::-webkit-slider-thumb {
                        transform: scale(1.12);
                        box-shadow: 0 0 0 5px rgba(190, 255, 0, 0.35);
                    }
                    .glyph-node-slider:focus-visible::-webkit-slider-thumb {
                        box-shadow: 0 0 0 4px rgba(190, 255, 0, 0.3);
                    }
                    .glyph-node-slider::-moz-range-track {
                        height: 16px;
                        border: none;
                        border-radius: 999px;
                        background: transparent;
                    }
                    .glyph-node-slider::-moz-range-progress {
                        height: 6px;
                        border: none;
                        border-radius: 999px;
                        background: #beff00;
                    }
                    .glyph-node-slider::-moz-range-thumb {
                        width: 16px;
                        height: 16px;
                        border-radius: 999px;
                        border: none;
                        background: #beff00;
                        transition: transform 120ms ease, box-shadow 120ms ease;
                        box-shadow: 0 0 0 0 rgba(190, 255, 0, 0.45);
                    }
                    .glyph-node-slider:active::-moz-range-thumb {
                        transform: scale(1.12);
                        box-shadow: 0 0 0 5px rgba(190, 255, 0, 0.35);
                    }
                    .glyph-node-slider:focus-visible::-moz-range-thumb {
                        box-shadow: 0 0 0 4px rgba(190, 255, 0, 0.3);
                    }
                    .axis-input-shell {
                        position: relative;
                        width: 5.25rem;
                        height: 2rem;
                        border-radius: 0.75rem;
                        background: #ffffff;
                        color: #5c199d;
                        overflow: hidden;
                        display: block;
                    }
                    .axis-stepper {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 1.35rem;
                        height: 100%;
                        border-right: 1px solid rgba(92, 25, 157, 0.2);
                        z-index: 1;
                    }
                    .axis-stepper-btn {
                        width: 100%;
                        height: 50%;
                        margin: 0;
                        padding: 0;
                        border: 0;
                        border-radius: 0 !important;
                        appearance: none;
                        -webkit-appearance: none;
                        background: #7020BF69;
                        color: #7020BF;
                        font-size: 9px;
                        line-height: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        user-select: none;
                    }
                    .axis-stepper-btn-top {
                        position: absolute;
                        top: 0;
                        left: 0;
                        border-bottom: 1px solid rgba(92, 25, 157, 0.2);
                    }
                    .axis-stepper-btn-bottom {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                    }
                    .axis-stepper-btn:hover {
                        background: rgba(112, 32, 191, 0.62);
                    }
                    .axis-stepper-btn:focus,
                    .axis-stepper-btn:focus-visible,
                    .axis-stepper-btn:active {
                        outline: none !important;
                        box-shadow: none !important;
                    }
                    .axis-stepper-btn::-moz-focus-inner {
                        border: 0;
                        padding: 0;
                    }
                    .axis-value-input {
                        width: 100%;
                        height: 100%;
                        border: 0;
                        outline: none;
                        background: transparent;
                        color: #5c199d;
                        font-size: 0.75rem;
                        font-weight: 600;
                        text-align: center;
                        padding-left: 1.4rem;
                        padding-right: 0.2rem;
                        box-sizing: border-box;
                    }
                `}
            </style>
            {!hideGlobalToolbar && (
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-2">
                    <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                        <input
                            type="checkbox"
                            checked={seeNodes}
                            onChange={(e) => setSeeNodes(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        See Nodes
                    </label>
                    <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                        <input
                            type="checkbox"
                            checked={seePathPoints}
                            onChange={(e) => setSeePathPoints(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        See Path Points
                    </label>
                    <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                        <input
                            type="checkbox"
                            checked={!!seeGuidelines}
                            onChange={(e) => setSeeGuidelines?.(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        See Guidelines
                    </label>
                    <label className="flex items-center justify-center gap-1 whitespace-nowrap">
                        <input
                            type="checkbox"
                            checked={showAdvanced}
                            onChange={(e) => setShowAdvanced(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        Advanced
                    </label>
                </div>
            )}
            <div className="flex flex-col gap-4 w-full">
                {names.map((name, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between text-sm text-white">
                            <span className="text-white font-medium">{formatNodeName(name)}</span>
                            <span className="tabular-nums text-white">
                                {`${Math.round((nodeSize[i] ?? 1) * 100)}%`}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white w-full">
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={nodeSize[i]}
                                onChange={(e) => handleSizeChange(i, e.target.value)}
                                className="glyph-node-slider w-full flex-1 min-w-0"
                                style={{
                                    "--slider-progress": `${((nodeSize[i] ?? 0) * 100).toFixed(2)}%`,
                                }}
                            />
                            {showLockButton && glyphKey && isNodeInAnyGroup(glyphKey, name) ? (
                                <span className="relative w-8 flex justify-end flex-shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => toggleNodeLinkOverride(name)}
                                        onMouseEnter={() => handleLockMouseEnter(i)}
                                        onMouseLeave={handleLockMouseLeave}
                                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900"
                                        aria-label={
                                            isNodeGroupMemberLinked(nodeGroupLinks, glyphKey, name)
                                                ? "Linked (click to unlink)"
                                                : "Unlinked (click to relink)"
                                        }
                                    >
                                        {isNodeGroupMemberLinked(nodeGroupLinks, glyphKey, name)
                                            ? "🔒"
                                            : "🔓"}
                                    </button>
                                    {tooltipIndex === i && (
                                        <div className="absolute right-0 top-full mt-1 text-[10px] text-gray-700 bg-white border border-gray-300 rounded px-1 py-0.5 whitespace-nowrap shadow">
                                            {isNodeGroupMemberLinked(nodeGroupLinks, glyphKey, name)
                                                ? `Unlink node from "${getNodeGroupNamesForMember(glyphKey, name)[0]}" group`
                                                : `Link node to "${getNodeGroupNamesForMember(glyphKey, name)[0]}" group`}
                                        </div>
                                    )}
                                </span>
                            ) : null}
                        </div>
                        {showAdvanced && (
                            <div className="flex items-center gap-2 w-full mt-1 text-xs">
                                <div className="w-24 flex items-center gap-1 min-w-0">
                                    <span className="text-white font-semibold w-3 text-center select-none">X</span>
                                    <span className="axis-input-shell">
                                        <span className="axis-stepper">
                                            <button
                                                type="button"
                                                tabIndex={-1}
                                                className="axis-stepper-btn axis-stepper-btn-top"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => nudgeAxis("x", i, 1)}
                                                aria-label="Increase X"
                                            >
                                                ▲
                                            </button>
                                            <button
                                                type="button"
                                                tabIndex={-1}
                                                className="axis-stepper-btn axis-stepper-btn-bottom"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => nudgeAxis("x", i, -1)}
                                                aria-label="Decrease X"
                                            >
                                                ▼
                                            </button>
                                        </span>
                                        <input
                                            type="text"
                                            value={
                                                drafts[draftKey("x", i)] ??
                                                formatAxisValue(nodeX[i] ?? 0)
                                            }
                                            onChange={(e) =>
                                                handleInputChange("x", i, e.target.value)
                                            }
                                            onBlur={() => {
                                                commitDraft("x", i);
                                                clearDraft("x", i);
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key !== "Enter") return;
                                                commitDraft("x", i);
                                                clearDraft("x", i);
                                                e.currentTarget.blur();
                                            }}
                                            className="axis-value-input"
                                        />
                                    </span>
                                </div>
                                <div className="w-24 flex items-center gap-1 min-w-0">
                                    <span className="text-white font-semibold w-3 text-center select-none">Y</span>
                                    <span className="axis-input-shell">
                                        <span className="axis-stepper">
                                            <button
                                                type="button"
                                                tabIndex={-1}
                                                className="axis-stepper-btn axis-stepper-btn-top"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => nudgeAxis("y", i, 1)}
                                                aria-label="Increase Y"
                                            >
                                                ▲
                                            </button>
                                            <button
                                                type="button"
                                                tabIndex={-1}
                                                className="axis-stepper-btn axis-stepper-btn-bottom"
                                                onMouseDown={(e) => e.preventDefault()}
                                                onClick={() => nudgeAxis("y", i, -1)}
                                                aria-label="Decrease Y"
                                            >
                                                ▼
                                            </button>
                                        </span>
                                        <input
                                            type="text"
                                            value={
                                                drafts[draftKey("y", i)] ??
                                                formatAxisValue(-(nodeY[i] ?? 0))
                                            }
                                            onChange={(e) =>
                                                handleInputChange("y", i, e.target.value)
                                            }
                                            onBlur={() => {
                                                commitDraft("y", i);
                                                clearDraft("y", i);
                                            }}
                                            onKeyDown={(e) => {
                                                if (e.key !== "Enter") return;
                                                commitDraft("y", i);
                                                clearDraft("y", i);
                                                e.currentTarget.blur();
                                            }}
                                            className="axis-value-input"
                                        />
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleReset(i)}
                                    className="h-8 w-20 flex-shrink-0 rounded-xl text-[#7020BF] text-xs font-medium hover:bg-gray-100"
                                    style={{ backgroundColor: "#ffffff", color: "#7020BF" }}
                                >
                                    Reset
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
