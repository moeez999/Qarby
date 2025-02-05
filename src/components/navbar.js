import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="../images/qarbyLogo.png" alt="Qarby Logo" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Garage</a>
          </li>
          <li className="use-qarby-btn-2">
            <a href="#">Use Qarby</a>
          </li>
        </ul>
        <div className="buttons">
          <a href="#" className="use-qarby-btn">
            Use Qarby
          </a>

          <a href="#" className="get-started-btn">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
