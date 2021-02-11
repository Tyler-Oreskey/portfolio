import React from "react";

import classes from "./InvertedTriangle.module.css";

const InvertedTriangle = (props) => {
  return (
    <section
      className={classes.InvertedTriangle}
      style={{ backgroundColor: props.triangleColor }}
    >
      <svg viewBox="0 0 100 102" preserveAspectRatio="none">
        <path d="M0 0 L50 90 L100 0 V100 H0" fill={props.fillcolor} />
        <path
          fill={props.triangleColor}
          stroke={props.outlineColor}
          strokeWidth={props.outlineWidth}
          d="M0 0 L50 90 L100 0"
        />
      </svg>
    </section>
  );
};

export default InvertedTriangle;
