import React, { useState, useEffect, useRef } from "react";
import "./BottomPanel.css";
import FontPreviewRenderer from "./FontPreviewRenderer";
import iconSize from "../../../assets/images/icon_size.png";
import iconSpacing from "../../../assets/images/icon_spacing.png";

const BottomPanel = ({ glyphData, guideLines }) => {
    const [previewText, setPreviewText] = useState("PERCENT");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [fontSize, setFontSize] = useState(48);
    const [isEditingFontSize, setIsEditingFontSize] = useState(false);
    const [letterSpacing, setLetterSpacing] = useState(0);
    const [isEditingLetterSpacing, setIsEditingLetterSpacing] = useState(false);
    const [lineHeight, setLineHeight] = useState(1.2);
    const [isEditingLineHeight, setIsEditingLineHeight] = useState(false);

    const wrapperRef = useRef(null);
    const scrubRef = useRef(null);

    const fontSizeInputRef = useRef(null);
    const letterSpacingInputRef = useRef(null);
    const lineHeightInputRef = useRef(null);

    useEffect(() => {
        if (isEditingFontSize) {
            fontSizeInputRef.current?.focus();
            fontSizeInputRef.current?.select();
        }
    }, [isEditingFontSize]);

    useEffect(() => {
        if (isEditingLetterSpacing) {
            letterSpacingInputRef.current?.focus();
            letterSpacingInputRef.current?.select();
        }
    }, [isEditingLetterSpacing]);

    useEffect(() => {
        if (isEditingLineHeight) {
            lineHeightInputRef.current?.focus();
            lineHeightInputRef.current?.select();
        }
    }, [isEditingLineHeight]);

    const createScrubHandler = (
        value,
        setValue,
        isEditing,
        min,
        max,
        step = 0.5,
        precision = 0,
    ) => {
        const handleMouseDown = (e) => {
            if (isEditing) return;
            e.preventDefault();

            scrubRef.current = {
                isScrubbing: true,
                startX: e.clientX,
                startValue: value,
            };

            const handleMouseMove = (e) => {
                if (!scrubRef.current?.isScrubbing) return;

                const deltaX = e.clientX - scrubRef.current.startX;
                let newValue = scrubRef.current.startValue + deltaX * step;

                setValue(parseFloat(Math.max(min, Math.min(newValue, max)).toFixed(precision)));
            };

            const handleMouseUp = () => {
                scrubRef.current = { ...scrubRef.current, isScrubbing: false };
                document.removeEventListener("mousemove", handleMouseMove);
                document.removeEventListener("mouseup", handleMouseUp);
                document.body.style.cursor = "";
            };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "col-resize";
        };
        return handleMouseDown;
    };

    const handleFontSizeMouseDown = createScrubHandler(
        fontSize,
        setFontSize,
        isEditingFontSize,
        1,
        500,
        0.5,
        0,
    );
    const handleLetterSpacingMouseDown = createScrubHandler(
        letterSpacing,
        setLetterSpacing,
        isEditingLetterSpacing,
        -50,
        100,
        0.5,
        0,
    );
    const handleLineHeightMouseDown = createScrubHandler(
        lineHeight,
        setLineHeight,
        isEditingLineHeight,
        0.1,
        3,
        0.01,
        2,
    );

    const options = [
        { value: "Edited Glyphs", label: "Edited Glyphs" },
        { value: "Hello World", label: "Hello World" },
        {
            value: "The quick brown fox jumps over the lazy dog",
            label: "The quick brown fox jumps over the lazy dog",
        },
        { value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", label: "All Uppercase" },
        { value: "abcdefghijklmnopqrstuvwxyz", label: "All Lowercase" },
    ];

    // Handles clicks outside of the dropdown component
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const handleOptionSelect = (option) => {
        if (option.value === "Edited Glyphs") {
            const gridOrder = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            const editedGlyphs = gridOrder.filter((char) => glyphData && glyphData[char]).join("");
            setPreviewText(editedGlyphs);
        } else {
            setPreviewText(option.value);
        }
        setDropdownOpen(false);
    };

    return (
        <div className="bottom-panel-container">
            <div className="timeline-header">
                <h3>Type here</h3>
                {/* The ref is attached to the wrapper div */}
                <div className="input-wrapper" ref={wrapperRef}>
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="preview-text-input"
                        value={previewText}
                        onChange={(e) => setPreviewText(e.target.value)}
                    />
                    {/* The button simply toggles the dropdown state */}
                    <button
                        className="dropdown-toggle"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                        ▼
                    </button>
                    {isDropdownOpen && (
                        <ul className="options-dropdown">
                            {options.map((option, index) => (
                                <li key={index} onClick={() => handleOptionSelect(option)}>
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="font-size-wrapper" onMouseDown={handleFontSizeMouseDown}>
                    {isEditingFontSize ? (
                        <input
                            ref={fontSizeInputRef}
                            type="number"
                            className="font-size-input"
                            value={fontSize}
                            onChange={(e) => setFontSize(parseInt(e.target.value, 10) || 0)}
                            onBlur={() => setIsEditingFontSize(false)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setIsEditingFontSize(false);
                                }
                            }}
                        />
                    ) : (
                        <span
                            className="font-size-display"
                            onDoubleClick={() => setIsEditingFontSize(true)}
                        >
                            {fontSize}
                        </span>
                    )}
                    <img
                        src={iconSize}
                        alt="Font Size"
                        className="control-icon"
                        title="Font Size"
                    />
                </div>
                <div className="letter-spacing-wrapper" onMouseDown={handleLetterSpacingMouseDown}>
                    {isEditingLetterSpacing ? (
                        <input
                            ref={letterSpacingInputRef}
                            type="number"
                            className="letter-spacing-input"
                            value={letterSpacing}
                            onChange={(e) => setLetterSpacing(parseInt(e.target.value, 10) || 0)}
                            onBlur={() => setIsEditingLetterSpacing(false)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setIsEditingLetterSpacing(false);
                                }
                            }}
                        />
                    ) : (
                        <span
                            className="letter-spacing-display"
                            onDoubleClick={() => setIsEditingLetterSpacing(true)}
                        >
                            {letterSpacing}
                        </span>
                    )}
                    <img
                        src={iconSpacing}
                        alt="Letter Spacing"
                        className="control-icon"
                        title="Letter Spacing"
                    />
                </div>
                <div className="line-height-wrapper" onMouseDown={handleLineHeightMouseDown}>
                    {isEditingLineHeight ? (
                        <input
                            ref={lineHeightInputRef}
                            type="number"
                            step="0.1"
                            className="line-height-input"
                            value={lineHeight}
                            onChange={(e) => setLineHeight(parseFloat(e.target.value) || 0)}
                            onBlur={() => setIsEditingLineHeight(false)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    setIsEditingLineHeight(false);
                                }
                            }}
                        />
                    ) : (
                        <span
                            className="line-height-display"
                            onDoubleClick={() => setIsEditingLineHeight(true)}
                        >
                            {lineHeight}
                        </span>
                    )}
                    <img
                        src={iconSpacing}
                        alt="Line Height"
                        className="control-icon rotated"
                        title="Line Height"
                    />
                </div>
            </div>
            <div className="preview-area">
                <FontPreviewRenderer
                    text={previewText}
                    glyphData={glyphData}
                    fontSize={fontSize}
                    letterSpacing={letterSpacing}
                    lineHeight={lineHeight}
                    guideLines={guideLines}
                />
            </div>
        </div>
    );
};

export default BottomPanel;
