import React from "react";
import Carousel from "./Carousel/Carousel";
import SocialIcons from "./SocialIcons/SocialIcons";

import classes from "./Introduction.module.css";
import code from "../../assets/images/icons/code.png";

const Introduction = () => {
  return (
    <div className={`${classes.Introduction} container`}>
      <div className="row">
        <div className="col">
          <h1>Hello, I'm</h1>
          <h2>Tyler Oreskey</h2>
          <h3>
            <img src={code} alt="</>" />
            Full Stack Web Developer
          </h3>
          <SocialIcons />
          <Carousel />
        </div>
        <div className="col">
          <h1>Picture Here!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
