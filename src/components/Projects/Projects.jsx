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
    projects: {},
    projectGroups: [],
    selectedProjectGroup: [],
    navIndex: 0,
  };

  componentDidMount() {
    const allProjects = { ...projectItems };

    for (const key in allProjects) {
      if (allProjects[key].length === 0) {
        delete allProjects[key];
      }
    }

    allProjects.all = { ...allProjects };

    const allProjectGroups = Object.keys(allProjects);
    const all = allProjectGroups.pop();

    allProjectGroups.unshift(all);

    this.setState({
      projectGroups: allProjectGroups,
      projects: allProjects,
      selectedProjectGroup: allProjects[all],
    });
  }

  handleClickShowModal = (modalContent) => {
    this.setState({
      modalContent,
      showModal: true,
    });
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleChangeProjectGroup = (projectGroup, navIndex) =>
    this.setState({
      selectedProjectGroup: this.state.projects[projectGroup],
      navIndex,
    });

  render() {
    return (
      <Auxiliary>
        <div className={`${classes.Projects}`}>
          <h1>PROJECTS</h1>
          <div className="container">
            <div className="row">
              {/* <ProjectNav
                navIndex={this.state.navIndex}
                projectGroups={this.state.projectGroups}
                handleChangeProjectGroup={this.handleChangeProjectGroup}
              /> */}
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
