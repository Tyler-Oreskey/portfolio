import React, { Component } from "react";
import { Element, Events, animateScroll } from "react-scroll";

// import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import routes from "./routes/routes";
import classes from "./App.module.css";

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");
  }
  scrollToTop() {
    animateScroll.scrollToTop();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    const scrollElements = routes.map((route, index) => (
      <Element
        key={index}
        name={route.label?.toLowerCase()}
        className={classes.element}
      >
        <route.component />
      </Element>
    ));
    return (
      <div>
        {/* <Toolbar routes={routes} /> */}
        {scrollElements}
      </div>
    );
  }
}

export default App;
