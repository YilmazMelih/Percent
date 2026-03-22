import React, { useState, useEffect, useRef } from 'react';
import './BottomPanel.css';
import FontPreviewRenderer from './FontPreviewRenderer';

const BottomPanel = ({ glyphData }) => {
  const [previewText, setPreviewText] = useState('Percent');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [fontSize, setFontSize] = useState(48);
  const [isEditingFontSize, setIsEditingFontSize] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [isEditingLetterSpacing, setIsEditingLetterSpacing] = useState(false);

  const wrapperRef = useRef(null);
  const scrubRef = useRef(null);

  const fontSizeInputRef = useRef(null);
  const letterSpacingInputRef = useRef(null);

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

  const createScrubHandler = (value, setValue, isEditing) => {
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
        const newValue = Math.round(scrubRef.current.startValue + deltaX / 2);
        
        setValue(Math.max(-50, Math.min(newValue, 100))); // Allow negative spacing
      };
  
      const handleMouseUp = () => {
        scrubRef.current = { ...scrubRef.current, isScrubbing: false };
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = '';
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
    };
    return handleMouseDown;
  };

  const handleFontSizeMouseDown = createScrubHandler(fontSize, setFontSize, isEditingFontSize);
  const handleLetterSpacingMouseDown = createScrubHandler(letterSpacing, setLetterSpacing, isEditingLetterSpacing);

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
      const gridOrder = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
      const editedGlyphs = gridOrder.filter(char => glyphData && glyphData[char]).join('');
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
          onMouseDown={handleFontSizeMouseDown}
        >
          {isEditingFontSize ? (
            <input
              ref={fontSizeInputRef}
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
        <div 
          className="letter-spacing-wrapper"
          onMouseDown={handleLetterSpacingMouseDown}
        >
          {isEditingLetterSpacing ? (
            <input
              ref={letterSpacingInputRef}
              type="number"
              className="letter-spacing-input"
              value={letterSpacing}
              onChange={(e) => setLetterSpacing(parseInt(e.target.value, 10) || 0)}
              onBlur={() => setIsEditingLetterSpacing(false)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
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
          <span>px</span>
        </div>
      </div>
      <div className="preview-area">
        <FontPreviewRenderer text={previewText} glyphData={glyphData} fontSize={fontSize} letterSpacing={letterSpacing} />
      </div>
    </div>
  );
};

export default BottomPanel;