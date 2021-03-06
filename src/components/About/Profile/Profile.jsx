import React from "react";

import HexagonWithImage from "../../../UI/Shapes/Hexagon/HexagonWithImage/HexagonWithImage";
import Carousel from "../Carousel/Carousel";
import profilePhoto from "../../../assets/images/photos/profile-photo.png";

import classes from "./Profile.module.css";

const Profile = () => (
  <div className={`${classes.Profile} col-lg-6`}>
    <HexagonWithImage image={profilePhoto} />
    <h3>Who am I?</h3>
    <Carousel />
  </div>
);

export default Profile;
