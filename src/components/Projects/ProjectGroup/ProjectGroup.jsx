import React from "react";

import Project from "./Project/Project";

import classes from "./ProjectGroup.module.css";

const ProjectGroup = (props) => {
  return props.projectGroup.map((project, idx) => {
    return (
      <div className={`${classes.Project} col-12 col-md-6 col-lg-4`} key={idx}>
        <Project project={project} clickShowModal={props.clickShowModal} />
      </div>
    );
  });
};

export default ProjectGroup;
