export default function SliderPanel({ names, nodeSize, setNodeSize, seeNodes, setSeeNodes }) {
    const handleChange = (index, newValue) => {
        const updated = [...nodeSize];
        updated[index] = parseFloat(newValue);
        setNodeSize(updated);
    };

    return (
        <>
            <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                    type="checkbox"
                    checked={seeNodes}
                    onChange={(e) => setSeeNodes(e.target.checked)}
                    className="rounded border-gray-300"
                />
                See Nodes
            </label>
            <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg w-64">
                {names.map((name, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <span className="w-14">{name}</span>
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step={0.01}
                            value={nodeSize[i]}
                            onChange={(e) => handleChange(i, e.target.value)}
                            className="w-full"
                        />
                        <span className="w-10 text-right">{nodeSize[i].toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </>
    );
}
