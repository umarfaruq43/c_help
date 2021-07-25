import React from "react";

import "./NavBar.css";

import { AiFillCarryOut } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import {
  FaBookReader,
  FaGraduationCap,
  FaHome,
  FaTimes,
  FaUserFriends,
} from "react-icons/fa";

const NavBar = ({ navRes, setNavRes }) => {
  const handleNavRes = () => {
    setNavRes(!navRes);
  };
  const handleCloseNav = () => {
    setNavRes(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="nav_container">
        <div
          className={navRes ? "sideNav active" : "sideNav"}
          onClick={handleNavRes}
        >
          <div className="dashboard_logo">
            <FaTimes className="close_icon" onClick={handleNavRes} />
          </div>

          <div className="logo">LOgo</div>

          <div className="sideNav_link top ">
            <FaHome className="dash_icon" /> <span>Dashboard</span>
          </div>

          <div className="sideNav_link">
            <FaGraduationCap className="dash_icon" /> <span> My Courses </span>
          </div>

          <div className="sideNav_link" onClick={handleCloseNav}>
            <FaUserFriends className="dash_icon" /> <span>Meet Others</span>
          </div>

          <div className="sideNav_link">
            <AiFillCarryOut className="dash_icon" /> <span> Schedule </span>
          </div>

          <div className="sideNav_link">
            <FaBookReader className="dash_icon" /> <span>Resources</span>
          </div>

          <div className="end">
            <div className="sideNav_link">
              <FiSettings className="dash_icon" /> <span>Settings</span>
            </div>

            <div className="sideNav_link" onClick={handleLogOut}>
              <BiLogOut className="dash_icon" /> <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
