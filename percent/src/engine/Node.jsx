import { useEffect, useRef, useState } from "react";

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
    nodeVal,
    r,
    ringPadding = 2,
    ringHitSlop = 5,
    ringVisiblePercent = 0.85,
    onDrag,
    onSelectChange,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isRingHovered, setIsRingHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [dragMode, setDragMode] = useState(null); // null | "ring"
    const [tempVal, setTempVal] = useState(nodeVal);
    const size = tempVal * (r - 0.5);

    const dragRef = useRef(null); // { pointerId }

    const ringR = size + ringPadding;
    const ringCirc = 2 * Math.PI * ringR;
    const ringVisibleLen = Math.max(0, Math.min(1, ringVisiblePercent)) * ringCirc;
    const ringGapLen = Math.max(0, ringCirc - ringVisibleLen);

    useEffect(() => {
        console.log({ isHovered, isRingHovered, isSelected, dragMode, tempVal });
    }, [isHovered, isRingHovered, isSelected, dragMode, tempVal]);

    function beginDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        dragRef.current = { pointerId: e.pointerId };
        setDragMode("ring");
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

        setTempVal(clamped);
    }

    function endDrag(e) {
        if (dragRef.current?.pointerId === e.pointerId) {
            dragRef.current = null;
        }
        setDragMode(null);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // ignore
        }
    }

    return (
        <g
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
                        fill="transparent"
                        stroke={isRingHovered ? "#111827" : "#9CA3AF"}
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeDasharray={`${ringVisibleLen} ${ringGapLen}`}
                        strokeDashoffset={-ringVisibleLen}
                        transform={`rotate(80 ${x} ${y})`}
                        pointerEvents="none"
                    />
                    <text
                        x={Number(x) + ringR + 1}
                        y={y}
                        fontSize="4"
                        fill="black"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {Math.round(nodeVal * 100)}%
                    </text>
                </>
            )}

            <circle
                cx={x}
                cy={y}
                r={size}
                style={{ fill: "#1FA961" }}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsSelected(true);
                    onSelectChange?.(true);
                }}
            />
        </g>
    );
}
