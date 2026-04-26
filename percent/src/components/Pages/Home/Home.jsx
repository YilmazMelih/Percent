import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

import InteractiveBackground from "../../InteractiveBackground/InteractiveBackground";
import imgArrowDown from "../../../assets/images/arrow-down.svg";
import arrowUp from "../../../assets/images/arrow-up.svg";
import imgGroup55 from "../../../assets/images/Group 55.png";
import UserGlyphWord from "./UserGlyphWord";

const HEADER_HOME_TO_APP_ANIM_FLAG = "percent:playHeaderHomeTransition";

const Home = () => {
    const [heroRect, setHeroRect] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const navigate = useNavigate();
    const letsGoButtonRef = useRef(null);

    useEffect(() => {
        const heroElement = document.getElementById("hero-title");
        if (!heroElement) return undefined;
        const updateRect = () => setHeroRect(heroElement.getBoundingClientRect());
        updateRect();
        const observer = new ResizeObserver(updateRect);
        observer.observe(heroElement);
        window.addEventListener("resize", updateRect);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateRect);
        };
    }, []);

    useEffect(() => {
        const checkScrollBottom = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 100
            ) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", checkScrollBottom);
        return () => {
            window.removeEventListener("scroll", checkScrollBottom);
        };
    }, []);

    useEffect(() => {
        const button = letsGoButtonRef.current;
        if (!button) return;

        const jumpInterval = setInterval(() => {
            if (button && !button.classList.contains("jumping")) {
                if (Math.random() < 0.4) {
                    // Increased probability
                    button.classList.add("jumping");
                    setTimeout(() => {
                        button.classList.remove("jumping");
                    }, 500);
                }
            }
        }, 1000); // Decreased interval

        return () => clearInterval(jumpInterval);
    }, []);

    const handleScrollTopAndNavigate = (e) => {
        e.preventDefault();
        window.sessionStorage.setItem(HEADER_HOME_TO_APP_ANIM_FLAG, "1");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        setTimeout(() => {
            navigate("/system");
        }, 500);
    };

    return (
        <div className="home-container">
            <InteractiveBackground heroRect={heroRect} />

            {/* Hero Section */}
            <section className="hero-section">
                <div id="hero-title" className="hero-title">
                    <UserGlyphWord
                        text="Percent"
                        width="clamp(18rem, 78vw, 72rem)"
                        height={300}
                        scale={1}
                        letterSpacing={12}
                        wordSpacing={96}
                        nodePulseAmount={0.5}
                    />
                </div>
                {/* Decorative images are hidden via CSS for now */}
            </section>

            {/* Landing Page Content */}
            <div className="landing-page-container">
                <div className="landing-page-text">
                    <h2 className="landing-title">Design fonts by shaping circles</h2>
                    <p className="landing-subtitle">
                        Interactive tool for exploring letterforms through geometry and play
                    </p>
                </div>
                <a href="#about" className="learn-button">
                    <img alt="Scroll down" src={imgArrowDown} />
                </a>
            </div>

            {/* Decorative Background is now a CSS background on home-container */}

            {/* About Section */}
            <section id="about" className="about-section-container">
                <div className="about-content">
                    <h2 className="about-title">About Percent</h2>
                    <p className="about-text">
                        Percent helps graphic designers to explore and learn typefaces and font
                        creation. By allowing circle manipulation, the user is able to update glyph
                        forms. Percent makes it less intimidating to try font design for designers
                        and encourages creative exploration as well as learning.
                    </p>
                </div>
                <div className="about-graphics">
                    <img src={imgGroup55} alt="About Percent Visuals" />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section">
                <div className="footer-call-to-action">
                    <h3 className="footer-cta-title">Easy. Intuitive. Fast.</h3>
                    <p className="footer-cta-subtitle">Start creating your own font with ease</p>
                </div>
                <Link
                    to="/system"
                    className="scroll-to-top-button"
                    onClick={handleScrollTopAndNavigate}
                    ref={letsGoButtonRef}
                >
                    <span>Let's go!</span>
                </Link>
            </footer>
        </div>
    );
};

export default Home;
