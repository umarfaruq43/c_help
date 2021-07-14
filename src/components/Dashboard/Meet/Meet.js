import React from "react";
import "../dashboard.css";
import "./Meet.css";
import user from "../../../image/user1.jpg";
import { Link } from "react-router-dom";
import { FaPhone, FaSms, FaWhatsapp } from "react-icons/fa";

const Meet = ({ name, image, title, number }) => {
  return (
    <>
      {/* <div className="meet_header">this is the header</div> */}

      {/* <div className="meet_card"> */}
      <div className="meet_card_content">
        <div className="meet_text">
          <div className="img_box">
            <img src={user} alt="" className="img_fluid" />
          </div>
          <h1 className="meet_name"> {name} </h1>
          <h3 className="meet_title"> {title} </h3>
        </div>
        <div className="meet_contact">
          <div className="meet_link">
            <a
              href={`https://wa.me/${number}`}
              alt="User Contact"
              className="contact_user "
            >
              <FaWhatsapp className="meet_icon" />
            </a>
          </div>

          <div className="meet_link">
            <a
              href={`mailto:${number}`}
              alt="User Contact"
              className="contact_user"
            >
              <FaSms className="meet_icon" />
            </a>
          </div>

          <div className="meet_link">
            <a
              href={`tel:${number}`}
              alt="User Contact"
              className="contact_user"
            >
              <FaPhone className="meet_icon" />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Meet;
