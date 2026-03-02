import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import logoGif from "../../assets/images/Logo_fina.gif";

function Header() {
    return (
        <header className="header">
            <div className="header-brand">
                <img src={logoGif} alt="Percent Logo" className="header-logo" />
                <Link to="/" className="header-title">
                    Percent
                </Link>
            </div>
            <nav className="header-nav">
                <Link to="/playground">Playground</Link>
            </nav>
        </header>
    );
}

export default Header;
