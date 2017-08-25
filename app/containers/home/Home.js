import React, { Component } from "react";
import { TouchableOpacity, TextInput, View, Image } from "react-native";
import { connect } from "react-redux";
import Drawer from "../drawer/Drawer";
import { DrawerNavigator, NavigationActions } from "react-navigation";
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

import { checkIfBusPasses } from "../../redux/iett/actions"
import styles from "./styles";

class Home extends Component {
  
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
          <Grid style={styles.mt}>
            <Row style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require("../../../images/iett_logo.png")} style={{width: 250, height: 307, alignItems : "center"}}/>
            </Row>
            <Row>
              <TextInput
                placeholder={"Enter bus code"}
                style={{flex:1, padding: 5, height: 40, marginBottom: 20, borderColor: '#ccc', borderWidth: 1, fontFamily : "Oswald-Regular"}}
                onChangeText={(text) => this.state.busCode = text}
              />
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col size={8}>
                    <Text style={{flex: 1, fontSize : 20, fontWeight : "bold", fontFamily : "Oswald-Regular"}}>BAHÇELER</Text>
                    <Text style={{flex: 1, fontSize : 20, color : "gray", fontFamily : "Oswald-Regular"}}>KADIKÖY</Text>
                  </Col>
                  <Col size={2} style={{flexDirection : "row", justifyContent: "flex-end"}}>
                    <Button onPress={this._onButtonClicked}><Text>X</Text></Button>
                  </Col>
                </Row>
                <Row>
                  <Button onPress={this._onButtonClicked} style={{flex: 1, marginTop: 5, marginBottom: 5}}><Text style={{fontFamily : "Oswald-Regular"}}>GEÇER Mİ ?</Text></Button>
                </Row>
                <Row style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontFamily : "Oswald-Regular"}}>{this.props.iett.busPasses ? "GEÇER" : "GEÇMEZ"}</Text>
                </Row>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }

  _onButtonClicked = () => {
    if (this.state.busCode == null || this.state.busCode == "") {
      alert("Please enter a bus name");
      return;
    }
    this.props.checkIfBusPasses(this.state.busCode);
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

export default connect(mapStateToProps, bindAction)(Home);
