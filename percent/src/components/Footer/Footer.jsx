import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Dribbble</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Percent. All rights reserved.</p>
    </footer>
  );
}

export default Footer;