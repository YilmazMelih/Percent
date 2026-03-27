import { useRef, useState } from "react";
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

    const handleInputChange = (axis, index, value) => {
        const key = draftKey(axis, index);
        setDrafts((prev) => ({ ...prev, [key]: value }));
        if (!isValidNumber(value)) return;
        if (axis === "x") handleXChange(index, value);
        else handleYChange(index, value);
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
            <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg w-full">
                {names.map((name, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="w-14 mr-6">{name}</span>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={nodeSize[i]}
                                onChange={(e) => handleSizeChange(i, e.target.value)}
                                className="flex-1 max-w-30 min-w-0"
                            />
                            <span className="flex items-center gap-2 flex-shrink-0">
                                <span className="w-8 text-right tabular-nums">
                                    {(nodeSize[i] ?? 1).toFixed(2)}
                                </span>
                                <span className="relative ml-6 w-8 flex justify-end">
                                    {glyphKey && isNodeInAnyGroup(glyphKey, name) ? (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => toggleNodeLinkOverride(name)}
                                                onMouseEnter={() => handleLockMouseEnter(i)}
                                                onMouseLeave={handleLockMouseLeave}
                                                className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-gray-900"
                                                aria-label={
                                                    isNodeGroupMemberLinked(
                                                        nodeGroupLinks,
                                                        glyphKey,
                                                        name,
                                                    )
                                                        ? "Linked (click to unlink)"
                                                        : "Unlinked (click to relink)"
                                                }
                                            >
                                                {isNodeGroupMemberLinked(
                                                    nodeGroupLinks,
                                                    glyphKey,
                                                    name,
                                                )
                                                    ? "🔒"
                                                    : "🔓"}
                                            </button>
                                            {tooltipIndex === i && (
                                                <div className="absolute right-0 top-full mt-1 text-[10px] text-gray-700 bg-white border border-gray-300 rounded px-1 py-0.5 whitespace-nowrap shadow">
                                                    {isNodeGroupMemberLinked(
                                                        nodeGroupLinks,
                                                        glyphKey,
                                                        name,
                                                    )
                                                        ? `Unlink node from "${getNodeGroupNamesForMember(glyphKey, name)[0]}" group`
                                                        : `Link node to "${getNodeGroupNamesForMember(glyphKey, name)[0]}" group`}
                                                </div>
                                            )}
                                        </>
                                    ) : null}
                                </span>
                            </span>
                        </div>
                        {showAdvanced && (
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span className="w-6 text-right">X</span>
                                <input
                                    type="number"
                                    value={drafts[draftKey("x", i)] ?? nodeX[i]}
                                    onChange={(e) => handleInputChange("x", i, e.target.value)}
                                    onBlur={() => clearDraft("x", i)}
                                    className="w-20 pl-1 pr-0 py-0.5 border border-gray-300 rounded text-xs"
                                />
                                <span className="w-6 text-right">Y</span>
                                <input
                                    type="number"
                                    value={drafts[draftKey("y", i)] ?? -nodeY[i]}
                                    onChange={(e) => handleInputChange("y", i, e.target.value)}
                                    onBlur={() => clearDraft("y", i)}
                                    className="w-20 pl-1 pr-0 py-0.5 border border-gray-300 rounded text-xs"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleReset(i)}
                                    className="ml-auto px-2 py-0.5 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50"
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
