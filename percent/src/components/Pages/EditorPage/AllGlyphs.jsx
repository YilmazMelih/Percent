import React, { useState } from 'react';
import './AllGlyphs.css';
import GlyphPreview from './GlyphPreview';

const AllGlyphs = ({ glyphData, selectedGlyph, onGlyphSelect, availableGlyphs }) => {
  const [hoveredGlyph, setHoveredGlyph] = useState(null);
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <div className="all-glyphs-container">
      <h3 className="all-glyphs-title">All Glyphs</h3>
      <div className="all-glyphs-grid">
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
              onClick={() => isAvailable && onGlyphSelect(letter)}
              onMouseEnter={() => setHoveredGlyph(letter)}
              onMouseLeave={() => setHoveredGlyph(null)}
            >
              <div className="glyph-preview-wrapper">
                {isAvailable && glyph ? (
                  <GlyphPreview
                    config={glyph.config}
                    nodeSize={glyph.nodeSize}
                    showNodes={hoveredGlyph === letter}
                  />
                ) : (
                  <span>{letter}</span>
                )}
              </div>
              <span className="glyph-name-label">{letter}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGlyphs;
