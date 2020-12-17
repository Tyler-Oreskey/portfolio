import React, { Component } from "react";
import { Spring, Transition, animated } from "react-spring/renderprops";

import Front from "./Front/Front";
import Back from "./Back/Back";
import youtube from "../../../assets/images/icons/youtube.png";
import github from "../../../assets/images/icons/github.png";

import classes from "./Project.module.css";

class Project extends Component {
  state = {
    flipped: false,
    hide: 0,
    show: 1,
  };

  click = () => this.setState((state) => ({ flipped: !state.flipped }));

  flipHandler = () => this.setState((prevState) => ({ flipped: !prevState.flipped }));

  render() {
    const { flipped } = this.state;

    const front = (
      <Front
        backgroundImage={this.props.image}
        projectName={this.props.name}
        flip={this.flipHandler} />
    );

    const back = (
      <Back
        projectName={this.props.name}
        projectDescription={this.props.description}
        flip={this.flipHandler}
        techs={this.props.techs}
        projectIcons={[
          {
            href: this.props.github,
            src: github,
            alt: "github"
          },
          {
            href: this.props.video,
            src: youtube,
            alt: "youtube"
          }
        ]} />
    );

    return (
      <Spring
        native
        to={{ transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)` }} >
        {(props) => (
          <animated.div className={classes.Card} style={props}>
            <Transition
              native
              unique
              items={flipped}
              from={{ opacity: this.state.hide }}
              enter={{ opacity: this.state.show }}
              leave={{ opacity: this.state.hide }}>
              {(flipped) => ({ opacity }) => (
                <animated.div
                  style={{
                    transform: `rotateX(${flipped ? 180 : 0}deg)`,
                    opacity: opacity.interpolate({
                      range: [0, 0.5, 1],
                      output: [0, 0, 1],
                    }),
                  }}>
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
