import React from "react";
import "./ProjectsPage.css";
import ProjData from "../../Data/ProjData";

const ProjectsPage = () => {
  return (
    <div className="projectsPage">
      <h1>MY PROJECTS</h1>
      <div>
        {ProjData.map(
          ({
            id,
            title,
            image,
            description,
            github,
            stack,
            projectFocus,
            link,
          }) => (
            <div key={id} className="projectDetails">
              <div className="imgContainer">
                <img src={image} alt="" />
              </div>
              <div className="descriptionContainer">
                <h2> {title} </h2>
                <div> {description} </div>
                <span>Stack: {stack.toString()} </span>
                <div>Focus: {projectFocus.toString()} </div>
                <div>
                  <a href={github} className="p-button">
                    Github
                  </a>
                  <a href={link} className="p-button">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
