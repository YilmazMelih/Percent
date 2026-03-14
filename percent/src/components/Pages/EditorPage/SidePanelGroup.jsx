import { useState, Children, isValidElement } from "react";

const HEADER_OFFSET = "5rem";
const TAB_HEIGHT = "150px";
const PANEL_WIDTH = "18rem";
const DEFAULT_TAB_COLOR = "#d1d5db";
const DEFAULT_TAB_HOVER_COLOR = "#9ca3af";

export function SidePanelTab({ children, ...props }) {
    return null;
}

function getTabConfig(child) {
    if (!isValidElement(child)) return null;
    return { ...child.props, content: child.props.children };
}

export default function SidePanelGroup({ side = "right", children }) {
    const tabs = Children.toArray(children).map(getTabConfig).filter(Boolean);
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const isRight = side === "right";

    const containerClass = isRight
        ? "fixed right-0 z-[700] flex flex-row-reverse items-stretch"
        : "fixed left-0 z-[700] flex flex-row items-stretch";

    const panelBorderClass = isRight ? "border-l border-gray-200" : "border-r border-gray-200";

    const openArrow = isRight ? "▶" : "◀";
    const closedArrow = isRight ? "◀" : "▶";

    const handleTabClick = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    const panelOpen = activeIndex !== null;
    const activeTab = panelOpen ? tabs[activeIndex] : null;

    return (
        <div
            className={containerClass}
            style={{ top: HEADER_OFFSET, bottom: 0 }}
        >
            <div
                className={`bg-white shadow-lg overflow-hidden transition-[width] duration-200 ease-out ${panelBorderClass} ${
                    panelOpen ? "w-72" : "w-0"
                }`}
            >
                {activeTab && (
                    <div
                        className="p-4 overflow-auto h-full"
                        style={{ width: PANEL_WIDTH }}
                    >
                        {activeTab.title && (
                            <h2 className="text-sm font-medium text-gray-700 mb-3">
                                {activeTab.title}
                            </h2>
                        )}
                        {activeTab.content}
                    </div>
                )}
            </div>

            <div className="relative flex-shrink-0 w-10" style={{ minHeight: "100%" }}>
                {tabs.map((tab, i) => {
                    const isActive = activeIndex === i;
                    const tabColor = tab.tabColor ?? DEFAULT_TAB_COLOR;
                    const tabHoverColor = tab.tabHoverColor ?? DEFAULT_TAB_HOVER_COLOR;
                    const isHovered = hoveredIndex === i;
                    const tabTopOffset = tab.tabTopOffset ?? 0;

                    const tabContent = tab.tabText ? (
                        <span
                            className="whitespace-nowrap"
                            style={{
                                transform: "rotate(-90deg)",
                                display: "inline-block",
                            }}
                        >
                            {tab.tabText}
                        </span>
                    ) : (
                        isActive ? openArrow : closedArrow
                    );

                    const tabButtonClass = isRight
                        ? "absolute left-0 w-10 flex items-center justify-center border border-gray-400 border-r-0 shadow-md text-gray-800 text-sm font-medium transition-colors rounded-l-lg"
                        : "absolute left-0 w-10 flex items-center justify-center border border-gray-400 border-l-0 shadow-md text-gray-800 text-sm font-medium transition-colors rounded-r-lg";

                    return (
                        <button
                            key={i}
                            type="button"
                            onClick={() => handleTabClick(i)}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={tabButtonClass}
                            style={{
                                height: TAB_HEIGHT,
                                top: tabTopOffset,
                                backgroundColor: isHovered ? tabHoverColor : tabColor,
                            }}
                            aria-label={
                                isActive
                                    ? `Close ${tab.tabLabel ?? "panel"}`
                                    : `Open ${tab.tabLabel ?? "panel"}`
                            }
                        >
                            {tabContent}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
