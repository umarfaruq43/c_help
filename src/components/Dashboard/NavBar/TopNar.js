import React, { useState } from "react";
import { FaBars, FaUserAlt } from "react-icons/fa";
import "./NavBar.css";

const TopNar = ({ navRes, setNavRes }) => {
  const handleNavRes = () => {
    setNavRes(!navRes);
  };
  const handleCloseNav = () => {
    setNavRes(false);
  };

  return (
    <div className="topNav">
      <div className="topNav_link" onClick={handleNavRes}>
        <FaBars className={navRes ? " topNav_icon " : "topNav_icon active"} />
      </div>
      <a href="/" className="topNav_link">
        <FaUserAlt className="topNav_icon" />
      </a>
    </div>
  );
};

export default TopNar;
