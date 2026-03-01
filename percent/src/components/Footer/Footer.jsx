import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <Link to="/#">Twitter</Link>
                <Link to="/#">Instagram</Link>
                <Link to="/#">Dribbble</Link>
            </div>
            <p className="footer-copy">
                &copy; {new Date().getFullYear()} Percent. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
