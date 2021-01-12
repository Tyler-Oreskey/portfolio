import React, { Component } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawer from "../SideDrawer/SideDrawer";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

import classes from "./Toolbar.module.css";

class Toolbar extends Component {
  state = {
    showSideDrawer: false,
    routeID: null,
  };

  sideDrawerClosedHandler = () => this.setState({ showSideDrawer: false });

  sideDrawerToggleHandler = () =>
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));

  toggleRoute = (routeID) => {
    if (this.state.showSideDrawer) {
      this.setState((prevState) => ({
        showSideDrawer: !prevState.showSideDrawer,
        routeID,
      }));
    }

    this.props.setRoute(routeID);
  };

  render() {
    return (
      <header className={classes.Toolbar}>
        <DrawerToggle clicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          routes={this.props.routes}
          toggleRoute={this.toggleRoute}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <nav className={classes.DesktopOnly}>
          <NavigationItems
            routes={this.props.routes}
            toggleRoute={this.toggleRoute}
          />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
