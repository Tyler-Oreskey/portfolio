import React from "react";
import Carousel from "./Carousel/Carousel";

import classes from "./Introduction.module.css";
import code from "../../assets/images/code.png";

const Introduction = () => {
  return (
    <div className={classes.Introduction}>
      <h1>Hello, I'm</h1>
      <h2>Tyler Oreskey</h2>
      <h3>
        <img src={code} alt="</>" />
        Full Stack Web Developer
      </h3>
      <Carousel />
    </div>
  );
};

export default Introduction;
