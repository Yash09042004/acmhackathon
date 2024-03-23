import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__item">
        <a href="/profile">FAQ's</a>
      </div>
      <div className="navbar__item">
        <a href="/support">Support</a>
      </div>
      <div className="navbar__item">
        <a href="/signout">Sign Out</a>
      </div>
    </nav>
  );
};

export default Navbar;