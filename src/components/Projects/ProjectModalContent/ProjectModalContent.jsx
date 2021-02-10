import React from "react";

import classes from "./ProjectModalContent.module.css";

const ProjectModalContent = (props) =>
  props.modalContent !== null ? (
    <div className={classes.ProjectModalContent}>
      <iframe
        width="100%"
        height="400"
        src={props.modalContent.video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      <div className={classes.AnimatedProjectBorder}></div>
      <div className={classes.ProjectInfo}>
        <h1>{props.modalContent.projectName}</h1>
        <p>{props.modalContent.projectDescription}</p>
        <p>
          <span>Technologies Used: </span>
          {props.modalContent.formattedTechs}
        </p>
      </div>
      <div className={classes.ProjectLinks}>
        {props.modalContent.projectLinks}
      </div>
    </div>
  ) : null;

export default ProjectModalContent;
