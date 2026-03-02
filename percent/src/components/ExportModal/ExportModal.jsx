import React from 'react';
import './ExportModal.css';

const ExportModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Export Font</h2>
        <div className="export-options">
          <label><input type="radio" name="format" value="otf" defaultChecked /> OTF</label>
          <label><input type="radio" name="format" value="ttf" /> TTF</label>
          <label><input type="radio" name="format" value="woff" /> WOFF</label>
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="modal-button cancel">Cancel</button>
          <button onClick={() => alert('Downloading...')} className="modal-button download">Download</button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;
