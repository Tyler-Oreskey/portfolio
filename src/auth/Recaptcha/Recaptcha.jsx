import React from 'react';

import Reaptcha from "reaptcha";

const Recaptcha = (props) => {
    return (
        <Reaptcha
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={props.recaptchaRef}
            onVerify={props.verifyRecaptcha}
            onLoad={props.recaptchaOnLoad}
            theme="dark"
        />
    );
};

export default Recaptcha;



