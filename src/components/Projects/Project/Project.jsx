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
        <p>{props.description}</p>
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
