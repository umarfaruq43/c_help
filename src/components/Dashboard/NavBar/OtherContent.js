import React from "react";
import Meets from "../Meet/Meets";
import "./NavBar.css";

const OtherContent = (navRes, setNavRes, handleNavRes, handleCloseNav) => {
  return (
    <div className="other_page" onClick={handleCloseNav}>
      {/* {meet ? <Meet /> : ""} */}
      {/* {table ? <TimeTable /> : ""} */}
      {/* <Courses /> */}
      <Meets />
      {/* <Modal /> */}
    </div>
  );
};

export default OtherContent;
