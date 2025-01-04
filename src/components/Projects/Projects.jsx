import React, { useState } from "react";
import Project from "./Project/Project";
import Modal from "../../UI/Modal/Modal";
import projects from "../../displayData/projects";

import classes from "./Projects.module.css";

const Projects = ({ reference }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClickShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const ProjectGroup = () => {
    return projects.map((project, idx) => {
      return (
        <div className={`${classes.Project} col-12 col-md-6 col-lg-4`} key={idx}>
          <Project project={project} clickShowModal={handleClickShowModal} />
        </div>
      );
    });
  };

  const ProjectModalContent = () =>
    modalContent !== null ? (
      <div className={classes.ProjectModalContent}>
        <div className={classes.AnimatedProjectBorder}></div>
        <div className={classes.ProjectInfo}>
          <h1>{modalContent.name}</h1>
          <p>{modalContent.description}</p>
          <p>
            <span>Technologies Used: </span>
            {modalContent.techs}
          </p>
        </div>
        <div className={classes.ProjectLinks}>
            <a
              href={modalContent.projectLinks.frontend}
              target="_blank"
              rel="noopener noreferrer"
            >
              FRONTEND
            </a>
            <a
              href={modalContent.projectLinks.backend}
              target="_blank"
              rel="noopener noreferrer"
            >
              BACKEND
            </a>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className={`${classes.Projects}`} ref={reference}>
        <h1>PROJECTS</h1>
        <div className="container">
          <div className="row">
            <ProjectGroup />
          </div>
        </div>
      </div>
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <ProjectModalContent />
      </Modal>
    </>
  );
};

export default Projects;
