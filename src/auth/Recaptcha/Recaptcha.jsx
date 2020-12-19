import React from "react";
import config from "../../config";
import Reaptcha from "reaptcha";

const Recaptcha = (props) => {
  return (
    <Reaptcha
      sitekey={config.siteKey}
      ref={props.recaptchaRef}
      onVerify={props.verifyRecaptcha}
      onLoad={props.recaptchaOnLoad}
      theme="dark"
    />
  );
};

export default Recaptcha;
