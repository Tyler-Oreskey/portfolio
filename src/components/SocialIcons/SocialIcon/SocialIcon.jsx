import React from "react";

import classes from "./SocialIcon.module.css";

const SocialIcon = (props) => {
  return (
    <a
      className={classes.SocialIcon}
      href={props.destination}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={props.icon} alt={props.name} />
    </a>
  );
};

export default SocialIcon;
