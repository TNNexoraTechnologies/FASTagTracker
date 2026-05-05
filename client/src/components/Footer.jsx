import React from "react";
import "../styles/Footer.css";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/Track.png"

const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="footer-top container">

        
        <div className="footer-brand">
          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Track every toll payment in one centralized dashboard. Simple, fast,
            and efficient.
          </p>
        </div>

       
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>API</li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      
      <div className="footer-bottom container">
        <p>© 2026 TollTrack. All rights reserved.</p>

        <div className="social-icons">
           <a href="#"><FaTwitter size={35} /></a>
  <a href="#"><FaLinkedin size={35} /></a>
  <a href="#"><FaGithub size={35} /></a>
  <a href="#"><FaEnvelope size={35} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;