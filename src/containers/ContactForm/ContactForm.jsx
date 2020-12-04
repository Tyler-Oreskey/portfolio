import React, { Component } from "react";
import axios from '../../axios';

import RequestHandler from '../../hoc/RequestHandler/RequestHandler';
import Spinner from '../../UI/Spinner/Spinner';
import classes from "./ContactForm.module.css";
import Toast from '../../UI/Toast/Toast';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (form) => {
  const errors = {};
  if (form.name.length < 3) {
    errors.name = "Name must be at least 3 characters long!";
  }

  if (!validEmailRegex.test(form.email)) {
    errors.email = "Email is not valid!";
  }

  if (form.message.length < 15) {
    errors.message = "Message must be at least 15 characters long!";
  }
  return errors;
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
    errors: {},
    loading: false,
    success: false
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    const form = { ...this.state.form };
    form[name] = value;
    this.setState({ form });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm(this.state.form);

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    } else {
      this.setState({ errors: {} });
      try {
        this.setState({ loading: true });
        const res = await axios.post('/email/sendEmail', this.state.form);
        if (res.status === 200) {
          this.handleSuccessMessage(true);
        }

      } catch (error) {
        // handled by request handler hoc
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  handleSuccessMessage = (value) => {
    this.setState({ success: value });
  }

  render() {
    const { errors } = this.state;

    let nameError = null;

    if (errors.name?.length > 0) {
      nameError = <p className={classes.FormError}>{errors.name}</p>;
    }

    let emailError = null;

    if (errors.email?.length > 0) {
      emailError = <p className={classes.FormError}>{errors.email}</p>;
    }

    let messageError = null;

    if (errors.message?.length > 0) {
      messageError = <p className={classes.FormError}>{errors.message}</p>;
    }

    let submission = null;

    if (this.state.loading) {
      submission = <Spinner size="medium" />;
    } else {
      submission = (
        <button
          type="submit"
          className="btn btn-outline-light"
          disabled={this.state.success}>
          SUBMIT
        </button>
      );
    }

    let successMessage = null;

    if (this.state.success) {
      successMessage = (
        <Toast
          message="Sent!"
          type="success"
          toggleSuccessMessage={this.handleSuccessMessage}
        />
      );
    }

    return (
      <Auxiliary>
        {successMessage}
        <div className={`col-md-6 ${classes.ContactForm}`}>
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
            <div className={classes.FormSubmit}>
              {submission}
            </div>
          </form>
        </div>
      </Auxiliary>
    );
  }
}

export default RequestHandler(ContactForm, axios);
