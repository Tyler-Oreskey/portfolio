import React from "react";

import Footnote from "./FootNote/Footnote";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

import classes from "./Footer.module.css";

const Footer = (props) => (
  <div className={classes.Footer}>
    <ScrollToTop clicked={props.click} />
    <Footnote />
  </div>
);

export default Footer;
