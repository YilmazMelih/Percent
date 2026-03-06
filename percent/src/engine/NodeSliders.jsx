export default function SliderPanel({ nodeSizeOProt, setNodeSizeOProt }) {
    const handleChange = (index, newValue) => {
        const updated = [...nodeSizeOProt];
        updated[index] = parseFloat(newValue);
        setNodeSizeOProt(updated);
    };

    return (
        <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg w-64">
            {nodeSizeOProt.map((val, i) => (
                <div key={i} className="flex items-center gap-2">
                    <span className="w-14">{["left", "right", "top", "bottom"][i]}</span>
                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={val}
                        onChange={(e) => handleChange(i, e.target.value)}
                        className="w-full"
                    />
                    <span className="w-10 text-right">{val.toFixed(2)}</span>
                </div>
            ))}
        </div>
    );
}
