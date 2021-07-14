import React from "react";
import "./Campus.css";
import Button from "../Button/Button";

const Campus = () => {
  return (
    <div className="campus">
      <div className="campus_content">
        <h1 className="campus_title">Are you a Fresher?</h1>
        <div className="campus_details">
          <h1>
            Meet With Your Course Mates
            <br />
            <span>Without Breaking a Sweat</span>.
          </h1>
        </div>
        <div className="buttons">
          <Button ButtonText="Get Started" className="inverse_btn more " />
        </div>
      </div>
    </div>
  );
};

export default Campus;
