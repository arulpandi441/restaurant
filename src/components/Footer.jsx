import React from "react";
import "../Layout/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-section brand">
                    <h2>🍽️ Foodies</h2>
                    <p>
                        Serving happiness with every bite. Fresh ingredients,
                        authentic taste, and fast delivery.
                    </p>
                </div>

                {/* Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Book Table</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>📍 Your City, India</p>
                    <p>📞 +91 98765 43210</p>
                    <p>✉️ foodies@email.com</p>
                </div>

                {/* Social */}
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © 2026 Foodies. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;