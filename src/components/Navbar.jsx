import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/CSPT logo PNG B.png"; // If you still want to use this image somewhere


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        backgroundColor: "#333",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Logo */}
    <div className="">
    <img src={img} alt=""  className="h-20  object-cover"/>
      </div> 
      {/* Hamburger Icon */}
      <div
        className="hamburger"
        onClick={toggleMenu}
        style={{
          display: "none", // Initially hidden on large screens
          cursor: "pointer",
          fontSize: "1.5rem",
          color: "#fff",
        }}
      >
        ☰
      </div>

      {/* Desktop Links */}
      <div
        className="nav-desktop-links"
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link
          to="/"
          style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/services"
          style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
        >
          Services
        </Link>
        <Link
          to="/founder"
          style={{ margin: "0 15px", color: "#fff", textDecoration: "none" }}
        >
          Founder
        </Link>
      </div>

      {/* Mobile Links (Initially hidden, will show when hamburger is clicked) */}
      <div
        className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}
        style={{
          display: isMenuOpen ? "flex" : "none", // Show links when menu is open
          flexDirection: "column",
          gap: "15px",
          backgroundColor: "#333",
          position: "absolute",
          top: "60px",
          right: "20px",
          borderRadius: "5px",
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
        <Link
          to="/"
          style={{ margin: "5px 0", color: "#fff", textDecoration: "none" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/services"
          style={{ margin: "5px 0", color: "#fff", textDecoration: "none" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/founder"
          style={{ margin: "5px 0", color: "#fff", textDecoration: "none" }}
          onClick={() => setIsMenuOpen(false)}
        >
          Founder
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
