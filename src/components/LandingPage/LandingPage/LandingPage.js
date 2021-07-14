import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Navbar from "../NavBar/Navbar";
import UnlimitedAccess from "../Access/UnlimitedAccess";
import Campus from "../Campus/Campus";
import Community from "../Community/Community";
import { FaAngleUp } from "react-icons/fa";
import "./LandingPage.css";
import Courses from "../AdvanceCourses/Courses";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <UnlimitedAccess />
      <Campus />
      <Courses />
      <Community />

      <Footer />

      <a href="#top" className="back_to_top_box">
        <button className="back_to_top">
          <FaAngleUp className="back_to_top_icon" />
        </button>
      </a>
    </div>
  );
};

export default LandingPage;
