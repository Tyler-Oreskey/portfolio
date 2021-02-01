import React from "react";

import classes from "./ProjectNav.module.css";

const ProjectNav = (props) => {
  const projectGroupItems = props.projectGroups.map((group) => (
    <div key={group} onClick={() => props.handleChangeProjectGroup(group)}>
      {group}
    </div>
  ));
  return projectGroupItems;
};

export default ProjectNav;
