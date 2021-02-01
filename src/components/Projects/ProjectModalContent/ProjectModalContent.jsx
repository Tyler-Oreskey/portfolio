import React from "react";

import classes from "./ProjectModalContent.module.css";

const ProjectModalContent = (props) => {
  const { modalContent } = props;
  return (
    <div className={classes.ProjectModalContent}>
      <iframe
        width="560"
        height="315"
        src={modalContent.video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="video"
      />
      <h1>{modalContent.projectName}</h1>
      <p>{modalContent.projectDescription}</p>
      <p>{modalContent.formattedTechs}</p>
    </div>
  );
};

export default ProjectModalContent;
