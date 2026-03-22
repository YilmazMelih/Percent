import React from 'react';
import GlyphPreview from './GlyphPreview';

const FontPreviewRenderer = ({ text, glyphData, fontSize, letterSpacing }) => {
  const style = {
    display: 'flex',
    alignItems: 'flex-end', // Align glyphs to the baseline
    flexWrap: 'wrap',
    gap: `${fontSize * 0.05}px`, // Small gap between glyphs
  };

  return (
    <div style={style}>
      {text.split('').map((char, index) => {
        const charStyle = {
          marginRight: `${letterSpacing}px`,
        };

        if (char === ' ') {
          return <div key={index} style={{ ...charStyle, width: `${fontSize * 0.5}px` }}></div>;
        }

        const glyph = glyphData[char];
        if (glyph) {
          return (
            <div key={index} style={{ ...charStyle, width: `${fontSize}px`, height: `${fontSize * 1.2}px` }}>
              <GlyphPreview config={glyph.config} nodeSize={glyph.nodeSize} />
            </div>
          );
        }

        // Fallback for characters not in the font
        return <span key={index} style={{ ...charStyle, fontSize: `${fontSize}px`, height: `${fontSize * 1.2}px`, alignSelf: 'center' }}>{char}</span>;
      })}
    </div>
  );
};

export default FontPreviewRenderer;
