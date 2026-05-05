import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/Track.png";
import{Link} from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="navbar">
  <div className="container navbar-inner">
    
    <div className="navbar-logo">
        <img src={logo} alt="logo" />
        
      </div>

    <ul className="navbar-menu">
        <li>Home</li>
        <li>Features</li>
        <li>Analytics</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    <div className="navbar-right">
    <Link to="./Signin">
        <button className="login-btn">Login</button>
        </Link>
       <Link to="./Signup">
        <button className="get-btn">Get Started</button>
        </Link>
    </div>

  </div>
</nav>
  );
};

export default Navbar;