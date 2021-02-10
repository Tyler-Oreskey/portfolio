import React from "react";

import SocialIcon from "./SocialIcon/SocialIcon";
import icons from "../../../displayData/socialIcons";

import classes from "./SocialIcons.module.css";

const SocialIcons = () => {
  const formattedIcons = icons.map((icon) => (
    <SocialIcon
      key={icon.name}
      destination={icon.destination}
      icon={icon.icon}
    />
  ));

  return <div className={classes.SocialIcons}>{formattedIcons}</div>;
};

export default SocialIcons;
