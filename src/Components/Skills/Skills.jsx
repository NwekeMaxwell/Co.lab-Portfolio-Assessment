import React from "react";
import "./Skills.css";
import html from "../..//Assets/html.svg";
import css from "../..//Assets/css logo.svg";
import js from "../..//Assets/js logo.svg";
import react from "../..//Assets/react logo.svg";
import scss from "../..//Assets/scss logo.svg";
import typescript from "../../Assets/ts logo.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>My technical Skills</h1>
      <ul>
        <li>
          <img src={typescript} alt="" title="TYPESCRIPT" />
        </li>
        <li>
          <img src={js} alt="" title="JAVASCRIPT" />
        </li>
        <li>
          <img src={react} alt="" title="REACT" />
        </li>
        <li>
          <img src={scss} alt="" title="SCSS" />
        </li>
        <li>
          <img src={css} alt="" title="CSS" />
        </li>
        <li>
          <img src={html} alt="" title="HTML" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
