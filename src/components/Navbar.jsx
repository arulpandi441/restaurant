import { useState } from "react";
import { Link } from "react-router-dom";
import "../Layout/Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">

            <div className="logo">🍽️ Restaurant</div>

            <div className={`nav-links ${menuOpen ?"active":""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}> Home </Link>
                <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
                <Link to="/cart" onClick={()=> setMenuOpen(false)}>Cart</Link>
                <Link to="/history" onClick={()=> setMenuOpen(false)}>History</Link>
                <Link to="/table" onClick={() => setMenuOpen(false)}>Table Booking</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </nav>
    );
}

export default Navbar;