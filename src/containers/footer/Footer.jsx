import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links_logo">
          <img src={logo} alt="logo" />
          <p>Srikrishnapur, chaitanyapur 721645, All Rights Reserved</p>
        </div>

        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Srikrishnapur, chaitanyapur 721645</p>
          <p>123-123456</p>
          <p>github.com/abhidevs</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          <a href="https://github.com/abhidevs" target="_blank">&copy; 2021 Abhidevs</a>. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
