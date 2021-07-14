import React, { useState } from "react";
import Course from "./Course";

const CourseData = [
  {
    courseCode: "Get 204",
    courseTitle: "Introduction to Polymers",
    courseDetails:
      "Introduction to Polymers is the Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Voluptatum quidem... ",
  },
  {
    courseCode: "Get 205",
    courseTitle: "Introduction to Polymers",
    courseDetails:
      "Introduction to Polymers is the Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Voluptatum quidem necessit atibus... ",
  },
  {
    courseCode: "Get 206",
    courseTitle: "Introduction to Polymers",
    courseDetails:
      "Introduction to Polymers is the Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Voluptatum ... ",
  },
  {
    courseCode: "Get 207",
    courseTitle: "Introduction to Polymers",
    courseDetails:
      "Introduction to Polymers is the Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Voluptatum ... ",
  },
  {
    courseCode: "Get 207",
    courseTitle: "Introduction to Polymers",
    courseDetails:
      "Introduction to Polymers is the Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Voluptatum ... ",
  },
  {
    courseCode: "Get 207",
    courseTitle: "Introduction to Polymers",
    courseDetails:
      "Introduction to Polymers is the Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Voluptatum ... ",
  },
];

const Courses = () => {
  return (
    <div className="Dasboard">
      <h1>My course</h1>

      <div className="course">
        {CourseData.map((course) => (
          <Course
            courseCode={course.courseCode}
            courseTitle={course.courseTitle}
            courseDetails={course.courseDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
