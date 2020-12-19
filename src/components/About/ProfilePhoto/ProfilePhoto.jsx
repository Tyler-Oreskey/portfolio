import React from "react";

import profilePhoto from "../../../assets/images/me/profile-photo.png";

import classes from "./ProfilePhoto.module.css";

const ProfilePhoto = () => <img className={classes.ProfilePhoto} src={profilePhoto} alt="profile photo" />;

export default ProfilePhoto;