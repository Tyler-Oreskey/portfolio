import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import classes from "./Project.module.css";

const Project = (props) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  let formattedTechs = props.techs
    .map((tech, index) => {
      if (index === props.techs.length - 1) {
        return `and ${tech}.`;
      }
      return tech;
    })
    .join(", ");

  formattedTechs = formattedTechs.replace(/,([^,]*)$/, "$1");

  return (
    <div className={classes.ProjectCard}>
      <animated.div
        className={classes.Card}
        id={classes.Back}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div>
          <h3>Techs Used:</h3>
          <p>{formattedTechs}</p>
        </div>
        <button
          onClick={() => setFlipped(!flipped)}
          className={classes.FlipText}
        >
          PHOTO
        </button>
      </animated.div>
      <animated.div
        className={classes.Card}
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{props.name}</h1>
        <button
          onClick={() => setFlipped(!flipped)}
          className={classes.FlipText}
        >
          DESCRIPTION
        </button>
      </animated.div>
    </div>
  );
};

export default Project;
