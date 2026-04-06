import React from 'react';
import './ClassroomPage.css';
import InteractiveBackground from '../../InteractiveBackground/InteractiveBackground';

function ClassroomPage() {
  return (
    <div className="classroom-container">
      <InteractiveBackground />
      <div className="classroom-content">
        <h1 className="classroom-text">EeSiAfm</h1>
      </div>
    </div>
  );
}

export default ClassroomPage;
