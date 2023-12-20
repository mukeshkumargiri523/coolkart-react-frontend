import React from "react";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">NewsLetter</span>
        <span className="big-text">
          Signup Now To enjoy more discount and offers in sales
        </span>
        <div className="form">
          <input type="text" placeholder="Email Address" className="text" />
          <button>Subscribe Now</button>
        </div>
        <div className="text">
          Will be used accordance with our privacy policy
          <div className="social-icons">
            <div className="icons">
              <FaLinkedinIn size={28} />
            </div>
            <div className="icons">
              <FaFacebookSquare size={28} />
            </div>
            <div className="icons">
              <FaTwitterSquare size={28} />
            </div>
            <div className="icons">
              <FaInstagramSquare size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
