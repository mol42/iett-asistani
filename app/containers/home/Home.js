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
                style={{flex:1, height: 40, marginBottom: 20, borderColor: '#f5f5f5', borderWidth: 1}}
                onChangeText={(text) => this.state.busCode = text}
              />
            </Row>
            <Row>
              <Col>
                <Row>
                  <Button onPress={this._onButtonClicked} style={{flex: 1}}><Text>Check</Text></Button>
                </Row>
                <Row>
                  <View>
                    <Text>Passes ? : {this.props.iett.busPasses ? "yes" : "no"}</Text>
                  </View>
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
