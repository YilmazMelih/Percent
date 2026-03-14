import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import logoGif from "../../assets/images/Logo_fina.gif";
import { useModal } from "../../contexts/ModalContext";

function Header() {
    const location = useLocation();
    const { openExportModal } = useModal();
    const isPlayground = location.pathname === "/playground";
    return (
        <header className="header">
            <div className="header-brand">
                <img src={logoGif} alt="Percent Logo" className="header-logo" />
                <Link to="/" className="header-title">
                    Percent
                </Link>
            </div>
            <nav className="header-nav">
                {isPlayground ? (
                    <button onClick={openExportModal} className="header-link">
                        Export
                    </button>
                ) : (
                    <Link to="/playground" className="header-link">
                        Playground
                    </Link>
                )}
                <Link to="/editor" className="header-link">
                    Editor
                </Link>
            </nav>
        </header>
    );
}

export default Header;
