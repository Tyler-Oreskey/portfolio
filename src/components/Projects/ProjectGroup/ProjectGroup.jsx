import React from "react";

import Project from "./Project/Project";

const ProjectGroup = (props) => {
  const projectsByGroup = Object.values(props.projectGroup)
    .flat()
    .map((project, index) => (
      <div className="col-12 col-md-6 col-lg-4" key={index}>
        <Project project={project} clickShowModal={props.clickShowModal} />
      </div>
    ));
  return projectsByGroup;
};

export default ProjectGroup;
