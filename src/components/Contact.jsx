import React from "react";
import "./Contact.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import phone from "./phone.png";
import pin from "./pin.png";
import mail from "./mail.png";
import { motion } from "framer-motion";
import laptop from "./laptop.png";
import TT from "./twitter.png";
import GT from "./github.png";
import LI from "./linkedin.png";
export const Contact = () => {
  return (
    <div className="Contact-main">
      <h1>Contact Me</h1>
      <div className="contact-cover"></div>
      <div className="content-box load">
        {/* <div className="content-head">
          <p>Wanna Get In Touch?</p>
        </div> */}
        <div className="laptop-box">
          <img className="laptop" src={laptop} alt="" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.121544665498!2d88.32259081490952!3d22.499622485220343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270a7697371c1%3A0x17355128c933e97b!2s122%2F6%2C%20Roy%20Bahadur%20Rd%2C%20Ajoy%20Nagar%2C%20Tara%20Park%2C%20Behala%2C%20Kolkata%2C%20West%20Bengal%20700034!5e0!3m2!1sen!2sin!4v1623502348286!5m2!1sen!2sin"
            alt="map.iframe"
          ></iframe>
        </div>
        <div className="details">
          <div className="pin">
            <img src={pin} alt="" />
            <p>122/10 Roy Bahadur Road Behala Kolkata 700034</p>
          </div>
          <div className="phone">
            <img src={phone} alt="" />
            <p>891083196</p>
          </div>
          <div className="mail">
            <img src={mail} alt="" />
            <p>avikghatak02@gmail.com</p>
          </div>
          <div className="mail">
            <img src={mail} alt="" />
            <p>ag.19u10018@btech.nitdgp.ac.in</p>
          </div>
        </div>
      </div>
      <div className="icons">
        <a href="https://twitter.com/ghatak_avik" target="#">
          <img src={TT} alt="" />
        </a>
        <a href="https://github.com/avikghatak" target="#">
          <img src={GT} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/avik-g-8613151a5/" target="#">
          <img src={LI} alt="" />
        </a>
      </div>
      <div>
        <footer>© Avik Ghatak</footer>
      </div>
    </div>
  );
};
