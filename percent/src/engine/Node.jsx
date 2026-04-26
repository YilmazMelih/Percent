import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function clientToSvgPoint(e) {
    const svg = e.currentTarget.ownerSVGElement;
    if (!svg) return { x: e.clientX, y: e.clientY };

    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: e.clientX, y: e.clientY };

    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
}

// Max ms between first click release and second click press to register a double-click.
const DOUBLE_CLICK_WINDOW_MS = 100;

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
    /** Optional: enable double-click-and-hold drag to translate this node (Editor only). */
    setNodeX,
    setNodeY,
    /** Per-glyph raw nodeX/nodeY arrays (without any layout xAdjust); used as drag baselines. */
    baselineNodeX,
    baselineNodeY,
    /**
     * Optional SVG element to portal the active-node percent badge into so it
     * always renders on top of every glyph and node downstream. When omitted,
     * the badge is rendered inline (legacy behavior).
     */
    topLayer,
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isRingHovered, setIsRingHovered] = useState(false);
    const [dragMode, setDragMode] = useState(null); // null | "ring" | "translate"
    const [isEditingPercent, setIsEditingPercent] = useState(false);
    const [percentInput, setPercentInput] = useState("");
    const size = (nodeVals[id] * 0.88 + 0.12) * r;

    const dragRef = useRef(null); // { pointerId } — ring drag
    const translateDragRef = useRef(null); // { pointerId, startSvgX, startSvgY, startTx, startTy }
    const lastClickTimeRef = useRef(0);
    const singleClickTimeoutRef = useRef(null);
    const ignoreNextClickRef = useRef(false);
    const percentInputRef = useRef(null);

    const ringR = size + ringPadding;
    const ringCirc = 2 * Math.PI * ringR;
    const ringVisibleLen = Math.max(0, Math.min(1, ringVisiblePercent)) * ringCirc;
    const ringGapLen = Math.max(0, ringCirc - ringVisibleLen);

    const isSelected = active === id;
    const supportsTranslate = typeof setNodeX === "function" && typeof setNodeY === "function";

    /**
     * Percent badge — when active, this is portaled to the SVG-tree top layer
     * (if provided) so it renders above any glyph or node that comes after this
     * one in document order. Coords are absolute SVG units, so the portal
     * target must be an untransformed <g> in the same SVG.
     */
    const percentBadge = isEditingPercent ? (
        <foreignObject x={Number(x) + ringR + 4} y={y - 12} width="52" height="24">
            <input
                ref={percentInputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={percentInput}
                onChange={(e) => setPercentInput(e.target.value)}
                onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onBlur={() => commitPercentInput(percentInput)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        commitPercentInput(percentInput);
                    } else if (e.key === "Escape") {
                        e.preventDefault();
                        setIsEditingPercent(false);
                    }
                }}
                style={{
                    width: "48px",
                    height: "22px",
                    padding: "0 4px",
                    border: "1px solid #000000",
                    borderRadius: "4px",
                    background: "#beff00",
                    color: "#000000",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    outline: "none",
                }}
            />
        </foreignObject>
    ) : (
        <foreignObject x={Number(x) + ringR + 4} y={y - 12} width="52" height="24">
            <button
                type="button"
                className="cursor-text"
                onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPercentInput(String(Math.round(nodeVals[id] * 100)));
                    setIsEditingPercent(true);
                }}
                style={{
                    width: "48px",
                    height: "22px",
                    padding: "0 4px",
                    border: "1px solid #000000",
                    borderRadius: "4px",
                    background: "#beff00",
                    color: "#000000",
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: "20px",
                    outline: "none",
                }}
            >
                {Math.round(nodeVals[id] * 100)}%
            </button>
        </foreignObject>
    );

    useEffect(() => {
        if (!isEditingPercent) return;
        percentInputRef.current?.focus();
        percentInputRef.current?.select();
    }, [isEditingPercent]);

    useEffect(
        () => () => {
            if (singleClickTimeoutRef.current) {
                clearTimeout(singleClickTimeoutRef.current);
                singleClickTimeoutRef.current = null;
            }
        },
        [],
    );

    function commitPercentInput(value) {
        if (value.trim() === "") {
            setIsEditingPercent(false);
            return;
        }
        const parsed = Number.parseInt(value, 10);
        if (Number.isNaN(parsed)) {
            setIsEditingPercent(false);
            return;
        }
        const clampedPercent = Math.min(100, Math.max(0, parsed));
        setNodeSize((prev) => {
            const newVals = [...prev];
            newVals[id] = clampedPercent / 100;
            return newVals;
        });
        setIsEditingPercent(false);
    }

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

    // ── Translate drag (double-click + hold on the node body) ────────────────
    function handleNodePointerDown(e) {
        if (!supportsTranslate) return;
        if (e.button !== 0) return;
        if (isEditingPercent) return;

        const now = performance.now();
        const sinceLast = now - lastClickTimeRef.current;
        const isSecondClick = lastClickTimeRef.current > 0 && sinceLast <= DOUBLE_CLICK_WINDOW_MS;
        if (!isSecondClick) return;

        e.preventDefault();
        e.stopPropagation();

        if (singleClickTimeoutRef.current) {
            clearTimeout(singleClickTimeoutRef.current);
            singleClickTimeoutRef.current = null;
        }

        const pt = clientToSvgPoint(e);
        translateDragRef.current = {
            pointerId: e.pointerId,
            startSvgX: pt.x,
            startSvgY: pt.y,
            startTx: baselineNodeX?.[id] ?? 0,
            startTy: baselineNodeY?.[id] ?? 0,
        };
        setDragMode("translate");
        setIsDragging(true);
        ignoreNextClickRef.current = true;
        lastClickTimeRef.current = 0;
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
            // ignore
        }
    }

    function handleNodePointerMove(e) {
        if (!translateDragRef.current) return;
        if (translateDragRef.current.pointerId !== e.pointerId) return;

        const pt = clientToSvgPoint(e);
        const dx = pt.x - translateDragRef.current.startSvgX;
        const dy = pt.y - translateDragRef.current.startSvgY;
        const newTx = translateDragRef.current.startTx + dx;
        const newTy = translateDragRef.current.startTy + dy;

        setNodeX?.((prev) => {
            const arr = Array.isArray(prev) ? [...prev] : [];
            arr[id] = newTx;
            return arr;
        });
        setNodeY?.((prev) => {
            const arr = Array.isArray(prev) ? [...prev] : [];
            arr[id] = newTy;
            return arr;
        });
    }

    function handleNodePointerUp(e) {
        if (translateDragRef.current?.pointerId !== e.pointerId) return;
        translateDragRef.current = null;
        setDragMode(null);
        setIsDragging(false);
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // ignore
        }
    }

    function handleNodeClick(e) {
        if (ignoreNextClickRef.current) {
            ignoreNextClickRef.current = false;
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        e.preventDefault();
        e.stopPropagation();

        if (!supportsTranslate) {
            setActive(active === id ? null : id);
            return;
        }

        // Translate is enabled → defer the activate-toggle so a quick second
        // pointerdown can be claimed as a double-click-hold drag instead.
        if (singleClickTimeoutRef.current) clearTimeout(singleClickTimeoutRef.current);
        lastClickTimeRef.current = performance.now();
        const wasActive = active === id;
        singleClickTimeoutRef.current = setTimeout(() => {
            singleClickTimeoutRef.current = null;
            lastClickTimeRef.current = 0;
            setActive(wasActive ? null : id);
        }, DOUBLE_CLICK_WINDOW_MS);
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
                    {topLayer ? createPortal(percentBadge, topLayer) : percentBadge}
                </>
            )}

            <circle
                cx={x}
                cy={y}
                r={size}
                className={`node-circle ${
                    dragMode === "translate" ? "cursor-grabbing" : "cursor-pointer"
                }`}
                fillOpacity={isDragging ? 0.3 : 1}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
                onPointerDown={handleNodePointerDown}
                onPointerMove={handleNodePointerMove}
                onPointerUp={handleNodePointerUp}
                onPointerCancel={handleNodePointerUp}
                onClick={handleNodeClick}
            />
        </g>
    );
}
