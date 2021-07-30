import React, { useState } from "react";

import "./NavBar.css";

import { AiFillCarryOut } from "react-icons/ai";
import { BiArrowToBottom, BiLogOut, BiUpArrow } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import {
  FaAngleDoubleDown,
  FaAngleDown,
  FaAngleUp,
  FaArrowUp,
  FaBookReader,
  FaGraduationCap,
  FaHome,
  FaTimes,
  FaUserFriends,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = ({ navRes, setNavRes }) => {
  const [resourcesDrp, setresourcesDrp] = useState(true);
  const handleResources = () => {
    setresourcesDrp(!resourcesDrp);
  };

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
        <div className={navRes ? "sideNav active" : "sideNav"}>
          <div className="dashboard_logo">
            <FaTimes className="close_icon" onClick={handleNavRes} />
          </div>

          <div className="logo">LOgo</div>

          <NavLink to="" className="sideNav_link top " onClick={handleNavRes}>
            <FaHome className="dash_icon" /> <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/courses"
            className="sideNav_link"
            onClick={handleNavRes}
          >
            <FaGraduationCap className="dash_icon" />
            <span> My Courses </span>
          </NavLink>

          <NavLink to="/meet" className="sideNav_link" onClick={handleNavRes}>
            <FaUserFriends className="dash_icon" /> <span>Meet Others</span>
          </NavLink>

          <NavLink
            to="/schedule"
            className="sideNav_link"
            onClick={handleNavRes}
          >
            <AiFillCarryOut className="dash_icon" /> <span> Schedule </span>
          </NavLink>

          <NavLink to="/quizz" className="sideNav_link" onClick={handleNavRes}>
            <FaUserFriends className="dash_icon" /> <span>Quizz</span>
          </NavLink>

          <div
            onClick={handleResources}
            className="sideNav_link nav_resources "
          >
            <FaBookReader className="dash_icon" /> <span>Resources</span>
            <i className="resources_icon">
              {resourcesDrp ? <FaAngleDown /> : <FaAngleUp />}
            </i>
            <div
              className={
                resourcesDrp
                  ? "resources_drp_down"
                  : "resources_drp_down active"
              }
            >
              <ul className="drp_down_content">
                <NavLink to="/" className="sideNav_link_resources">
                  PDF'S
                </NavLink>
                <NavLink to="/" className="sideNav_link_resources">
                  Past Que
                </NavLink>
                <NavLink to="/" className="sideNav_link_resources">
                  Quizz
                </NavLink>
              </ul>
            </div>
          </div>

          <div className="end">
            <NavLink to="" className="sideNav_link">
              <FiSettings className="dash_icon" /> <span>Settings</span>
            </NavLink>

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
