import React from "react";
import "./Courses.css";
import Image from "../../../image/courses-3.jpg";
import { BiCheckDouble } from "react-icons/bi";
import Button from "../Button/Button";
const Courses = () => {
  return (
    <div className="l_courses">
      <div className="l_courses_content">
        <h1 className="l_courses_title">
          Available Department <br /> <span>For Students</span>
        </h1>
      </div>

      <div className="holder">
        <div className="l_courses_card">
          <img src={Image} alt="John" className="course_img" />
          <div className="card_details">
            <div className="card_tag">Engineering</div>
            <a href="/" className="course_title">
              The branch of science and technology concerned with the of
              engines, machines, and structures.
            </a>

            <Button className="card_btn" ButtonText="Get Resources" />

            <hr className="courses_line" />
            <ul>
              <li>
                <i class="fal fa-users"></i>
                <BiCheckDouble />
                Past Questions
              </li>
              <li>
                <i class="fal fa-clock"></i>
                <BiCheckDouble />
                Quizz
              </li>
              <li>
                <i class="fal fa-comments"></i>
                <BiCheckDouble />
                Courses
              </li>
            </ul>

            <p className="title">
              {/* <Button className="Community_btn" ButtonText="Get Resources " /> */}
            </p>
          </div>
        </div>

        <div className="l_courses_card">
          <img src={Image} alt="John" className="course_img" />
          <div className="card_details">
            <div className="card_tag">Engineering</div>
            <a href="/" className="course_title">
              The branch of science and technology concerned with the of
              engines, machines, and structures.
            </a>

            <Button className="card_btn" ButtonText="Get Resources" />

            <hr className="courses_line" />
            <ul>
              <li>
                <i class="fal fa-users"></i>
                <BiCheckDouble />
                Past Questions
              </li>
              <li>
                <i class="fal fa-clock"></i>
                <BiCheckDouble />
                Quizz
              </li>
              <li>
                <i class="fal fa-comments"></i>
                <BiCheckDouble />
                Courses
              </li>
            </ul>

            <p className="title">
              {/* <Button className="Community_btn" ButtonText="Get Resources " /> */}
            </p>
          </div>
        </div>

        <div className="l_courses_card">
          <img src={Image} alt="John" className="course_img" />
          <div className="card_details">
            <div className="card_tag">Engineering</div>
            <a href="/" className="course_title">
              The branch of science and technology concerned with the of
              engines, machines, and structures.
            </a>

            <Button className="card_btn" ButtonText="Get Resources" />

            <hr className="courses_line" />
            <ul>
              <li>
                <i class="fal fa-users"></i>
                <BiCheckDouble />
                Past Questions
              </li>
              <li>
                <i class="fal fa-clock"></i>
                <BiCheckDouble />
                Quizz
              </li>
              <li>
                <i class="fal fa-comments"></i>
                <BiCheckDouble />
                Courses
              </li>
            </ul>

            <p className="title">
              {/* <Button className="Community_btn" ButtonText="Get Resources " /> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
