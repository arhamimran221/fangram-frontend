import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/svg/footerlogo.svg";
import fb from "../../assets/svg/footerfb.svg";
import instra from "../../assets/svg/footerinstra.svg";
import youtube from "../../assets/svg/footeryoutube.svg";
import twiter from "../../assets/svg/footertwiter.svg";
const Footer = () => {
  return (
    <div className="mainFooterCard">
      <div className="container-fangram">
        <div className="maincard">
          <div className="footerlogo">
            <img src={footerlogo} alt="missing" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
          <div className="footerabout">
            <ul>
            Resources
              <li>Terms & Condition</li>
              <li>Privacy & Policy</li>
              <li>Investor Relationship</li>
            </ul>
          </div>
          <div className="footerabout">
            <ul>
              About
              <li>Our Story</li>
              <li>Media Coverage</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className="footerabout">
            <ul>
              Help
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Offers</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className="footerabout">
            <ul>
              Explore
              <li>Browse all Celebrities</li>
              <li>Returns & Refunds</li>
              <li>How to Tring?</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footersocial">
            <ul>Follow Us</ul>
            <div className="icons">
              <img src={fb} alt="" className="socialicon" />
              <img src={instra} alt="" className="socialicon" />
              <img src={youtube} alt="" className="socialicon" />
              <img src={twiter} alt="" className="socialicon" />
            </div>
          </div>
        </div>
      </div>
      <div className="divide-line"></div>
      <div className="container-fangram">
        <p className="copyright">Copyright © 2004-2023 FanGram® All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
