import React, { Component } from "react";

import classes from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    form: {
      name: "",
      email: "",
      message: "",
    },
    maxLength: {
      name: 50,
      email: 50,
      message: 500,
    },
    charCount: {
      name: 0,
      email: 0,
      message: 0,
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const form = { ...this.state.form };
    form[name] = value;
    const charCount = { ...this.state.charCount };
    charCount[name] = value.length;
    this.setState({ form, charCount });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.ContactForm}>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Name</label>
            <div className="input-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                maxLength={this.state.maxLength.name}
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {`${this.state.charCount.name}/${this.state.maxLength.name}`}
                </span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                maxLength={this.state.maxLength.email}
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {this.state.charCount.email}/{this.state.maxLength.email}
                </span>
              </div>
            </div>
          </div>

          <div className="form-group form-text-area">
            <label>Message</label>
            <div className="input-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Enter Message"
                rows="5"
                maxLength={this.state.maxLength.message}
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {this.state.charCount.message}/{this.state.maxLength.message}
                </span>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
