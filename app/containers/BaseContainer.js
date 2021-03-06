import React, { Component } from "react";

export default class BaseContainer extends Component {

    constructor(props) {
        super(props);
    }

    navigate(screenInfo) {
        this.props.navigator.push({
            screen : screenInfo.name
        });
    }
}