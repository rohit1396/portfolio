import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <div className="project">
      <div className="project_info">
        <a href="https://to-do-list-rg.netlify.app/" target="_blank">
          <img
            className="project_img"
            src="..\images\proj1.png"
            alt="to-do_list"
          />
        </a>
        <h3 className="project_title">To-do List App</h3>
        <p>A simple To-Do List App </p>
        <p>Functionalities : ADD, UPDATE, DELETE</p>
      </div>
      <div className="project_info">
        <a href="https://netflix-rg.netlify.app/" target="_blank">
          <img
            className="project_img"
            src="..\images\proj2.png"
            alt="Netflix_Clone"
          />
        </a>
        <h3 className="project_title">Netflix Clone</h3>
        <p>A Netflix Clone displaying Various categories of Movies.</p>
        <p>User Authentication With Firebase.</p>
      </div>
    </div>
  );
};

export default Project;
