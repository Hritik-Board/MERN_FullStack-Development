import "./Footer.css";
import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo"></img>
      </div>

      {/* copyright */}
      <div className="footer-copyright">
        <p> © 2024 Hritik Gupta Educational Institute </p>
      </div>

      {/* social media links */}
      <ul className="footer-social-media">
        <li>
          <a href="">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
