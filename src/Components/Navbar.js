import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img className="logo" src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/" style={{ color: "#fff" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "#fff" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" style={{ color: "#fff" }}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/review" style={{ color: "#fff" }}>
            Review
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ color: "#fff" }}>
            Contact
          </Link>
        </li>
        <i className="fas fa-search" style={{ color: "#fff" }}></i>
        <i className="fas fa-shopping-cart" style={{ color: "#fff" }}></i>
      </ul>
    </div>
  );
}

export default Navbar;
