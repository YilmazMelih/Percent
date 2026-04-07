import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Header.css";
import { useModal } from "../../contexts/ModalContext";
import arrowLeft from "../../assets/images/arrow-left.svg";
import arrowRight from "../../assets/images/arrow-right.svg";

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isBarLoaded, setIsBarLoaded] = useState(!isHomePage);

    useEffect(() => {
        // This logic handles the animation when navigating from the home page.
        if (!isHomePage && !isBarLoaded) {
            const timer = setTimeout(() => setIsBarLoaded(true), 10);
            return () => clearTimeout(timer);
        } else if (isHomePage) {
            setIsBarLoaded(false);
        }
    }, [isHomePage, isBarLoaded]);

    return (
        <header className="header">
            <div className="header-brand">
                <Link to="/" className="header-title">
                    %
                </Link>
            </div>
            <nav className="header-nav">
                {isHomePage ? (
                    <Link to="/classroom" className={`header-link home-start-button`}>
                        Start
                        <img src={arrowLeft} alt="" className="start-arrow" />
                    </Link>
                ) : (
                    <div className={`classroom-nav-container ${isBarLoaded ? "loaded" : ""}`}>
                        <span className="start-text">Start</span>
                        <div className="classroom-links">
                            <Link
                                to="/classroom"
                                className={location.pathname === "/classroom" ? "active" : ""}
                            >
                                Classroom
                                {location.pathname === "/classroom" && (
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
                            >
                                System
                                {location.pathname === "/system" && (
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
                            >
                                Editor
                                {location.pathname === "/editor" && (
                                    <img
                                        src={arrowRight}
                                        alt=""
                                        className="classroom-active-arrow"
                                    />
                                )}
                            </Link>
                            <Link to="#">Export</Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
