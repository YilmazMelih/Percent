import React from 'react';
import './Card.css';

function Card({ children, title }) {
  return (
    <div className="card-container">
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;