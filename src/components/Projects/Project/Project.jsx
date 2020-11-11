import React, { Component } from "react";

import classes from "./Project.module.css";

class Project extends Component {
  state = {
    name: "",
    description: "",
  };

  componentDidMount() {
    const { name, description } = this.props.location.state;
    this.setState({ name, description });
  }

  render() {
    return (
      <div>
        <h1>Title of course is: {this.state.name}</h1>
        <p>Description is: {this.state.description}</p>
      </div>
    );
  }
}

export default Project;
