import React from "react";
import "./Community.css";
import Image from "../../../image/community.jpg";
import Button from "../Button/Button";

const Community = () => {
  return (
    <div className="community">
      <div className="row">
        <div className=" community_col align_texts padding">
          <div className="community_text">
            <h1 className="community_title">
              Start Growing With
              <br />
              <span>The Community</span>
            </h1>
            <div className="community_des">
              Our service is free to users because vendors pay us when they
              receive web traffic. We list all vendors - not just those that pay
              us - in our comprehensive directory so that you can compare, sort
              and filter your results to make the most informed decision
              possible. GetApp is a Gartner company. Gartner (NYSE: IT) is the
              world's leading information technology research.
            </div>
            <div className="comm_btn">
              <Button
                ButtonText="Get Started"
                className="Community_btn more "
              />
            </div>
          </div>
        </div>

        {/* COLUME 2  */}

        <div className=" community_col2">
          <div className="community_img_box">
            <img src={Image} alt="" className="community_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
