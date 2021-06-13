import React from "react";
import "./services.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyComponent from "./vanta";
import { Particles3 } from "./vanta";
import ParticlesContainer2 from "./particle-confid";
export const Services = () => {
  return (
    <div className="Particles3">
      <ParticlesContainer2 />;<div className="services-background"></div>
      <div className="services-container">
        <h1 className="skills-head">Skills</h1>
        <div className="row skills-container">
          <div className="outer-skill col-5 ">
            <div className="C skill">
              <h1>C++</h1>
            </div>
          </div>
          <div className="outer-skill col-5 ">
            <div className="Python skill" id="python">
              <h1>Python</h1>
            </div>
          </div>
          <div className="outer-skill col-5 ">
            <div className="ReactJS skill">
              <h1>ReactJS</h1>
            </div>
          </div>
          <div className="outer-skill col-5 ">
            <div className="JavaScript skill">
              <h1>JavaScript</h1>
            </div>
          </div>
          <div className="outer-skill col-5 ">
            <div className="HTML skill">
              <h1>HTML</h1>
            </div>
          </div>
          <div className="outer-skill col-5 ">
            <div className="CSS skill">
              <h1>CSS</h1>
            </div>
          </div>
          <div className="outer-skill col-5 ">
            <div className="Machine_Learning skill">
              <h1>Machine Learning</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
