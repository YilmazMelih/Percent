import { useState, Children, isValidElement } from "react";

const HEADER_OFFSET = "5rem";
const TAB_HEIGHT = "150px";
const PANEL_WIDTH = "24rem";
const DEFAULT_TAB_COLOR = "white";
const DEFAULT_TAB_HOVER_COLOR = "white";
const DEFAULT_TAB_TEXT_COLOR = "black";
const DEFAULT_TAB_BORDER_COLOR = "black";
const DEFAULT_PANEL_BORDER_COLOR = "black";

function toHexColor(value) {
    if (value == null || typeof value !== "string") return value;
    const s = value.trim();
    if (s.startsWith("#")) return s;
    if (/^[0-9A-Fa-f]{3}$/.test(s) || /^[0-9A-Fa-f]{6}$/.test(s)) return `#${s}`;
    return s;
}

export function SidePanelTab({ children, ...props }) {
    return null;
}

function getTabConfig(child) {
    if (!isValidElement(child)) return null;
    return { ...child.props, content: child.props.children };
}

export default function SidePanelGroup({
    side = "right",
    children,
    activeIndex: controlledActiveIndex,
    onActiveIndexChange,
}) {
    const tabs = Children.toArray(children).map(getTabConfig).filter(Boolean);
    const [internalActiveIndex, setInternalActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const isRight = side === "right";
    const activeIndex = controlledActiveIndex ?? internalActiveIndex;

    const containerClass = isRight
        ? "fixed right-0 z-[700] flex flex-row-reverse items-stretch"
        : "fixed left-0 z-[700] flex flex-row items-stretch";

    const panelBorderClass = isRight ? "border-l" : "border-r";

    const openArrow = isRight ? "▶" : "◀";
    const closedArrow = isRight ? "◀" : "▶";

    const handleTabClick = (index) => {
        const next = activeIndex === index ? null : index;
        setInternalActiveIndex(next);
        onActiveIndexChange?.(next);
    };

    const panelOpen = activeIndex !== null;
    const activeTab = panelOpen ? tabs[activeIndex] : null;

    return (
        <div className={containerClass} style={{ top: HEADER_OFFSET, bottom: 0 }}>
            <div
                className={`bg-white shadow-lg overflow-hidden transition-[width] duration-200 ease-out ${panelBorderClass} ${
                    panelOpen ? "w-96" : "w-0"
                }`}
                style={{
                    borderColor: activeTab
                        ? (toHexColor(activeTab.panelBorderColor) ?? DEFAULT_PANEL_BORDER_COLOR)
                        : DEFAULT_PANEL_BORDER_COLOR,
                }}
            >
                {activeTab && (
                    <div className="p-4 overflow-auto h-full" style={{ width: PANEL_WIDTH }}>
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
                    const tabColor = toHexColor(tab.tabColor) ?? DEFAULT_TAB_COLOR;
                    const tabHoverColor = toHexColor(tab.tabHoverColor) ?? DEFAULT_TAB_HOVER_COLOR;
                    const tabTextColor = toHexColor(tab.tabTextColor) ?? DEFAULT_TAB_TEXT_COLOR;
                    const tabBorderColor =
                        toHexColor(tab.tabBorderColor) ?? DEFAULT_TAB_BORDER_COLOR;
                    const isHovered = hoveredIndex === i;
                    const tabTopOffset = tab.tabTopOffset ?? 0;

                    const tabContent = tab.tabText ? (
                        <span
                            className="whitespace-nowrap"
                            style={{
                                transform: "rotate(-90deg)",
                                display: "inline-block",
                                color: tabTextColor,
                            }}
                        >
                            {tab.tabText}
                        </span>
                    ) : (
                        <span style={{ color: tabTextColor }}>
                            {isActive ? openArrow : closedArrow}
                        </span>
                    );

                    const tabButtonClass =
                        "absolute left-0 w-10 flex items-center justify-center text-sm font-medium transition-colors";

                    const tabRadius = "0.5rem";
                    const tabFillStyle = isRight
                        ? {
                              backgroundColor: isHovered ? tabHoverColor : tabColor,
                              borderLeft: `1px solid ${tabBorderColor}`,
                              borderTop: `1px solid ${tabBorderColor}`,
                              borderBottom: `1px solid ${tabBorderColor}`,
                              borderRight: "none",
                              borderTopLeftRadius: tabRadius,
                              borderBottomLeftRadius: tabRadius,
                              borderTopRightRadius: 0,
                              borderBottomRightRadius: 0,
                          }
                        : {
                              backgroundColor: isHovered ? tabHoverColor : tabColor,
                              borderRight: `1px solid ${tabBorderColor}`,
                              borderTop: `1px solid ${tabBorderColor}`,
                              borderBottom: `1px solid ${tabBorderColor}`,
                              borderLeft: "none",
                              borderTopRightRadius: tabRadius,
                              borderBottomRightRadius: tabRadius,
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0,
                          };

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
                                padding: 0,
                                background: "none",
                                border: "none",
                                outline: "none",
                            }}
                            aria-label={
                                isActive
                                    ? `Close ${tab.tabLabel ?? "panel"}`
                                    : `Open ${tab.tabLabel ?? "panel"}`
                            }
                        >
                            <span
                                className="w-full h-full flex items-center justify-center"
                                style={tabFillStyle}
                            >
                                {tabContent}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
