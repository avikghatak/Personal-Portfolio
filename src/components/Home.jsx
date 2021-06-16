import React, { useState } from "react";
import "./Home.css";
import ParticlesContainer from "./ParticleContainer";
import TT from "./twitter.png";
import GT from "./github.png";
import LI from "./linkedin.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
export const Home = (props) => {
  const Redirect = () => {
    props.history.push("/Personal-Portfolio/About");
  };
  return (
    <div className="home-container">
      <div className="Particle-cont">
        <ParticlesContainer />
      </div>
      <div className="hero load">
        <h1>
          Hi I am <span id="name">Avik Ghatak</span>
        </h1>
        <div className="typing">
          <p>I am a&nbsp;</p>
          <Typewriter
            id="typer"
            options={{ autoStart: true, loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Programmer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("ML Enthusiast")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
          {/* <ul className="ul-cont">
            <li>Developer. !</li>
            <li>Programmer. !</li>
            <li>ML Enthusiat. !</li>
          </ul> */}
        </div>
        <button onClick={Redirect}>Explore</button>
        <div className="social-media">
          <a href="https://twitter.com/ghatak_avik" target="#">
            <img src={TT} alt="" className="youtube" />
          </a>
          <a href="https://github.com/avikghatak" target="#">
            <img src={GT} alt="" className="youtube" />
          </a>
          <a href="https://www.linkedin.com/in/avik-g-8613151a5/" target="#">
            <img src={LI} alt="" className="youtube" />
          </a>
        </div>
      </div>
      <footer>© Avik Ghatak</footer>
    </div>
  );
};
