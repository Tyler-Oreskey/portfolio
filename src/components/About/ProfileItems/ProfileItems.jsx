import React from "react";

import codeIcon from "../../../assets/images/icons/code.png";

import classes from "./ProfileItems.module.css";

const ProfileItems = () => {
    return (
        <div className={classes.ProfileItems}>
            <div>
                <h1>Hello, I'm</h1>
                <h2>Tyler Oreskey</h2>
                <img src={codeIcon} className={classes.CodeIcon} alt="</>" />
                <span>Full Stack Web Developer</span>
            </div>
        </div >
    )
};

export default ProfileItems;