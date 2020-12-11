import React from 'react';
import Config from "../../Config";
import Reaptcha from "reaptcha";

const Recaptcha = (props) => {
    return (
        <Reaptcha
            sitekey={Config.sitekey}
            ref={props.recaptchaRef}
            onVerify={props.verifyRecaptcha}
            onLoad={props.recaptchaOnLoad}
            theme="dark"
        />
    );
};

export default Recaptcha;



