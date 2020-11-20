import React from "react";
import Carousel from "./Carousel/Carousel";
import SocialIcons from "./SocialIcons/SocialIcons";

import code from "../../assets/images/icons/code.png";
import classes from "./About.module.css";

import about from "../../assets/images/me/about.jpg";

const About = () => {
  return (
    <div className={`${classes.About} container`}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={classes.Col1}>
            <h1>Hello, I'm</h1>
            <h2>Tyler Oreskey</h2>
            <h3>
              <img src={code} alt="</>" />
            Full Stack Web Developer
          </h3>
            <SocialIcons />
            <Carousel />
          </div>
        </div>
        <div className="col-12 order-first order-md-0 col-md-6">
          <div className={classes.Col2}>
            <img className={classes.Me} src={about} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
