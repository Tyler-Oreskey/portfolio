import React from "react";

import classes from "./ProjectNav.module.css";

const ProjectNav = (props) => {
  const activeStyle = {
    color: "white",
    backgroundColor: "#dc143c",
  };

  const projectGroupItems = props.projectGroups.map((group, index) => {
    return (
      <li
        key={group}
        style={props.navIndex === index ? activeStyle : null}
        onClick={() => props.handleChangeProjectGroup(group, index)}
      >
        {group.toUpperCase()}
      </li>
    );
  });

  return (
    <div className={classes.ProjectNav}>
      <ul>{projectGroupItems}</ul>
    </div>
  );
};

export default ProjectNav;
