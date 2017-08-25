import React, { Component } from "react";
import { SCREEN_MAP } from "./screens";
import { StackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";

export default (StackNav = StackNavigator(SCREEN_MAP));
