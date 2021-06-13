import React from "react";
import "./Contact.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import phone from "./phone.png";
import pin from "./pin.png";
import mail from "./mail.png";
export const Contact = () => {
  return (
    <div className="Contact-main">
      <div className="content-box row">
        <div className="text col-5">
          <h2 className="Address">Address</h2>
          <p>
            <img className="pin" src={pin} alt="" /> 122/10 Roy Bahadur Road
          </p>
          <p>Behala, Kolkata 700034</p>
          <h2 className="add">Contact Number</h2>
          <p>
            <img className="phone" src={phone} alt="" /> 8901831396
          </p>
          <h2 className="add">Email</h2>
          <p>
            <img className="mail" src={mail} alt="" /> avikghatak02@gmail.com
          </p>
          <p>
            <img className="mail" src={mail} alt="" />{" "}
            ag.19u10018@btech.nitdgp.ac.in
          </p>
        </div>
        <p className="map col-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.121544665498!2d88.32259081490952!3d22.499622485220343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270a7697371c1%3A0x17355128c933e97b!2s122%2F6%2C%20Roy%20Bahadur%20Rd%2C%20Ajoy%20Nagar%2C%20Tara%20Park%2C%20Behala%2C%20Kolkata%2C%20West%20Bengal%20700034!5e0!3m2!1sen!2sin!4v1623502348286!5m2!1sen!2sin"

            //   allowfullscreen=""
            //   loading="lazy"
          ></iframe>
        </p>
      </div>
    </div>
  );
};
