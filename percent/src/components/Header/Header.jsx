import React from 'react';
import './Header.css';
import logoGif from '../../assets/images/Logo_fina.gif';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <img src={logoGif} alt="Percent Logo" className="header-logo" />
        <div className="header-title">Percent</div>
      </div>
      <nav className="header-nav">
        <a href="#">Playground</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;