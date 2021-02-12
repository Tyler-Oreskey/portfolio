import React from "react";

import Particles from "../../UI/Particles/Particles";
import Greeting from "./Greeting/Greeting";
import Occupation from "./Occupation/Occupation";
import ButtonHoverEffectWithRightArrow from "../../UI/Buttons/ButtonHoverEffectWithRightArrow/ButtonHoverEffectWithRightArrow";
import Resume from "./Resume/Resume";

import classes from "./Home.module.css";

const Home = (props) => (
  <div className={`container-fluid ${classes.Home}`} ref={props.reference}>
    <Particles />
    <Greeting />
    <Occupation />
    <div className={classes.HomeButtonRows}>
      <div className={classes.HomeButton}>
        <ButtonHoverEffectWithRightArrow
          clicked={props.click}
          buttonText="View My Work"
        />
      </div>
      <div className={classes.HomeButton}>
        <Resume />
      </div>
    </div>
  </div>
);

export default Home;
