import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">easybooking</span>
        </Link>
        {user ? (
          <span>{user.username}</span>
        ) : (
          <div className="navbar-items">
            <Link to="/register">
              <button className="navbar-button">Register</button>
            </Link>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
