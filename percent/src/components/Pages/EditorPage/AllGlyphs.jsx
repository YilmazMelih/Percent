import React, { useState } from 'react';
import './AllGlyphs.css';
import GlyphPreview from './GlyphPreview';

const AllGlyphs = ({ glyphData, selectedGlyph, onGlyphSelect, availableGlyphs }) => {
  const [hoveredGlyph, setHoveredGlyph] = useState(null);
  const [gridCellSize, setGridCellSize] = useState(50);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  const minSize = 40;
  const maxSize = 300;
  const progress = ((gridCellSize - minSize) / (maxSize - minSize)) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #167d48 ${progress}%, #ddd ${progress}%)`
  };

  return (
    <div className="all-glyphs-container">
      <div className="glyphs-grid-header">
        <h3 className="all-glyphs-title">Glyphs Grid</h3>
        <div className="slider-container">
          <div className={`size-indicator-small ${gridCellSize === minSize ? 'active' : ''}`}></div>
          <input
            type="range"
            min={minSize}
            max={maxSize}
            value={gridCellSize}
            onChange={(e) => setGridCellSize(Number(e.target.value))}
            className="grid-size-slider"
            style={sliderStyle}
          />
          <div className={`size-indicator-large ${gridCellSize === maxSize ? 'active' : ''}`}></div>
        </div>
      </div>
      <div
        className="all-glyphs-grid"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${gridCellSize}px, 1fr))` }}
      >
        {letters.map(letter => {
          const isAvailable = availableGlyphs.includes(letter);
          const isSelected = letter === selectedGlyph;
          const glyph = glyphData[letter];

          const className = `glyph-item ${
            isAvailable ? 'available' : 'unavailable'
          } ${isSelected ? 'selected' : ''}`;

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
  );
};

export default AllGlyphs;
