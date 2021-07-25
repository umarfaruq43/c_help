import React, { useState } from "react";
import { FaArchive } from "react-icons/fa";
import "./courses.css";

const Course = ({ courseCode, courseTitle, courseDetails }) => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="course_content">
      <h1 className="course_code"> {courseCode} </h1>
      <div className="course_title"> {courseTitle} </div>
      <div className="course_details">{courseDetails}</div>

      <hr className="" />
      <div className="resources">
        <a href="/" className="pdfs">
          PDF's
        </a>

        <a href="/" className="quizz">
          Quizz
        </a>

        <a href="/" className="Past Que">
          Past Question
        </a>
      </div>
    </div>
  );
};

export default Course;
