import React from "react";
import "./services.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyComponent from "./vanta";
import { Particles3 } from "./vanta";
import ParticlesContainer2 from "./particle-confid";
import C from "./skills.png";
import py from "./python.png";
import Rjs from "./Reactjs.png";
import JS from "./JavaScript.png";
import html from "./html.png";
import css3 from "./css3.png";
import ML from "./brain.png";
import { motion } from "framer-motion";
export const Services = () => {
  return (
    <div className="Particles3">
      <ParticlesContainer2 />;<div className="services-background"></div>
      <div className="load">
        <div className="services-container">
          <h1 className="skills-head">Skills</h1>
          <div className="row skills-container">
            <div className="outer-skill col-5 ">
              <div className="C skill">
                <img src={C} alt="" />
                <h1>C++</h1>
                <p>
                  General-purpose programming language created by Bjarne
                  Stroustrup
                </p>
              </div>
            </div>
            <div className="outer-skill col-5 ">
              <div className="Python skill" id="python">
                <img src={py} alt="" />
                <h1>Python</h1>
                <p>
                  It is a interpreted high-level general-purpose programming
                  language.
                </p>
              </div>
            </div>
            <div className="outer-skill col-5 ">
              <div className="ReactJS skill">
                <img src={Rjs} alt="" />
                <h1>ReactJS</h1>
                <p>
                  Maintained by Facebook and a community of individual
                  developers and companies
                </p>
              </div>
            </div>
            <div className="outer-skill col-5 ">
              <div className="JavaScript skill">
                <img src={JS} alt="" />
                <h1>JavaScript</h1>
                <p>
                  JavaScript is high-level, often just-in-time compiled, and
                  multi-paradigm
                </p>
              </div>
            </div>
            <div className="outer-skill col-5 ">
              <div className="HTML skill">
                <img src={html} alt="" />
                <h1>HTML</h1>
                <p>
                  {" "}
                  Standard markup language for documents designed to be
                  displayed in a web browser
                </p>
              </div>
            </div>
            <div className="outer-skill col-5 ">
              <div className="CSS skill">
                <img src={css3} alt="" />
                <h1>CSS</h1>
                <p>
                  Style sheet language used for describing the presentation of a
                  document
                </p>
              </div>
            </div>
            <div className="outer-skill ML col-5 ">
              <div className="Machine_Learning skill">
                <img src={ML} alt="" />
                <h1>Machine Learning</h1>
                <p>
                  It is a method of data analysis that automates analytical
                  model building
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
