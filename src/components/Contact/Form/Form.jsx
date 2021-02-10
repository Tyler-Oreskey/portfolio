import React from "react";

import Recaptcha from "../../../auth/Recaptcha/Recaptcha";
import ButtonHoverEffect from "../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";
import Spinner from "../../../UI/Spinner/Spinner";

import classes from "./Form.module.css";

const Form = (props) => {
  let buttonDisplay = (
    <ButtonHoverEffect buttonType="submit" buttonText="SUBMIT" />
  );

  if (props.loading) {
    buttonDisplay = <Spinner size="medium" />;
  }

  return (
    <form
      noValidate
      onSubmit={props.handleSubmit}
      className={classes.ContactForm}
    >
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name"
            maxLength={props.fieldRules.name.maxLength}
            value={props.fields.name}
            onChange={props.handleInputChange}
          />
          <span className="input-group-text">
            {`${props.fields.name.length}/${props.fieldRules.name.maxLength}`}
          </span>
        </div>
        <p>
          {props.errors.name
            ? `Name must be greater than ${props.fieldRules.name.minLength} characters!`
            : null}
        </p>
      </div>

      <div className="form-group">
        <div className="input-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your email"
            maxLength={props.fieldRules.email.maxLength}
            value={props.fields.email}
            onChange={props.handleInputChange}
          />
          <span className="input-group-text">
            {props.fields.email.length}/{props.fieldRules.email.maxLength}
          </span>
        </div>
        <p>{props.errors.email ? "Invalid email provided!" : null}</p>
      </div>

      <div className="form-group form-text-area">
        <div className="input-group">
          <textarea
            name="message"
            type="textarea"
            className="form-control"
            placeholder="Enter Message"
            rows="5"
            maxLength={props.fieldRules.message.maxLength}
            value={props.fields.message}
            onChange={props.handleInputChange}
          />
          <span className="input-group-text">
            {props.fields.message.length}/{props.fieldRules.message.maxLength}
          </span>
        </div>
        <p>
          {props.errors.message
            ? `Message must be greater than ${props.fieldRules.message.minLength} characters!`
            : null}
        </p>
      </div>
      <div className={classes.Recaptcha}>
        <Recaptcha
          recaptchaRef={props.recaptchaRef}
          verifyRecaptcha={props.verifyRecaptcha}
          recaptchaOnLoad={props.recaptchaOnLoad}
        />
        <p>
          {props.errors.recaptchaError ? "Please accept the reCAPTCHA!" : null}
        </p>
      </div>
      <div className={classes.FormSubmit}>{buttonDisplay}</div>
    </form>
  );
};

export default Form;
