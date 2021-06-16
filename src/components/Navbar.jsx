import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import DP from "../DP.jpg";
export const Navbar = () => {
  const fn = () => {
    document.querySelector(".top").classList.toggle("active1");
    document.querySelector(".mid").classList.toggle("active2");
    document.querySelector(".bot").classList.toggle("active3");
    document.querySelector(".nav-container").classList.toggle("active4");
  };
  const fn2 = (e)=>{
    fn()
  }
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
          <NavLink exact activeClassName="active_nav" id="HOME" to="/Personal-Portfolio/" onClick = {fn2}>
            Home
          </NavLink>
          <NavLink exact activeClassName="active_nav" id="ABOUT" to="/Personal-Portfolio/About" onClick = {fn2}>
            About
          </NavLink>
          <NavLink
            activeClassName="active_nav"
            id="SKILLS"
            to="/Personal-Portfolio/Services"
            exact
            onClick = {fn2}
          >
            Skills
          </NavLink>
          <NavLink
            id = "CONTACT"
            activeClassName="active_nav"
            to="/Personal-Portfolio/Contact"
            exact
            onClick = {fn2}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
