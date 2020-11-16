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

  let flipText = null;

  if (flipped) {
    flipText = "View Photo";
  } else {
    flipText = "View Description";
  }

  return (
    <div onClick={() => setFlipped(!flipped)} className={classes.ProjectCard}>
      <animated.div
        className={`card ${classes.Front}`}
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{props.name}</h1>
        <div className={classes.FlipText}>{flipText}</div>
      </animated.div>
      <animated.div
        className={`card ${classes.Back}`}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <p>{props.description}</p>
        <div className={classes.FlipText}>{flipText}</div>
      </animated.div>
    </div>
  );
};

export default Project;
