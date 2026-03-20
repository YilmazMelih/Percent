import { useState } from "react";

export default function SliderPanel({
    names,
    nodeSize,
    setNodeSize,
    nodeX,
    setNodeX,
    nodeY,
    setNodeY,
    seeNodes,
    setSeeNodes,
    seePathPoints,
    setSeePathPoints,
}) {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [drafts, setDrafts] = useState({});
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

    return (
        <>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <label className="flex items-center gap-1">
                    <input
                        type="checkbox"
                        checked={seeNodes}
                        onChange={(e) => setSeeNodes(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    See Nodes
                </label>
                <label className="flex items-center gap-1">
                    <input
                        type="checkbox"
                        checked={seePathPoints}
                        onChange={(e) => setSeePathPoints(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    See Path Points
                </label>
                <label className="flex items-center gap-1 ml-auto">
                    <input
                        type="checkbox"
                        checked={showAdvanced}
                        onChange={(e) => setShowAdvanced(e.target.checked)}
                        className="rounded border-gray-300"
                    />
                    Advanced
                </label>
            </div>
            <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg w-64">
                {names.map((name, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <span className="w-14">{name}</span>
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step={0.01}
                                value={nodeSize[i]}
                                onChange={(e) => handleSizeChange(i, e.target.value)}
                                className="w-full"
                            />
                            <span className="w-10 text-right">{nodeSize[i].toFixed(2)}</span>
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
