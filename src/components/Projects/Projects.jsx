import React, { useState } from "react";
import Project from "./Project/Project";

import classes from "./Projects.module.css";

import projectItems from "../../displayData/projects";

const Projects = () => {
  const projects = projectItems.map((project) => (
    <Project
      key={project.id}
      name={project.name}
      description={project.description}
      techs={project.techs}
      image={project.image}
      github={project.github}
      video={project.video}
    />
  ));
  return (
    <div className={classes.Projects}>
      <h1>PROJECTS</h1>
    </div>
  );
};

export default Projects;
