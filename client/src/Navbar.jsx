import React from "react";
import "./Navbar.css";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="site-title">Kshetra Vriddhi</h1>
      <div className="navbar">
        <a className="navbar__item" href="/profile">FAQ's</a>
        <a className="navbar__item" href="/support">Support</a>
        <a className="navbar__item" href="/signout">Sign Out</a>
      </div>
    </nav>
  );
};

export default Navbar;