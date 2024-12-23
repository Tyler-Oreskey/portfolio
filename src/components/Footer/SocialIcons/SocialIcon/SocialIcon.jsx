import React from "react";

import classes from "./SocialIcon.module.css";

const SocialIcon = (props) => {
  // Determine whether the link should open in a new tab
  const isExternal = props.destination.startsWith("http");

  return (
    <div className={classes.SocialIcon}>
      <a
        href={props.destination}
        target="_blank"
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={props.name}
        className={classes.Link}
      >
        <img src={props.icon} alt={props.name} />
      </a>
    </div>
  );
};

export default SocialIcon;
