import React, { useState } from 'react';
import './Export.css';
import { exportGlyphBasePaths } from '../EditorPage/exportGlyphBasePath';
import PreviewToolbar from './PreviewToolbar';

function ExportPage() {
  const [filename, setFilename] = useState('my-font');
  const [format, setFormat] = useState('otf');
  const [previewMode, setPreviewMode] = useState('single');
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog');
  const [previewFontSize, setPreviewFontSize] = useState(32);

  const handleExport = () => {
    exportGlyphBasePaths(filename, format);
  };

  const renderPreviewContent = () => {
    if (previewMode === 'waterfall') {
      const waterfallSizes = [72, 48, 36, 24, 18, 14];
      return waterfallSizes.map(size => (
        <div key={size} className="waterfall-item">
          <p className="preview-text" style={{ fontSize: `${size}px` }}>
            {previewText}
          </p>
          <span className="waterfall-size-label">{size}px</span>
        </div>
      ));
    }
    return (
      <p className="preview-text" style={{ fontSize: `${previewFontSize}px` }}>
        {previewText}
      </p>
    );
  };

  return (
    <div className="export-container">
      <h1 className="export-title">Font Name</h1>
      <div className="input-row">
        <input
          type="text"
          id="filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          className="filename-input"
        />
        <div className="format-options">
          <button
            className={`format-button ${format === 'otf' ? 'active' : ''}`}
            onClick={() => setFormat('otf')}
          >
            otf
          </button>
          <button
            className={`format-button ${format === 'ttf' ? 'active' : ''}`}
            onClick={() => setFormat('ttf')}
          >
            ttf
          </button>
        </div>
      </div>

      <div className="preview-section">
        <h2 className="preview-title">Preview</h2>
        <PreviewToolbar 
          mode={previewMode}
          setMode={setPreviewMode}
          fontSize={previewFontSize}
          setFontSize={setPreviewFontSize}
          text={previewText}
          setText={setPreviewText}
        />
        <div className="preview-box">
          {renderPreviewContent()}
        </div>
      </div>

      <div className="export-button-container">
        <button onClick={handleExport} className="export-button">
          {`Export ${filename}.${format}`}
        </button>
      </div>
    </div>
  );
}

export default ExportPage;
