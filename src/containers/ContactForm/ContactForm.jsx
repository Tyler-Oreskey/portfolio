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
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={this.state.form.name}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
          <label>
            Your Email:
            <input
              type="email"
              name="email"
              value={this.state.form.email}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.form.message}
              onChange={(event) => this.handleInputChange(event)}
            />
          </label>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
