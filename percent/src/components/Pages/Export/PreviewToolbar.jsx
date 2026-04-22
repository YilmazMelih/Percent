
import React, { useState, useRef, useEffect } from 'react';
import './PreviewToolbar.css';

const PreviewToolbar = ({ mode, setMode, fontSize, setFontSize, text, setText }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const textOptions = [
    { label: 'Pangram', value: 'The quick brown fox jumps over the lazy dog.' },
    { label: 'Short Pangram', value: 'Waltz, bad nymph, for quick jigs vex.' },
    { label: 'Lorem Ipsum', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { label: 'All Characters', value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789' },
    { label: 'Alphabet (Caps)', value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
    { label: 'Alphabet (Lower)', value: 'abcdefghijklmnopqrstuvwxyz' },
    { label: 'Numbers', value: '0123456789' },
    { label: 'Quote', value: 'Design is how it works.' },
  ];

  const handleOptionClick = (value) => {
    setText(value);
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="preview-toolbar">
      <div className="custom-combobox" ref={dropdownRef}>
        <div className="combobox-input-group">
          <input 
            type="text"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            className="preview-text-input"
          />
          <button onClick={() => setDropdownOpen(!isDropdownOpen)} className={`dropdown-button ${isDropdownOpen ? 'active' : ''}`}>
            ▼
          </button>
        </div>
        {isDropdownOpen && (
          <ul className="options-list">
            {textOptions.map(option => (
              <li key={option.label} onClick={() => handleOptionClick(option.value)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="font-size-control">
        <label>Size</label>
        <input
            type="range"
            min="12"
            max="120"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            disabled={mode === 'waterfall'}
          />
        <span>{fontSize}px</span>
      </div>
      <div className="mode-switcher">
        <button className={`mode-button ${mode === 'single' ? 'active' : ''}`} onClick={() => setMode('single')}>Single Line</button>
        <button className={`mode-button ${mode === 'waterfall' ? 'active' : ''}`} onClick={() => setMode('waterfall')}>Waterfall</button>
      </div>
    </div>
  );
};

export default PreviewToolbar;
