import React from 'react';
import './AllGlyphs.css';

const AllGlyphs = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="all-glyphs-container">
      <h3 className="all-glyphs-title">All Glyphs</h3>
      <div className="all-glyphs-grid">
        {letters.map(letter => (
          <div key={letter} className="glyph-item">
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGlyphs;
