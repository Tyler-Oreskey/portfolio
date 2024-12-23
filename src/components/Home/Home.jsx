import React from "react";

import ButtonHoverEffectWithRightArrow from "../../UI/Buttons/ButtonHoverEffectWithRightArrow/ButtonHoverEffectWithRightArrow";
import ButtonHoverEffect from "../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";
import resume from "../../assets/files/resume.pdf";
import codeIcon from "../../assets/images/icons/code.png";

import classes from "./Home.module.css";

export default function Home(props) {
  return (
    <div className={`container-fluid ${classes.Home}`} ref={props.reference}>
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
}

function Greeting() {
  return (
    <div className={classes.Greeting}>
      <p>Hello, I'm </p>
      <span>Tyler Oreskey</span>
    </div>
  );
}

function Occupation() {
  return (
    <div className={classes.Occupation}>
      <p>
        <img src={codeIcon} alt="</>" /> Software Engineer
      </p>
    </div>
  );
}

function Resume() {
  const initiateDownload = async () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ButtonHoverEffect
        clicked={initiateDownload}
        buttonText="Resume"
        textColor="white"
      />
    </div>
  );
}
