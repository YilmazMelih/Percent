import React, { useState } from 'react';
import './Export.css';
import { exportGlyphBasePaths } from '../EditorPage/exportGlyphBasePath';

function ExportPage() {
  const [filename, setFilename] = useState('my-font');
  const [format, setFormat] = useState('otf');

  const handleExport = () => {
    // The export function expects glyph data from localStorage.
    // We'll call it directly, assuming the data is available.
    exportGlyphBasePaths(filename, format);
  };

  return (
    <div className="export-container">
      <div className="export-card">
        <h1 className="export-title">Export Font</h1>
        <div className="form-group">
          <label htmlFor="filename">Filename</label>
          <input
            type="text"
            id="filename"
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
            className="filename-input"
          />
        </div>
        <div className="form-group">
          <label>Format</label>
          <div className="format-options">
            <button
              className={`format-button ${format === 'otf' ? 'active' : ''}`}
              onClick={() => setFormat('otf')}
            >
              OTF
            </button>
            <button
              className={`format-button ${format === 'ttf' ? 'active' : ''}`}
              onClick={() => setFormat('ttf')}
            >
              TTF
            </button>
          </div>
        </div>
        <button onClick={handleExport} className="export-button">
          Export
        </button>
      </div>
    </div>
  );
}

export default ExportPage;
