import React from "react";

import Footnote from "./FootNote/Footnote";
import SocialIcons from "./SocialIcons/SocialIcons";
import ToBeginning from "./ToBeginning/ToBeginning";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <ToBeginning />
      <SocialIcons />
      <Footnote />
    </div>
  );
};

export default Footer;
