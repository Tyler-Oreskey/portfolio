import React from 'react';
import Config from "../../Config";
import Reaptcha from "reaptcha";

console.log(Config, 'reeee')

const Recaptcha = (props) => {
    return (
        <Reaptcha
            sitekey={Config.siteKey}
            ref={props.recaptchaRef}
            onVerify={props.verifyRecaptcha}
            onLoad={props.recaptchaOnLoad}
            theme="dark"
        />
    );
};

export default Recaptcha;



