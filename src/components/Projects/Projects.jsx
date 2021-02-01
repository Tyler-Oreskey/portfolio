import React, { useState } from "react";
import ProjectNav from "./ProjectNav/ProjectNav";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../UI/Modal/Modal";
import ProjectModalContent from "./ProjectModalContent/ProjectModalContent";

import classes from "./Projects.module.css";

import projectItems from "../../displayData/projects";

projectItems["All"] = Object.values(projectItems).flat();

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClickShowModal = (modalContent) => {
    setModalContent(<ProjectModalContent modalContent={modalContent} />);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Auxiliary>
      <div className={classes.Projects}>
        <h1>PROJECTS</h1>
        <ProjectNav
          projects={projectItems}
          clickShowModal={handleClickShowModal}
        />
      </div>
      <Modal show={showModal} closeModal={handleCloseModal}>
        {modalContent}
      </Modal>
    </Auxiliary>
  );
};

export default Projects;
