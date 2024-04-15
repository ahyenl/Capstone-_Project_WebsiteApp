import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaWheelchair, FaUniversalAccess } from 'react-icons/fa'; // Import FaUniversalAccess for accessibility icon, FaWheelchair for wheelchair icon
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <div className={isResponsive ? "topnav responsive" : "topnav"} id="myTopnav">
      <Link to="/" className="active">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/services">Bill Services Information</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/location">Location</Link>
      <Link to="/frequentaskquestions">FAQ</Link>
        <Link to="/peopleofdetermination" className="right-nav">
        <FaWheelchair /> 
        <span className="nav-text">People of Determination</span>
      </Link>
      <Link to="/accessibility" className="right-nav" >
        <FaUniversalAccess /> 
        <span className="nav-text">Accessibility</span>
      </Link>
      <a href="javascript:void(0);" className="icon" onClick={toggleResponsive}>
        <FaBars />
      </a>
    </div>
  );
};

export default Navbar;
