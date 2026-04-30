import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { useModal } from "../../contexts/ModalContext";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";
import icon from "../../assets/images/icon.png";
import percentGif from "../../assets/images/Percent.gif";
import percentStatic from "../../assets/images/Percent.png"; // Import the static PNG
import downloadIcon from "../../assets/images/download.svg";
import ExportPage from "../Pages/Export/Export";

const HEADER_HOME_TO_APP_ANIM_FLAG = "percent:playHeaderHomeTransition";

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isBarLoaded, setIsBarLoaded] = useState(() => (isHomePage ? false : true));
    const [isExportPanelOpen, setExportPanelOpen] = useState(false);
    const [isExportPanelVisible, setExportPanelVisible] = useState(false);
    const exportPageRef = useRef(null);
    const navContainerRef = useRef(null);
    const exportOpenedAtRef = useRef(0);
    const [logoSrc, setLogoSrc] = useState(percentStatic); // Default to the static PNG

    // Preload the GIF to prevent flickering on first hover
    useEffect(() => {
        const img = new Image();
        img.src = percentGif;
    }, []);

    const handleLogoEnter = () => {
        setLogoSrc(percentGif);
    };

    const handleLogoLeave = () => {
        setLogoSrc(percentStatic);
    };

    useEffect(() => {
        if (isHomePage) {
            setIsBarLoaded(false);
            return undefined;
        }
        const shouldAnimateFromHome =
            window.sessionStorage.getItem(HEADER_HOME_TO_APP_ANIM_FLAG) === "1";
        window.sessionStorage.removeItem(HEADER_HOME_TO_APP_ANIM_FLAG);

        if (!shouldAnimateFromHome) {
            setIsBarLoaded(true);
            return undefined;
        }

        setIsBarLoaded(false);
        const timer = setTimeout(() => setIsBarLoaded(true), 10);
        return () => clearTimeout(timer);
    }, [isHomePage]);

    const closeExportPanel = () => {
        setExportPanelOpen(false);
        exportOpenedAtRef.current = 0;
    };

    // Allow other parts of the app (e.g. the editor tutorial) to imperatively
    // open or close the export dropdown via a custom event so we don't have to
    // lift the export state into a context.
    useEffect(() => {
        const handler = (event) => {
            const open = event?.detail?.open === true;
            if (open) {
                exportOpenedAtRef.current = Date.now();
                setExportPanelVisible(true);
                setExportPanelOpen(true);
            } else {
                setExportPanelOpen(false);
                exportOpenedAtRef.current = 0;
            }
        };
        window.addEventListener("tutorial:set-export-open", handler);
        return () => window.removeEventListener("tutorial:set-export-open", handler);
    }, []);

    const handleExportButtonClick = () => {
        if (isExportPanelOpen) {
            // Prevent accidental "click-through" export when opening the panel.
            if (Date.now() - exportOpenedAtRef.current < 250) return;
            exportPageRef.current?.triggerExport();
        } else {
            exportOpenedAtRef.current = Date.now();
            setExportPanelVisible(true);
            setExportPanelOpen(true);
        }
    };

    return (
        <header className={`header${isExportPanelOpen ? " export-overlay-active" : ""}`}>
            <div className="header-brand">
                <Link
                     to="/"
                     className="header-title"
                     onMouseEnter={() => setLogoSrc(percentGif)}
                     onMouseLeave={() => setLogoSrc(percentStatic)}
                 >
                     <img src={logoSrc} alt="Logo" className="header-logo" />
                 </Link>
            </div>
            <nav className="header-nav">
                {isHomePage ? (
                    <Link
                        to="/system"
                        className={`header-link home-start-button`}
                        onClick={() =>
                            window.sessionStorage.setItem(HEADER_HOME_TO_APP_ANIM_FLAG, "1")
                        }
                    >
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
                            data-tutorial-id="editor-export-panel"
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
                                            <img
                                                src={arrowLeft}
                                                alt=""
                                                className="editor-active-arrow"
                                            />
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
