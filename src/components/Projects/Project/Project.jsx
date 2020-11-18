import React, { Component } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops";

import youtube from "../../../assets/images/icons/youtube.png";
import github from "../../../assets/images/icons/github.png";

import classes from "./Project.module.css";

const hide = { opacity: 0 };
const show = { opacity: 1 };
class Project extends Component {
  state = { flipped: false };

  click = () => this.setState((state) => ({ flipped: !state.flipped }));

  render() {
    const { flipped } = this.state;
    let formattedTechs = this.props.techs
      .map((tech, index) => {
        if (index === this.props.techs.length - 1) {
          return `and ${tech}.`;
        }
        return tech;
      })
      .join(", ");

    formattedTechs = formattedTechs.replace(/,([^,]*)$/, "$1");

    const front = (
      <div
        className={classes.Front}
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <h1>{this.props.name}</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ flipped: !prevState.flipped }))
          }
          className={classes.FlipText}
        >
          BACK
        </button>
      </div>
    );

    const back = (
      <div className={classes.Back}>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <div>
          <h3>Techs Used:</h3>
          <p>{formattedTechs}</p>
        </div>
        <div className={classes.CardIcons}>
          <a href={this.props.github} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" />
          </a>
          <a href={this.props.video} target="_blank" rel="noopener noreferrer">
            <img src={youtube} alt="youtube" />
          </a>
        </div>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              flipped: !prevState.flipped,
            }))
          }
          className={classes.FlipText}
        >
          FRONT
        </button>
      </div>
    );
    return (
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
              from={hide}
              enter={show}
              leave={hide}
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
    );
  }
}
export default Project;
