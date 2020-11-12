import React, { Component } from "react";

import classes from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    form: {
      name: "",
      email: "",
      message: "",
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            onChange={(event) => this.handleInputChange(event)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(event) => this.handleInputChange(event)}
          />
        </div>
        <div className="form-group">
          <label>Example textarea</label>
          <textarea
            name="message"
            className="form-control"
            placeholder="Enter Message"
            rows="3"
            onChange={(event) => this.handleInputChange(event)}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default ContactForm;
