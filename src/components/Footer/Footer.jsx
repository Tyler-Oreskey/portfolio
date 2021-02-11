import React from "react";

import Footnote from "./FootNote/Footnote";
import SocialIcons from "./SocialIcons/SocialIcons";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

import classes from "./Footer.module.css";

const Footer = (props) => (
  <div className={classes.Footer}>
    <ScrollToTop clicked={props.click} />
    <SocialIcons />
    <Footnote />
  </div>
);

export default Footer;
