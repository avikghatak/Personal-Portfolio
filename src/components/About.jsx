import React, { useEffect } from "react";
import CSS from "./Avik (2).jpg";
import "./About.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import VID from "./black.mov";
import Particles from "react-particles-js";
import ParticlesContainer2 from "./particle-confid";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      {/* <video autoPlay loop muted>
        <source src={VID} type="video/mov" />
      </video> */}
      <div className="Particles2-cont"></div>
      <div className="about-container">
        <ParticlesContainer2 />
        <div className="about-head">About</div>
        <div className="Profile row d-flex">
          <div className="about-img-1 col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={CSS} alt="" className="fluid" />
          </div>
          <div className="about-para col-md-8 col-sm-12 d-flex flex-column justify-content-center text-end">
            <p>
              Hello there! My name is Avik Ghatak. I am a student, pursuing my
              Bachelors of technology in Electronics and Communication
              Engineering from <br />
              <span id="SPan">National Institue of Technology Durgapur.</span>
              <br /> I love to solve problems whether it's finding the most
              elegant way to write a line of code or figuring out which chord
              fits best into a progression. <br />
              And, singing evokes the temple of my soul!
            </p>
          </div>
        </div>
        <div className="button_CV">
          <Link to="./home">Download CV</Link>
        </div>
        <div data-aos="fade-up" className="education-head">
          <h1>Scholastics</h1>
        </div>
        <div data-aos="fade-up" className="education">
          <ul>
            <li>
              <div className="inside1">
                <h3>Kendriya Vidyalaya Ballygunge</h3>
                <p>Secondary Education - 2017</p>
              </div>
            </li>
            <li>
              <div className="inside2">
                <h3>Kendriya Vidyalaya Ballygunge</h3>
                <p>Senior Secondary Education - 2019</p>
              </div>
            </li>

            <li>
              <div className="inside3">
                <h4>National Institute of Technology, Durgapur</h4>
                <p>Batch of 2023</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
