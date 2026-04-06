import React, { useState } from 'react';
import './ClassroomPage.css';
import InteractiveBackground from '../../InteractiveBackground/InteractiveBackground';
import E_png from '../../../assets/images/E.png';

function ClassroomPage() {
  const [hoveredInfo, setHoveredInfo] = useState(null);

  const handleMouseEnter = (e, image) => {
    const rect = e.target.getBoundingClientRect();
    setHoveredInfo({
      src: image,
      top: rect.top + rect.height / 2,
      left: rect.left + rect.width / 2,
    });
  };

  const handleMouseLeave = () => {
    setHoveredInfo(null);
  };

  const text = "EeSjAfm";

  return (
    <div className="classroom-container">
      <InteractiveBackground />
      <div className="classroom-content">
        <h1 className="classroom-text">
          {text.split('').map((char, index) => (
            <span 
              key={index}
              onMouseEnter={(e) => {
                if (char === 'E' && index === 0) {
                  handleMouseEnter(e, E_png);
                }
              }}
              onMouseLeave={handleMouseLeave}
            >
              {char}
            </span>
          ))}
        </h1>
        {hoveredInfo && (
          <img
            src={hoveredInfo.src}
            className="hover-image"
            style={{
              top: `${hoveredInfo.top}px`,
              left: `${hoveredInfo.left}px`,
            }}
            alt="hover effect"
          />
        )}
      </div>
    </div>
  );
}

export default ClassroomPage;
