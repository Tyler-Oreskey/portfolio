import React from "react";
import Adjectives from "./Adjectives/Adjectives";
import Profile from "./Profile/Profile";
import BarChart from "./BarChart/BarChart";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.About}>
      <h1>ABOUT</h1>
      <div className="container">
        <div className={`${classes.AboutRow} row`}>
          <Adjectives />
        </div>
        <div className={`${classes.AboutRow} row`}>
          <Profile />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default About;
