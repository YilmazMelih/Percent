import React, { useState, useEffect, useRef } from 'react';
import './BottomPanel.css';
import FontPreviewRenderer from './FontPreviewRenderer';

const BottomPanel = ({ glyphData }) => {
  const [previewText, setPreviewText] = useState('Percent');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [fontSize, setFontSize] = useState(48);
  const [isEditingFontSize, setIsEditingFontSize] = useState(false);
  const wrapperRef = useRef(null);
  const scrubRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditingFontSize) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [isEditingFontSize]);

  const handleMouseDown = (e) => {
    if (isEditingFontSize) return;
    e.preventDefault();
    
    scrubRef.current = {
      isScrubbing: true,
      startX: e.clientX,
      startSize: fontSize,
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseMove = (e) => {
    if (!scrubRef.current?.isScrubbing) return;

    const deltaX = e.clientX - scrubRef.current.startX;
    const newSize = Math.round(scrubRef.current.startSize + deltaX / 2);
    
    setFontSize(Math.max(1, Math.min(newSize, 300)));
  };

  const handleMouseUp = () => {
    scrubRef.current = { ...scrubRef.current, isScrubbing: false };
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = '';
  };

  const options = [
    'Edited Glyphs',
    'Hello World',
    'The quick brown fox jumps over the lazy dog',
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
    if (option === 'Edited Glyphs') {
      const editedGlyphs = glyphData ? Object.keys(glyphData).join('') : '';
      setPreviewText(editedGlyphs);
    } else {
      setPreviewText(option);
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
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div 
          className="font-size-wrapper"
          onMouseDown={handleMouseDown}
        >
          {isEditingFontSize ? (
            <input
              ref={inputRef}
              type="number"
              className="font-size-input"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value, 10) || 0)}
              onBlur={() => setIsEditingFontSize(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
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
          <span>pt</span>
        </div>
      </div>
      <div className="preview-area">
        <FontPreviewRenderer text={previewText} glyphData={glyphData} fontSize={fontSize} />
      </div>
    </div>
  );
};

export default BottomPanel;