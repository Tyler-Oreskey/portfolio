import React from "react";

import classes from "./ProjectModalContent.module.css";

const ProjectModalContent = (props) => {
  const { modalContent } = props;
  return (
    <div className={classes.ProjectModalContent}>
      <iframe
        width="100%"
        height="400"
        src={modalContent.video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      <div className={classes.ProjectInfo}>
        <h1>{modalContent.projectName}</h1>
        <p>{modalContent.projectDescription}</p>
        <p>
          <span>Technologies Used: </span>
          {modalContent.formattedTechs}
        </p>
      </div>
    </div>
  );
};

export default ProjectModalContent;
