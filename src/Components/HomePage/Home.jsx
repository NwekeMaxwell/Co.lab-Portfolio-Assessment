import React from "react";
import "./Home.css";
import Skills from "../Skills/Skills";
import Resume from "../../Assets/Maxwell's Resume.pdf";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

const Home = () => {
  return (
    <div>
      <div className="homepage">
        <div className="left">
          <div className="avatar"></div>
        </div>
        <div className="right">
          <h2>Hi, I am </h2>
          <h1>Nweke Lotanna Maxwell</h1>
          <p>
            I am a disciplined and solution-oriented frontend web developer from
            Enugu, Nigeria. I am driven by the challenges of my work and the
            satisfaction that comes with overcoming them. I am constantly
            seeking to expand my knowledge and skills as a lifelong learner,
            always eager for new adventures. For me, the greatest motivation in
            software development lies in the potential it holds to make a
            positive impact on individuals and the world at large.
          </p>

          <div className="links">
            <a href={Resume} download>
              <button className="button" dow>
                Resume ⬇️
              </button>
            </a>
            <a href="https://github.com/NwekeMaxwell" className="icon">
              <Github />
            </a>
            <a href="https://linkedin.com/in/nwekemaxwell" className="icon">
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
      <div className="skillsSect">
        <Skills />
      </div>
    </div>
  );
};

export default Home;
