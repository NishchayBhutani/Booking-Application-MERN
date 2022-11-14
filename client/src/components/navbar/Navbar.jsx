import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/' style={{ color: "inherit", textDecoration: "none" }}>
          <span className='logo'>easybooking</span>
        </Link>
        <div className='navbar-items'>
          <button className='navbar-button'>Register</button>
          <button className='navbar-button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
