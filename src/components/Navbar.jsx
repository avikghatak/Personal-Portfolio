import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DP from "../DP.jpg";
export const Navbar = () => {
  const fn = () => {
    document.querySelector(".top").classList.toggle("active1");
    document.querySelector(".mid").classList.toggle("active2");
    document.querySelector(".bot").classList.toggle("active3");
    document.querySelector(".nav-container").classList.toggle("active4");
  };
  return (
    <div>
      <div className="hamburger" onClick={fn}>
        <div className="top"></div>
        <div className="mid"></div>
        <div className="bot"></div>
      </div>
      <div className="nav-container">
        <div className="img-container">
          <img src={DP} alt="N/A" />
        </div>
        <div className="ul-container">
          <Link to="/Personal-Portfolio/">Home</Link>
          <Link to="/Personal-Portfolio/About">About</Link>
          <Link to="/Personal-Portfolio/Services">Services</Link>
          <Link to="/Personal-Portfolio/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
