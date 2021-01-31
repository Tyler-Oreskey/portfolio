import React from "react";
import ProjectNav from "./ProjectNav/ProjectNav";

import classes from "./Projects.module.css";

import projectItems from "../../displayData/projects";

const Projects = () => {
  projectItems["All"] = Object.values(projectItems).flat();
  return (
    <div className={classes.Projects}>
      <h1>PROJECTS</h1>
      <ProjectNav projects={projectItems} />
    </div>
  );
};

export default Projects;
