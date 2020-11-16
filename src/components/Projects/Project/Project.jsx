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
    <div onClick={() => setFlipped(!flipped)} className={classes.ProjectCard}>
      <div className={classes.ProjectCardInner}>
        <animated.div
          className={`card ${classes.Front}`}
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          <img src={props.image} alt="img" />
        </animated.div>
        <animated.div
          className={`card ${classes.Back}`}
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <p>{props.description}</p>
        </animated.div>
      </div>
    </div>
  );
};

export default Project;
