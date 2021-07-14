import React, { useState } from "react";
import Meets from "../Meet/Meets";
import Modal from "../Modal";
import Courses from "../Courses/Courses";
import "./NavBar.css";

import {
  FaBars,
  FaBookReader,
  FaHome,
  FaQuestionCircle,
  FaTable,
  FaTimes,
  FaUserAlt,
  FaUserFriends,
} from "react-icons/fa";

const NavBar = ({ navRes, setNavRes }) => {
  const handleNavRes = () => {
    setNavRes(!navRes);
  };
  const handleCloseNav = () => {
    setNavRes(false);
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

          <div className="sideNav_link" onClick={handleCloseNav}>
            <FaUserFriends className="dash_icon" /> <span>Dashboard</span>
          </div>

          <div className="sideNav_link">
            <FaTable className="dash_icon" /> <span>Dashboard</span>
          </div>

          <div className="sideNav_link">
            <FaBookReader className="dash_icon" /> <span>Dashboard</span>
          </div>

          <div className="end">
            <div className="sideNav_link">
              <FaQuestionCircle className="dash_icon" />
            </div>
          </div>
        </div>

        <aside className="content_section">
          {/* <div className="topNav">
            <div className="topNav_link" onClick={handleNavRes}>
              <FaBars
                className={navRes ? " topNav_icon " : "topNav_icon active"}
              />
            </div>
            <a href="/" className="topNav_link">
              <FaUserAlt className="topNav_icon" />
            </a>
          </div> */}

          {/* <div className="other_page" onClick={handleCloseNav}> */}
          {/* {meet ? <Meet /> : ""} */}
          {/* {table ? <TimeTable /> : ""} */}
          {/* <Courses /> */}
          {/* <Meets /> */}
          {/* <Modal /> */}
          {/* </div> */}
        </aside>
      </div>
    </>
  );
};

export default NavBar;
