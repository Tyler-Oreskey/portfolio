import React from "react";

import InvertedTriangle from "../../UI/Shapes/Triangle/InvertedTriangle";
import SocialIcons from "../Footer/SocialIcons/SocialIcons";

import classes from "./Contact.module.css";

export default function Contact(props) {
  return (
    <>
      <InvertedTriangle
        fillcolor="#020b16"
        triangleColor="#f5f5f5"
        outlineColor="#04c2c9"
        outlineWidth={3}
      />
      <div className={classes.Contact} ref={props.reference}>
        <h1>CONTACT</h1>
        <p className={classes.ContactSubText}>
          Have a question or want to work together?
        </p>
        <SocialIcons />
      </div>
    </>
  );
}
