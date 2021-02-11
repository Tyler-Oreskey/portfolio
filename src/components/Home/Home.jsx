import React from "react";

import Particles from "../../UI/Particles/Particles";
import Greeting from "./Greeting/Greeting";
import Occupation from "./Occupation/Occupation";
import ButtonHoverEffectWithRightArrow from "../../UI/Buttons/ButtonHoverEffectWithRightArrow/ButtonHoverEffectWithRightArrow";

import classes from "./Home.module.css";

const Home = (props) => (
  <div className={`container-fluid ${classes.Home}`} ref={props.reference}>
    <Particles />
    <Greeting />
    <Occupation />
    <ButtonHoverEffectWithRightArrow
      clicked={props.click}
      buttonText="View My Work"
    />
  </div>
);

export default Home;
