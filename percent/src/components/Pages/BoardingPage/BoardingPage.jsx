import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import './BoardingPage.css';

const fonts = [
  { name: 'FZHANWZKJW', key: 'FZHANWZKJW' },
  { name: 'HYQiHeiX4-35W', key: 'HYQiHeiX4-35W' },
  { name: 'Sen-Regular', key: 'Sen-Regular' },
];

const glyphs = [
  // Uppercase
  { char: 'A', name: 'A' }, { char: 'B', name: 'B' }, { char: 'C', name: 'C' }, { char: 'D', name: 'D' }, { char: 'E', name: 'E' }, { char: 'F', name: 'F' }, { char: 'G', name: 'G' }, { char: 'H', name: 'H' }, { char: 'I', name: 'I' }, { char: 'J', name: 'J' }, { char: 'K', name: 'K' }, { char: 'L', name: 'L' }, { char: 'M', name: 'M' }, { char: 'N', name: 'N' }, { char: 'O', name: 'O' }, { char: 'P', name: 'P' }, { char: 'Q', name: 'Q' }, { char: 'R', name: 'R' }, { char: 'S', name: 'S' }, { char: 'T', name: 'T' }, { char: 'U', name: 'U' }, { char: 'V', name: 'V' }, { char: 'W', name: 'W' }, { char: 'X', name: 'X' }, { char: 'Y', name: 'Y' }, { char: 'Z', name: 'Z' },
  // Lowercase
  { char: 'a', name: 'a' }, { char: 'b', name: 'b' }, { char: 'c', name: 'c' }, { char: 'd', name: 'd' }, { char: 'e', name: 'e' }, { char: 'f', name: 'f' }, { char: 'g', name: 'g' }, { char: 'h', name: 'h' }, { char: 'i', name: 'i' }, { char: 'j', name: 'j' }, { char: 'k', name: 'k' }, { char: 'l', name: 'l' }, { char: 'm', name: 'm' }, { char: 'n', name: 'n' }, { char: 'o', name: 'o' }, { char: 'p', name: 'p' }, { char: 'q', name: 'q' }, { char: 'r', name: 'r' }, { char: 's', name: 's' }, { char: 't', name: 't' }, { char: 'u', name: 'u' }, { char: 'v', name: 'v' }, { char: 'w', name: 'w' }, { char: 'x', name: 'x' }, { char: 'y', name: 'y' }, { char: 'z', name: 'z' },
  // Numbers
  { char: '0', name: '0' }, { char: '1', name: '1' }, { char: '2', name: '2' }, { char: '3', name: '3' }, { char: '4', name: '4' }, { char: '5', name: '5' }, { char: '6', name: '6' }, { char: '7', name: '7' }, { char: '8', name: '8' }, { char: '9', name: '9' },
  // Symbols
  { char: '!', name: 'exclaim' }, { char: '@', name: 'at' }, { char: '#', name: 'hash' }, { char: '$', name: 'dollar' }, { char: '%', name: 'percent' }, { char: '^', name: 'caret' }, { char: '&', name: 'ampersand' }, { char: '*', name: 'asterisk' }, { char: '(', name: 'l-paren' }, { char: ')', name: 'r-paren' }, { char: '_', name: 'underscore' }, { char: '+', name: 'plus' }, { char: '-', name: 'minus' }, { char: '=', name: 'equals' }, { char: '[', name: 'l-bracket' }, { char: ']', name: 'r-bracket' }, { char: '{', name: 'l-brace' }, { char: '}', name: 'r-brace' }, { char: ';', name: 'semicolon' }, { char: ':', name: 'colon' }, { char: '\\', name: 'backslash' }, { char: '"', name: 'quote' }, { char: '|', name: 'pipe' }, { char: ',', name: 'comma' }, { char: '.', name: 'period' }, { char: '<', name: 'less-than' }, { char: '>', name: 'greater-than' }, { char: '/', name: 'slash' }, { char: '?', name: 'question' }
];

const BoardingPage = () => {
  const navigate = useNavigate();
  const [selectedFont, setSelectedFont] = useState(fonts[0].key);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFonts = fonts.filter((font) =>
    font.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="boarding-container">
      <aside className="font-sidebar">
        <h2 className="sidebar-title">Choose a Font</h2>
        <input
          type="text"
          placeholder="Search fonts..."
          className="font-search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <ul className="font-list">
          {filteredFonts.map((font) => (
            <li
              key={font.key}
              className={`font-list-item ${selectedFont === font.key ? 'active' : ''}`}
              onClick={() => setSelectedFont(font.key)}
              style={{ fontFamily: font.key }}
            >
              {font.name}
            </li>
          ))}
        </ul>
        <Button onClick={() => navigate('/playground')}>Start editing</Button>
      </aside>
      <main className="glyph-preview" style={{ fontFamily: selectedFont }}>
        {glyphs.map((glyph, index) => (
          <div className="glyph-card" key={index}>
            <span className="glyph-char">{glyph.char}</span>
            <span className="glyph-name">{glyph.name}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BoardingPage;
