import React, { Component, createRef } from "react";

import Form from "./Form/Form";
import classes from "./Contact.module.css";
import RequestHandler from "../../hoc/RequestHandler/RequestHandler";
import axios from "../../axios";

const validEmailRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Contact extends Component {
  state = {
    fields: { name: "", email: "", message: "" },
    errors: { name: false, email: false, message: false },
    fieldRules: {
      name: { minLength: 3, maxLength: 50 },
      email: { validateEmail: true, maxLength: 50 },
      message: { minLength: 15, maxLength: 500 },
    },
    recapchaReady: false,
    recaptchaToken: null,
    loading: false,
    recaptchaRef: createRef(null),
  };

  handleInputChange = (event) => {
    const { value, name } = event.target;
    const fields = { ...this.state.fields };
    fields[name] = value;
    const errors = this.handleErrorsOnChange({ ...this.state.errors }, event);
    this.setState({ fields, errors });
  };

  handleErrorsOnChange = (errors, event) => {
    const { value, name, type } = event.target;
    if (value.length <= this.state.fieldRules[name].minLength) {
      errors[name] = true;
    } else if (
      type === "email" &&
      this.state.fieldRules[name].validateEmail &&
      !validEmailRegex.test(value)
    ) {
      errors[name] = true;
    } else {
      errors[name] = false;
    }
    return errors;
  };

  handleErrorsOnSubmit = () => {
    const errors = {};
    for (const field in this.state.fields) {
      if (
        this.state.fields[field].length <=
        this.state.fieldRules[field].minLength
      ) {
        errors[field] = true;
      }

      if (
        field === "email" &&
        !validEmailRegex.test(this.state.fields[field])
      ) {
        errors[field] = true;
      }
    }

    if (!this.state.recaptchaToken) {
      errors.recaptchaError = true;
    }
    this.setState({ errors });
  };

  recaptchaOnLoad = () => this.setState({ recapchaReady: true });

  verifyRecaptcha = (captchaResponse) =>
    this.setState({ recaptchaToken: captchaResponse });

  resetValues = () => {
    this.state.recaptchaRef.current.reset();
    const fields = { ...this.state.fields };
    for (const key in fields) {
      fields[key] = "";
    }
    this.setState({ fields });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await this.handleErrorsOnSubmit();

    if (Object.keys(this.state.errors).length > 0) {
      return null;
    }

    const body = {
      ...this.state.fields,
      recaptchaToken: this.state.recaptchaToken,
    };

    try {
      this.setState({ loading: true });
      const res = await axios.post("/email/sendEmail", { ...body });
      if (res.status === 200) {
        this.resetValues();
      }
    } catch (error) {
      // handled by req handler hoc
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className={classes.Contact}>
        <div className="container">
          <div className="row">
            <div className={`${classes.FormColumn} col-md-9`}>
              <Form
                fields={this.state.fields}
                errors={this.state.errors}
                fieldRules={this.state.fieldRules}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                verifyRecaptcha={this.verifyRecaptcha}
                recaptchaOnLoad={this.recaptchaOnLoad}
                recaptchaRef={this.state.recaptchaRef}
                loading={this.state.loading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestHandler(Contact, axios);
