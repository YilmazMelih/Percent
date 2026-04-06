import { useRef, useState } from "react";

function clientToSvgPoint(e) {
    const svg = e.currentTarget.ownerSVGElement;
    if (!svg) return { x: e.clientX, y: e.clientY };

    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: e.clientX, y: e.clientY };

    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
}

export default function Node({
    x,
    y,
    nodeVals,
    r,
    isDragging,
    setIsDragging,
    active,
    setActive,
    ringPadding = 6,
    ringHitSlop = 5,
    ringVisiblePercent = 0.85,
    id,
    setNodeSize,
    /** TypeVisualizer: commit isolation for shared glyph state (pointer on ring). */
    onRingPointerDown,
    onRingPointerUp,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isRingHovered, setIsRingHovered] = useState(false);
    const [dragMode, setDragMode] = useState(null); // null | "ring"
    const size = (nodeVals[id] * 0.88 + 0.12) * r;

    const dragRef = useRef(null); // { pointerId }

    const ringR = size + ringPadding;
    const ringCirc = 2 * Math.PI * ringR;
    const ringVisibleLen = Math.max(0, Math.min(1, ringVisiblePercent)) * ringCirc;
    const ringGapLen = Math.max(0, ringCirc - ringVisibleLen);

    const isSelected = active === id;

    function beginDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        onRingPointerDown?.();
        dragRef.current = { pointerId: e.pointerId };
        setDragMode("ring");
        setIsDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    }

    function moveDrag(e) {
        if (!dragRef.current) return;
        if (dragRef.current.pointerId !== e.pointerId) return;

        const pt = clientToSvgPoint(e);
        const currentRadius = Math.hypot(pt.x - x, pt.y - y);
        // Map radius to [0, 1] so that:
        // - at the center (radius ≈ 0) -> 0
        // - at the idle ring radius (size + ringPadding) -> 1
        const raw = (currentRadius - ringPadding) / (r - 0.5);
        const snapped = Math.round(raw * 100) / 100; // steps of 0.01
        const clamped = Math.max(0, Math.min(1, snapped));

        setNodeSize((prev) => {
            const newVals = [...prev];
            newVals[id] = clamped;
            return newVals;
        });
    }

    function endDrag(e) {
        if (dragRef.current?.pointerId === e.pointerId) {
            dragRef.current = null;
        }
        setDragMode(null);
        setIsDragging(false);
        onRingPointerUp?.();
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // ignore
        }
    }

    return (
        <g
            className="cursor-default"
            data-skip-typeviz-caret="true"
            data-hovered={isHovered ? "true" : "false"}
            data-ring-hovered={isRingHovered ? "true" : "false"}
            data-selected={isSelected ? "true" : "false"}
            data-dragging={dragMode || "false"}
        >
            {isSelected && (
                <>
                    <circle
                        cx={x}
                        cy={y}
                        r={ringR}
                        className={isDragging ? "cursor-grabbing" : "cursor-grab"}
                        fill="none"
                        stroke="transparent"
                        strokeWidth={ringHitSlop}
                        pointerEvents="stroke"
                        onPointerEnter={() => setIsRingHovered(true)}
                        onPointerLeave={() => setIsRingHovered(false)}
                        onPointerDown={beginDrag}
                        onPointerMove={moveDrag}
                        onPointerUp={endDrag}
                        onPointerCancel={endDrag}
                    />
                    <circle
                        cx={x}
                        cy={y}
                        r={ringR}
                        className="node-ring cursor-pointer"
                        stroke={isRingHovered ? "#b4f000" : "#beff00"}
                        strokeOpacity={isDragging ? 0.5 : 1}
                        strokeDasharray={`${ringVisibleLen} ${ringGapLen}`}
                        strokeDashoffset={-ringVisibleLen}
                        transform={`rotate(80 ${x} ${y})`}
                        pointerEvents="none"
                    />
                    <text
                        x={Number(x) + ringR + 20}
                        y={y}
                        fontSize="16"
                        fill="#beff00"
                        fontWeight="bold"
                        stroke="black"
                        strokeWidth="0"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {Math.round(nodeVals[id] * 100)}%
                    </text>
                </>
            )}

            <circle
                cx={x}
                cy={y}
                r={size}
                className="node-circle cursor-pointer"
                fillOpacity={isDragging ? 0.3 : 1}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActive(active === id ? null : id);
                }}
            />
        </g>
    );
}
