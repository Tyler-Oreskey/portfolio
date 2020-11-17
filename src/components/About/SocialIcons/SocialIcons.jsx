import React from "react";

import SocialIcon from "./SocialIcon/SocialIcon";

import github from "../../../assets/images/icons/github.png";
import facebook from "../../../assets/images/icons/facebook.png";
import linkedin from "../../../assets/images/icons/linkedin.png";

import classes from "./SocialIcons.module.css";

const SocialIcons = () => {
  const icons = [
    {
      icon: github,
      destination: "https://github.com/Tyler-Oreskey",
      name: "GitHub",
    },
    {
      icon: linkedin,
      destination: "https://www.linkedin.com/in/tyler-oreskey/",
      name: "LinkedIn",
    },
    {
      icon: facebook,
      destination: "https://www.facebook.com/tyler.oreskey.5",
      name: "Facebook",
    },
  ];

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
