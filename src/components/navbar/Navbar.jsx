import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="logo">easybooking</span>
        <div className="navbar-items">
          <button className="navbar-button">Register</button>
          <button className="navbar-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
