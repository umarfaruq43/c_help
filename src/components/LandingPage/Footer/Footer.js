import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer_content">
        <div className="col">
          <div className="footer_box">
            <ul>
              <li>
                <a href="/" className="footer_link">
                  <FaTwitter className="foooter_icon" />
                </a>
              </li>

              <li>
                <a href="/" className="footer_link">
                  <FaFacebookF className="foooter_icon" />
                </a>
              </li>

              <li>
                <a href="/" className="footer_link">
                  <FaLinkedinIn className="foooter_icon" />
                </a>
              </li>

              <li>
                <a href="/" className="footer_link">
                  <FaWhatsapp className="foooter_icon" />
                </a>
              </li>

              <li>
                <a href="/" className="footer_link">
                  <FaTwitter className="foooter_icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; Copyright 2021 by CHelp. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
