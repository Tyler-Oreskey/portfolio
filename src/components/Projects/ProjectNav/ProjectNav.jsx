import React, { useState } from "react";
import ProjectGroup from "./ProjectGroup/ProjectGroup";

import classes from "./ProjectNav.module.css";

const ProjectNav = (props) => {
  const { projects } = props;
  const [selectedProjectGroup, setProjectGroup] = useState("All");

  const handleSwitchProjectGroup = (projectGroup) =>
    setProjectGroup(projectGroup);

  const projectGroups = Object.keys(projects).map((projectGroup, index) => (
    <div key={index} onClick={() => handleSwitchProjectGroup(projectGroup)}>
      {projectGroup}
    </div>
  ));

  return (
    <div className="container">
      <div>{projectGroups}</div>
      <div className="row">
        <ProjectGroup
          projectGroup={selectedProjectGroup}
          projects={projects}
          clickShowModal={props.clickShowModal}
        />
      </div>
    </div>
  );
};

export default ProjectNav;
