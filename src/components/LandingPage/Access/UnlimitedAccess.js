import React from "react";
import "./UnlimitedAccess.css";
// import { FaUserTie, FaUserTimes } from "react-icons/fa"
import { FaUserTie } from "react-icons/fa";

const UnlimitedAccess = () => {
  return (
    <>
      <div className="access_page">
        <div className="access_title">
          <h1 className="title_1">Unlimited Access To various</h1>
          <h1 className="title_2"> Oppurtunities in Campus </h1>
        </div>

        <div className="access_components">
          <div className="card_box">
            <div className="box_content">
              <div className="box_icon red">
                <FaUserTie />
              </div>
              <div className="box_text">UI/UX Design </div>
            </div>
          </div>

          <div className="card_box">
            <div className="box_content">
              <div className="box_icon">
                <FaUserTie />
              </div>
              <div className="box_text">UI/UX Design </div>
            </div>
          </div>

          <div className="card_box">
            <div className="box_content">
              <div className="box_icon">
                <FaUserTie />
              </div>
              <div className="box_text">UI/UX Design </div>
            </div>
          </div>

          <div className="card_box">
            <div className="box_content">
              <div className="box_icon">
                <FaUserTie />
              </div>
              <div className="box_text">UI/UX Design </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlimitedAccess;
