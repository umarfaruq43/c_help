import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const prevScroll = window.pageYOffset;
  const [navToggler, setNavToggler] = useState(false);

  const handleNavToggler = () => {
    setNavToggler(!navToggler);
  };

  return (
    <div>
      <nav className="navigation">
        <div className="logo">Logo</div>

        <ul className={navToggler ? "nav_menu responsive" : "nav_menu "}>
          <li className="nav_items">
            <a href="/" className="nav_link active">
              Home
            </a>
          </li>

          <li className="nav_items">
            <a href="/" className="nav_link">
              About
            </a>
          </li>

          <li className="nav_items">
            <a href="/" className="nav_link">
              Courses
            </a>
          </li>

          <li className="nav_items">
            <a href="/" className="nav_link">
              Contact
            </a>
          </li>

          <li className="nav_items">
            <a href="/login" className="nav_link">
              <button className="ath_btn">Login</button>
            </a>
          </li>

          <li className="nav_items">
            <a href="/register" className="nav_link">
              <button className="ath_btn">Sign Up</button>
            </a>
          </li>
        </ul>
        <div className="nav_toggler" onClick={handleNavToggler}>
          {navToggler ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
