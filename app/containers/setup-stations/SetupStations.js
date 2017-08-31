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

import { checkIfBusPasses, updateActiveRegion } from "../../redux/iett/actions"
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

  componentDidMount() {
    this.props.updateActiveRegion({latitude : 40.9909, longitude : 29.07816})
  }

  componentReceivedProps(props) {

  }

  render() {
    let station = {
      geo : {lat : 40.9909, lng : 29.07816}
    }
    return (
      <Container style={styles.container}>
        <Content>
          <MapView
            style={{flex: 1, height: 500, borderWidth : 1, borderColor : "red"}}
            mapType={"satellite"}
            onRegionChange={(region) => {
              // console.log("region ->", region);
            }}
            initialRegion={{
              latitude: 40.9909,
              longitude: 29.07816,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}>
            {        
               this._renderStations()   
            }
          </MapView>
        </Content>
      </Container>
    );
  }

  _renderStations = () => {
    let result = [];

    if (this.props.iett.region.stationList.length == 0) {
      return null;
    }

    this.props.iett.region.stationList.forEach((station) => {
      let {geo} = station;
      result.push(
        (<MapView.Marker
          key={"key" + geo.lat}
          coordinate={{
            latitude: geo.lat * 1.0,
            longitude: geo.lng * 1.0
          }}
          title={station.name}
          description={station.location}
        />)
      )
    })
    return result;
  }
}

function bindAction(dispatch) {
  return {
    checkIfBusPasses : (busCode) => dispatch(checkIfBusPasses(busCode)),
    updateActiveRegion : (region) => dispatch(updateActiveRegion(region))
  };
}
const mapStateToProps = state => ({
  iett : state.iett
});

export default connect(mapStateToProps, bindAction)(SetupStations);
