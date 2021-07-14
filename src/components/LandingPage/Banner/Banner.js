import React from "react";
import Button from "../Button/Button";
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner_page">
      <div className="banner_page_text">
        <h3 className="title">Campus Help</h3>
        <h1 className="banner_page_desc">The New Way To Learn.</h1>
        <div className="banner_buttons">
          <a href="/">
            <Button ButtonText="Learn More" className=" inverse_btn space " />
          </a>
          <a href="/register">
            <Button ButtonText=" Get Started " className=" normal_btn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
