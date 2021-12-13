import React, { Component } from "react";

import ProjectNav from "./ProjectNav/ProjectNav";
import ProjectGroup from "./ProjectGroup/ProjectGroup";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../UI/Modal/Modal";
import ProjectModalContent from "./ProjectModalContent/ProjectModalContent";
import projectItems from "../../displayData/projects";

import classes from "./Projects.module.css";

class Projects extends Component {
  state = {
    showModal: false,
    modalContent: null,
    allProjects: {},
    navIndex: 0,
    selectedProjectGroup: [],
    defaultProjectGroup: "ALL",
  };

  componentDidMount() {
    const allProjects = projectItems;

    for (const key in allProjects) {
      if (key !== this.state.defaultProjectGroup) {
        projectItems[key].map((project) => {
          allProjects[this.state.defaultProjectGroup].push(project);
        });
      }
    }

    this.setState({
      allProjects: allProjects,
      selectedProjectGroup: allProjects[this.state.defaultProjectGroup],
    });
  }

  handleClickShowModal = (modalContent) => {
    this.setState({
      modalContent,
      showModal: true,
    });
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleChangeProjectGroup = (projectGroup, navIndex) => {
    this.setState({
      selectedProjectGroup: this.state.allProjects[projectGroup],
      navIndex,
    });
  };

  render() {
    return (
      <Auxiliary>
        <div className={`${classes.Projects}`} ref={this.props.reference}>
          <h1>PROJECTS</h1>
          <div className="container">
            <div className="row">
              <ProjectNav
                navIndex={this.state.navIndex}
                allProjects={this.state.allProjects}
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
          <ProjectModalContent modalContent={this.state.modalContent} />
        </Modal>
      </Auxiliary>
    );
  }
}

export default Projects;
