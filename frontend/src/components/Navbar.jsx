import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>SHOP.CO</h2>

      {/* Links */}
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart 🛒</Link>
      </div>

      {/* Hamburger Menu */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}