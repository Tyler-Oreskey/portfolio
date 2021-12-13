import React from "react";

import classes from "./ProjectNav.module.css";

const ProjectNav = (props) => {
  const activeStyle = {
    color: "white",
    backgroundColor: "#dc143c",
  };

  const projectGroupItems = Object.keys(props.allProjects).map((group, idx) => {
    return (
      <li
        key={idx}
        style={props.navIndex === idx ? activeStyle : null}
        onClick={() => props.handleChangeProjectGroup(group, idx)}
      >
        {group}
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
