import React, { useState, useEffect } from "react";
import Project from "./ProjectGroup/Project/Project";
import Modal from "../../UI/Modal/Modal";
import projectItems from "../../displayData/projects";

import classes from "./Projects.module.css";

const Projects = ({ reference }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [allProjects, setAllProjects] = useState({});
  const [navIndex, setNavIndex] = useState(0);
  const [selectedProjectGroup, setSelectedProjectGroup] = useState([]);
  const defaultProjectGroup = "ALL";

  useEffect(() => {
    const allProjectsData = JSON.parse(JSON.stringify(projectItems));
  
    allProjectsData[defaultProjectGroup] = [];
  
    for (const key in allProjectsData) {
      if (key !== defaultProjectGroup) {
        allProjectsData[key].forEach((project) => {
          allProjectsData[defaultProjectGroup].push(project);
        });
      }
    }
  
    setAllProjects(allProjectsData);
    setSelectedProjectGroup(allProjectsData[defaultProjectGroup]);
  }, [defaultProjectGroup]);
  

  const handleClickShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleChangeProjectGroup = (projectGroup, navIndex) => {
    setSelectedProjectGroup(allProjects[projectGroup]);
    setNavIndex(navIndex);
  };

  const ProjectNav = () => {
    const activeStyle = {
      color: "white",
      backgroundColor: "#dc143c",
    };

    const projectGroupItems = Object.keys(allProjects).map((group, idx) => (
      <li
        key={idx}
        style={navIndex === idx ? activeStyle : null}
        onClick={() => handleChangeProjectGroup(group, idx)}
      >
        {group}
      </li>
    ));

    return (
      <div className={classes.ProjectNav}>
        <ul>{projectGroupItems}</ul>
      </div>
    );
  };

  const ProjectGroup = () => {
    return selectedProjectGroup.map((project, idx) => {
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
            <ProjectNav />
          </div>
          <div className="row">
            <ProjectGroup />
          </div>
        </div>
      </div>
      <Modal show={showModal} closeModal={handleCloseModal}>
        <ProjectModalContent />
      </Modal>
    </>
  );
};

export default Projects;
