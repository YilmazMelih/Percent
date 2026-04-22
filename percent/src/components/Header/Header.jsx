import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useModal } from "../../contexts/ModalContext";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import icon from "../../assets/images/icon.png";
import downloadIcon from "../../assets/images/download.svg"; // Import the new icon
import ExportPage from "../Pages/Export/Export";

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isBarLoaded, setIsBarLoaded] = useState(!isHomePage);
    const [isExportPanelOpen, setExportPanelOpen] = useState(false);
    const exportPageRef = useRef(null);

    useEffect(() => {
        // This logic handles the animation when navigating from the home page.
        if (!isHomePage && !isBarLoaded) {
            const timer = setTimeout(() => setIsBarLoaded(true), 10);
            return () => clearTimeout(timer);
        } else if (isHomePage) {
            setIsBarLoaded(false);
        }
    }, [isHomePage, isBarLoaded]);

    const handleExportButtonClick = () => {
        if (isExportPanelOpen) {
            // If panel is open, trigger the download
            exportPageRef.current?.triggerExport();
        } else {
            // If panel is closed, open it
            setExportPanelOpen(true);
        }
    };

    return (
        <header className="header">
            <div className="header-brand">
                <Link to="/" className="header-title">
                    <img src={icon} alt="Logo" className="header-logo" />
                </Link>
            </div>
            <nav className="header-nav">
                {isHomePage ? (
                    <Link to="/classroom" className={`header-link home-start-button`}>
                        Start
                        <img src={arrowLeft} alt="" className="start-arrow" />
                    </Link>
                ) : (
                    <div className={`classroom-nav-container ${isBarLoaded ? "loaded" : ""} ${isExportPanelOpen ? "expanded" : ""}`}>
                        <div className="classroom-nav-main">
                            <span className="start-text">Start</span>
                            <div className="classroom-links">
                                <Link
                                    to="/classroom"
                                    className={location.pathname === "/classroom" ? "active" : ""}
                                    onClick={() => setExportPanelOpen(false)}
                                >
                                    Classroom
                                    {location.pathname === "/classroom" && !isExportPanelOpen && (
                                        <img
                                            src={arrowRight}
                                            alt=""
                                            className="classroom-active-arrow"
                                        />
                                    )}
                                </Link>
                                <Link
                                    to="/system"
                                    className={location.pathname === "/system" ? "active" : ""}
                                    onClick={() => setExportPanelOpen(false)}
                                >
                                    System
                                    {location.pathname === "/system" && !isExportPanelOpen && (
                                        <img
                                            src={arrowRight}
                                            alt=""
                                            className="classroom-active-arrow"
                                        />
                                    )}
                                </Link>
                                <Link
                                    to="/editor"
                                    className={location.pathname === "/editor" ? "active" : ""}
                                    onClick={() => setExportPanelOpen(false)}
                                >
                                    {location.pathname === "/editor" && !isExportPanelOpen && (
                                        <img src={arrowLeft} alt="" className="editor-active-arrow" />
                                    )}
                                    Editor
                                    {location.pathname === "/editor" && !isExportPanelOpen && (
                                        <img
                                            src={arrowRight}
                                            alt=""
                                            className="classroom-active-arrow"
                                        />
                                    )}
                                </Link>
                                <button
                                    onClick={handleExportButtonClick}
                                    className={`export-button-toggle ${isExportPanelOpen ? "active" : ""}`}
                                >
                                    Export
                                    {isExportPanelOpen && (
                                        <img src={downloadIcon} alt="Download" className="download-icon" />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="export-panel-content">
                            {isExportPanelOpen && <ExportPage ref={exportPageRef} />}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
