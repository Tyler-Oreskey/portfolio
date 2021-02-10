import React, { Component } from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawer from "../SideDrawer/SideDrawer";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.css";

class Toolbar extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => this.setState({ showSideDrawer: false });

  sideDrawerToggleHandler = () =>
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));

  render() {
    return (
      <header className={classes.Toolbar}>
        <DrawerToggle clicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          routes={this.props.routes}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <nav className={classes.DesktopOnly}>
          <NavigationItems routes={this.props.routes} />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
