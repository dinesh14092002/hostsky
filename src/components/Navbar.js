import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Optional

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link to="/" className="navbar-brand">SkyHost</Link>

        {/* Toggler button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse justify-content-center ${!isCollapsed ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleNavbar}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/ourwork" className="nav-link" onClick={toggleNavbar}>Our work</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link" onClick={toggleNavbar}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
