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
    size,
    ringPadding = 2,
    ringHitSlop = 5,
    ringVisiblePercent = 0.85,
    ringLabel = "10%",
    onDrag,
    onSelectChange,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isRingHovered, setIsRingHovered] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [dragMode, setDragMode] = useState(null); // null | "ring"

    const dragRef = useRef(null); // { pointerId, originX, originY, startX, startY }

    const ringR = size + ringPadding;
    const ringCirc = 2 * Math.PI * ringR;
    const ringVisibleLen = Math.max(0, Math.min(1, ringVisiblePercent)) * ringCirc;
    const ringGapLen = Math.max(0, ringCirc - ringVisibleLen);

    useEffect(() => {
        console.log({
            isHovered,
            isRingHovered,
            isSelected,
            dragMode,
        });
    }, [isHovered, isRingHovered, isSelected, dragMode]);

    function beginDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        const start = clientToSvgPoint(e);
        dragRef.current = {
            pointerId: e.pointerId,
            originX: x,
            originY: y,
            startX: start.x,
            startY: start.y,
        };
        setDragMode("ring");
        e.currentTarget.setPointerCapture(e.pointerId);
    }

    function moveDrag(e) {
        if (!dragRef.current) return;
        if (dragRef.current.pointerId !== e.pointerId) return;

        const pt = clientToSvgPoint(e);
        const dx = pt.x - dragRef.current.startX;
        const dy = pt.y - dragRef.current.startY;

        onDrag?.(dragRef.current.originX + dx, dragRef.current.originY + dy, dragMode);
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
                        fill="#6B7280"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {ringLabel}
                    </text>
                </>
            )}

            <circle
                cx={x}
                cy={y}
                r={size}
                style={{ fill: "#1FA961", transition: "200ms" }}
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
