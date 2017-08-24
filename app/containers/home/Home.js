import React, { Component } from "react";
import { TouchableOpacity, TextInput, View } from "react-native";
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
  Right
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { checkIfBusPasses } from "../../redux/iett/actions"
import styles from "./styles";

class Home extends Component {
  
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
        <Header>
          <Left>

            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Grid style={styles.mt}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.state.text = text}
            />
            <Button onPress={this._onButtonClicked}><Text>Check</Text></Button>
            <View>
              <Text>Passes ? : {this.props.iett.busPasses ? "yes" : "no"}</Text>
            </View>
          </Grid>
        </Content>
      </Container>
    );
  }

  _onButtonClicked = () => {
    this.props.checkIfBusPasses();
  }
}

function bindAction(dispatch) {
  return {
    checkIfBusPasses : () => dispatch(checkIfBusPasses())
  };
}
const mapStateToProps = state => ({
  iett : state.iett
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);

const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger }
  },
  {
    contentComponent: props => <Drawer {...props} />
  }
);
const DrawerNav = null;

DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};

export default DrawNav;
