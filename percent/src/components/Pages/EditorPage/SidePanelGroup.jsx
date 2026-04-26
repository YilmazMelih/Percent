import { useEffect, useRef, useState } from "react";

/** Below sticky header (Header.css z-index 800) so panel controls receive clicks. */
const HEADER_OFFSET = "4.75rem";
const PANEL_WIDTH_PX = 384;

export default function SidePanelGroup({
    side = "right",
    children,
    activeIndex: controlledActiveIndex = 0,
    onActiveIndexChange,
    panelWidth: controlledPanelWidth,
    onPanelWidthChange,
    minPanelWidth = 160,
    maxPanelWidth = PANEL_WIDTH_PX,
    resizable = false,
    /**
     * When true, a `mousedown` anywhere outside the panel closes it. Elements
     * marked `data-side-panel-toggle="true"` (e.g. the gear button) and
     * `data-side-panel-keep-open="true"` are exempted, so they retain their
     * own click semantics without re-opening the panel on the next click.
     */
    closeOnOutsideClick = false,
}) {
    const [internalPanelWidth, setInternalPanelWidth] = useState(PANEL_WIDTH_PX);
    const isRight = side === "right";
    const panelWidth = controlledPanelWidth ?? internalPanelWidth;
    const containerRef = useRef(null);

    const containerClass = isRight
        ? "fixed right-0 z-[850] flex flex-row-reverse items-stretch"
        : "fixed left-0 z-[850] flex flex-row items-stretch";

    const panelOpen = controlledActiveIndex !== null;
    const clampedPanelWidth = Math.min(Math.max(panelWidth, minPanelWidth), maxPanelWidth);

    useEffect(() => {
        if (!closeOnOutsideClick || !panelOpen) return undefined;
        const handlePointerDown = (event) => {
            const target = event.target;
            if (!(target instanceof Node)) return;
            // Click inside the panel itself: ignore.
            if (containerRef.current && containerRef.current.contains(target)) return;
            // Whitelisted elements (toggle button, popovers): ignore so their own
            // click handlers run unchanged.
            if (
                target instanceof Element &&
                target.closest(
                    '[data-side-panel-toggle="true"], [data-side-panel-keep-open="true"]',
                )
            ) {
                return;
            }
            onActiveIndexChange?.(null);
        };
        document.addEventListener("mousedown", handlePointerDown);
        return () => document.removeEventListener("mousedown", handlePointerDown);
    }, [closeOnOutsideClick, panelOpen, onActiveIndexChange]);

    const setPanelWidth = (next) => {
        const clamped = Math.min(Math.max(next, minPanelWidth), maxPanelWidth);
        setInternalPanelWidth(clamped);
        onPanelWidthChange?.(clamped);
    };

    const handleResizeStart = (e) => {
        if (!resizable || !panelOpen) return;
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX;
        const startWidth = clampedPanelWidth;
        const onMove = (evt) => {
            const dx = evt.clientX - startX;
            const next = isRight ? startWidth - dx : startWidth + dx;
            setPanelWidth(next);
        };
        const onUp = () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseup", onUp);
        };
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
    };

    return (
        <div
            ref={containerRef}
            className={containerClass}
            style={{ top: HEADER_OFFSET, bottom: 0 }}
        >
            <div
                className={`relative shadow-lg overflow-hidden transition-[width] duration-200 ease-out border rounded-md ${
                    panelOpen ? "" : "w-0"
                }`}
                style={{
                    width: panelOpen ? `${clampedPanelWidth}px` : undefined,
                    border: "none",
                    backgroundColor: "#7020BF",
                }}
            >
                {panelOpen && (
                    <div className="px-6 pt-6 pb-6 overflow-auto h-full" style={{ width: "100%" }}>
                        {children}
                    </div>
                )}
                {resizable && panelOpen && (
                    <div
                        className={`absolute top-0 bottom-0 ${isRight ? "left-0 cursor-ew-resize" : "right-0 cursor-ew-resize"} w-2 z-10`}
                        onMouseDown={handleResizeStart}
                        aria-hidden="true"
                    />
                )}
            </div>
        </div>
    );
}
