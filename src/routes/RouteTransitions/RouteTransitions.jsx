import React, { memo } from "react";

import { animated, useTransition } from "react-spring";
import { Switch } from "react-router-dom";
import AbsoluteWrapper from "../../hoc/AbsoluteWrapper/AbsoluteWrapper";

const RouteTransitions = memo((props) => {
  const { items, location, getRoutes, reverse } = props;
  const transition = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: `translate3d(${reverse ? "-100%" : "100%"},0,0)`,
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: `translate3d(${reverse ? "100%" : "-100%"},0,0)`,
    },
  });

  const transitionAnimation = transition.map(
    ({ item: location, props, key }) => (
      <animated.div style={props} key={key}>
        <AbsoluteWrapper>
          <Switch location={location}>
            {items.map((item) => getRoutes(item))}
          </Switch>
        </AbsoluteWrapper>
      </animated.div>
    )
  );

  return transitionAnimation;
});

export default RouteTransitions;
