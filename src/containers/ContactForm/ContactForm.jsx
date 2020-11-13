import React, { Component } from "react";

import classes from "./ContactForm.module.css";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

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
    errors: {
      name: "",
      email: "",
      message: "",
    },
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const form = { ...this.state.form };
    form[name] = value;
    const charCount = { ...this.state.charCount };
    charCount[name] = value.length;

    let errors = { ...this.state.errors };
    switch (name) {
      case "name":
        errors.name =
          value.length < 3 ? "Name must be atleast 3 characters long!" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "message":
        errors.message =
          value.length < 15
            ? "Message must be atleast 15 characters long!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ form, charCount, errors });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;

    let nameError = null;

    if (errors.name.length > 0) {
      nameError = <span className={classes.FormError}>{errors.name}</span>;
    }

    let emailError = null;

    if (errors.email.length > 0) {
      emailError = <span className={classes.FormError}>{errors.email}</span>;
    }

    let messageError = null;

    if (errors.message.length > 0) {
      messageError = (
        <span className={classes.FormError}>{errors.message}</span>
      );
    }

    return (
      <div className={classes.ContactForm}>
        <form onSubmit={(event) => this.handleSubmit(event)} noValidate>
          <div className="form-group">
            <label>Your Name</label>
            <div className="input-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                maxLength={this.state.maxLength.name}
                value={this.state.form.name}
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {`${this.state.form.name.length}/${this.state.maxLength.name}`}
                </span>
              </div>
            </div>
            {nameError}
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <div className="input-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                maxLength={this.state.maxLength.email}
                value={this.state.form.email}
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {this.state.form.email.length}/{this.state.maxLength.email}
                </span>
              </div>
            </div>
            {emailError}
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
                value={this.state.form.message}
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  {this.state.form.message.length}/
                  {this.state.maxLength.message}
                </span>
              </div>
            </div>
            {messageError}
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
