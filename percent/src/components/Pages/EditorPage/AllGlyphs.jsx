import React, { useState } from "react";
import "./AllGlyphs.css";
import GlyphPreview from "./GlyphPreview";

const AllGlyphs = ({
    glyphData,
    selectedGlyph,
    onGlyphSelect,
    availableGlyphs,
    guideLines,
    setGuideLines,
}) => {
    const [hoveredGlyph, setHoveredGlyph] = useState(null);
    const gridCellSize = 50;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

    return (
        <div className="all-glyphs-container">
            <div className="p-4 flex flex-col h-full">
                <div className="glyphs-grid-header">
                    <h3 className="all-glyphs-title">Glyphs</h3>
                </div>
                <div
                    className="all-glyphs-grid flex-grow"
                    style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${gridCellSize}px, 1fr))` }}
                >
                {letters.map((letter) => {
                    const isAvailable = availableGlyphs.includes(letter);
                    const isSelected = letter === selectedGlyph;
                    const glyph = glyphData[letter];

                    const className = `glyph-item ${
                        isAvailable ? "available" : "unavailable"
                    } ${isSelected ? "selected" : ""}`;

                    return (
                        <div
                            key={letter}
                            className={className}
                            style={{ height: `${gridCellSize * 1.2}px` }}
                            onClick={() => isAvailable && onGlyphSelect(letter)}
                            onMouseEnter={() => setHoveredGlyph(letter)}
                            onMouseLeave={() => setHoveredGlyph(null)}
                        >
                            <div
                                className="glyph-preview-wrapper"
                                style={{ height: `${gridCellSize * 0.8}px` }}
                            >
                                {isAvailable && glyph ? (
                                    <GlyphPreview
                                        guideLines={guideLines}
                                        config={glyph.config}
                                        nodeSize={glyph.nodeSize}
                                        nodeX={glyph.nodeX}
                                        nodeY={glyph.nodeY}
                                        showNodes={hoveredGlyph === letter}
                                    />
                                ) : (
                                    <span style={{ fontSize: `${gridCellSize * 0.5}px` }}>
                                        {letter}
                                    </span>
                                )}
                            </div>
                            <span
                                className="glyph-name-label"
                                style={{ fontSize: `${gridCellSize * 0.15}px` }}
                            >
                                {letter}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
    );
};

export default AllGlyphs;
