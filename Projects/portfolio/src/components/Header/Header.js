import React from "react";
import "./Header.css";
import Typical from "react-typical";
import Profileimg from "../../assets/profileImg.png";

const Header = () => {
  return (
    <div className="header-container">
      {/* Headeer content */}
      <div className="header-content">
        <h1>Hi! Am</h1>
        <h2 className="fullname">Hritik Gupta</h2>
        <h2>
          I'm a{" "}
          <Typical
            steps={[
              "Full Stack Developer 🧑‍💻",
              2000,
              "Frontend Developer 🧑‍💻",
              2000,
              "Backend Developer 🧑‍💻",
              2000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me!</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
        </div>
      </div>
      <div>
        <div className="profile-img-container">
          <img src={Profileimg}></img>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
