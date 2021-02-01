import React, { Component } from "react";
import ProjectNav from "./ProjectNav/ProjectNav";
import ProjectGroup from "./ProjectGroup/ProjectGroup";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../UI/Modal/Modal";
import ProjectModalContent from "./ProjectModalContent/ProjectModalContent";

import classes from "./Projects.module.css";

import projectItems from "../../displayData/projects";

class Projects extends Component {
  state = {
    showModal: false,
    modalContent: null,
    projects: {},
    projectGroups: [],
    selectedProjectGroup: [],
  };

  componentDidMount() {
    const allProjects = { ...projectItems, All: projectItems };
    this.setState({
      projectGroups: Object.keys(allProjects),
      projects: allProjects,
      selectedProjectGroup: allProjects["All"],
    });
  }

  handleClickShowModal = (modalContent) => {
    this.setState({
      modalContent: <ProjectModalContent modalContent={modalContent} />,
      showModal: true,
    });
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleChangeProjectGroup = (projectGroup) =>
    this.setState({ selectedProjectGroup: this.state.projects[projectGroup] });

  render() {
    return (
      <Auxiliary>
        <div className={`${classes.Projects}`}>
          <h1>PROJECTS</h1>
          <div className="container">
            <div className="row">
              <ProjectNav
                projectGroups={this.state.projectGroups}
                handleChangeProjectGroup={this.handleChangeProjectGroup}
              />
            </div>
            <div className="row">
              <ProjectGroup
                projectGroup={this.state.selectedProjectGroup}
                clickShowModal={this.handleClickShowModal}
              />
            </div>
          </div>
        </div>
        <Modal show={this.state.showModal} closeModal={this.handleCloseModal}>
          {this.state.modalContent}
        </Modal>
      </Auxiliary>
    );
  }
}

export default Projects;
