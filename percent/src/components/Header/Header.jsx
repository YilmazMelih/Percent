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
    const [isExportPanelVisible, setExportPanelVisible] = useState(false);
    const exportPageRef = useRef(null);
    const navContainerRef = useRef(null);

    useEffect(() => {
        // This logic handles the animation when navigating from the home page.
        if (!isHomePage && !isBarLoaded) {
            const timer = setTimeout(() => setIsBarLoaded(true), 10);
            return () => clearTimeout(timer);
        } else if (isHomePage) {
            setIsBarLoaded(false);
        }
    }, [isHomePage, isBarLoaded]);

    const closeExportPanel = () => {
        setExportPanelOpen(false);
    };

    const handleExportButtonClick = () => {
        if (isExportPanelOpen) {
            // If panel is open, trigger the download
            exportPageRef.current?.triggerExport();
        } else {
            // If panel is closed, open it
            setExportPanelVisible(true);
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
                    <>
                        {isExportPanelVisible && (
                            <div
                                className={`export-mode-backdrop${isExportPanelOpen ? " visible" : ""}`}
                                onClick={closeExportPanel}
                                aria-hidden="true"
                            />
                        )}
                        <div
                            ref={navContainerRef}
                            className={`classroom-nav-container ${isBarLoaded ? "loaded" : ""} ${isExportPanelOpen ? "expanded" : ""}`}
                            onTransitionEnd={(event) => {
                                if (
                                    event.target === navContainerRef.current &&
                                    event.propertyName === "max-height" &&
                                    !isExportPanelOpen
                                ) {
                                    setExportPanelVisible(false);
                                }
                            }}
                        >
                            <div className="classroom-nav-main">
                                <span className="start-text">Start</span>
                                <div className="classroom-links">
                                    <Link
                                        to="/classroom"
                                        className={
                                            location.pathname === "/classroom" && !isExportPanelOpen
                                                ? "active"
                                                : ""
                                        }
                                        onClick={closeExportPanel}
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
                                        className={
                                            location.pathname === "/system" && !isExportPanelOpen
                                                ? "active"
                                                : ""
                                        }
                                        onClick={closeExportPanel}
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
                                        className={
                                            location.pathname === "/editor" && !isExportPanelOpen
                                                ? "active"
                                                : ""
                                        }
                                        onClick={closeExportPanel}
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
                                    {/* Rendered as an anchor (not a button) so it
                                        inherits the same typography, padding, and
                                        spacing as the sibling <Link>s. */}
                                    <a
                                        href="#"
                                        role="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleExportButtonClick();
                                        }}
                                        className={`export-link${isExportPanelOpen ? " active" : ""}`}
                                    >
                                        Export
                                        <img
                                            src={downloadIcon}
                                            alt="Download"
                                            className={`download-icon${isExportPanelOpen ? " visible" : ""}`}
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="export-panel-content">
                                {isExportPanelVisible && <ExportPage ref={exportPageRef} />}
                            </div>
                        </div>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
