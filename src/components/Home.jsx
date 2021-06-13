import React, { useState } from "react";
import "./Home.css";
import ParticlesContainer from "./ParticleContainer";
import TT from "./twitter.png";
import GT from "./github.png";
import LI from "./linkedin.png";
import Typewriter from "typewriter-effect";
export const Home = () => {
  return (
    <div className="home-container">
      <div className="Particle-cont">
        <ParticlesContainer />
      </div>
      <div className="hero">
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
        <button>Explore</button>
        <div className="social-media">
          <img src={TT} alt="" className="youtube" />
          <img src={GT} alt="" className="youtube" />
          <img src={LI} alt="" className="youtube" />
        </div>
      </div>
      <footer>© Avik Ghatak</footer>
    </div>
  );
};
