import React, { Component } from "react";
import Home from "../containers/home/Home";
import { DrawerNavigator } from "react-navigation";
import Drawer from "../containers/drawer/Drawer";
export default (DrawNav = DrawerNavigator(
  {
    Home: { screen: Home }
  },
  {
    contentComponent: props => <Drawer {...props} />
  }
));
