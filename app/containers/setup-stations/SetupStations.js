import React, { Component } from "react";
import { TouchableOpacity, TextInput, View, Image } from "react-native";
import { connect } from "react-redux";
import Drawer from "../drawer/Drawer";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Col
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";
import MapView from 'react-native-maps';

import { checkIfBusPasses } from "../../redux/iett/actions"
import styles from "./styles";

class SetupStations extends Component {
  
  state = {
    busCode : null
  }

  static navigationOptions = {
    header: null
  };

  static propTypes = {
    name: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    openDrawer: React.PropTypes.func
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <MapView
            style={{flex: 1, height: 500, borderWidth : 1, borderColor : "red"}}
            mapType={"satellite"}
            initialRegion={{
              latitude: 40.9909,
              longitude: 29.07816,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <MapView.Marker
              coordinate={{
                latitude: 40.9909,
                longitude: 29.07816
              }}
              title={"Test"}
              description={"Test"}
            />
          </MapView>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    checkIfBusPasses : (busCode) => dispatch(checkIfBusPasses(busCode))
  };
}
const mapStateToProps = state => ({
  iett : state.iett
});

export default connect(mapStateToProps, bindAction)(SetupStations);
