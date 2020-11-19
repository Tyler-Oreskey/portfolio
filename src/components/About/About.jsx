import React from "react";
import Carousel from "./Carousel/Carousel";
import SocialIcons from "./SocialIcons/SocialIcons";

import code from "../../assets/images/icons/code.png";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={`${classes.About} container`}>
      <div className="row">
        <div className="col-12 col-md-7">
          <h1>Hello, I'm</h1>
          <h2>Tyler Oreskey</h2>
          <h3>
            <img src={code} alt="</>" />
            Full Stack Web Developer
          </h3>
          <SocialIcons />
          <Carousel />
        </div>
        <div className="col-12 order-first order-md-0 col-md-5">
          <h1>Picture Here!!!</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
