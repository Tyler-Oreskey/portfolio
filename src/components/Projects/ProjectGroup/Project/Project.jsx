import React, { Component } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops";

import Front from "./Front/Front";
import Back from "./Back/Back";
import github from "../../../../assets/images/icons/github.png";

import classes from "./Project.module.css";

class Project extends Component {
  state = {
    flipped: false,
    hide: 0,
    show: 1,
  };

  handleToggleFlipped = (flipped) => this.setState({ flipped });

  render() {
    const { project, clickShowModal } = this.props;
    const { flipped, hide, show } = this.state;

    const front = <Front backgroundImage={project.image} />;

    const back = (
      <Back
        clickShowModal={clickShowModal}
        video={project.video}
        projectName={project.name}
        projectDescription={project.description}
        techs={project.techs}
        projectIcons={[
          {
            href: project.github,
            src: github,
            alt: "github",
          },
        ]}
      />
    );
    return (
      <div
        className={classes.Project}
        onMouseOver={() => this.handleToggleFlipped(true)}
        onMouseLeave={() => this.handleToggleFlipped(false)}
      >
        <Spring
          native
          to={{
            transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
          }}
        >
          {(props) => (
            <animated.div className={classes.Card} style={props}>
              <Transition
                native
                unique
                items={flipped}
                from={{ opacity: hide }}
                enter={{ opacity: show }}
                leave={{ opacity: hide }}
              >
                {(flipped) => ({ opacity }) => (
                  <animated.div
                    style={{
                      transform: `rotateX(${flipped ? 180 : 0}deg)`,
                      opacity: opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                    }}
                  >
                    {flipped ? back : front}
                  </animated.div>
                )}
              </Transition>
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Project;
