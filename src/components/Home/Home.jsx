import React from "react";

import classes from "./Home.module.css";

import Particles from "../../UI/Particles/Particles";
import Greeting from "./Greeting/Greeting";
import Occupation from "./Occupation/Occupation";
import ButtonHoverEffectWithRightArrow from "../../UI/Buttons/ButtonHoverEffectWithRightArrow/ButtonHoverEffectWithRightArrow";

const Home = () => {
  return (
    <div className={`container-fluid ${classes.Home}`}>
      <Particles />
      <Greeting />
      <Occupation />
      <ButtonHoverEffectWithRightArrow buttonText="View My Work" />
    </div>
  );
};

export default Home;
