import React from "react";
import { AppRegistry, Image, TouchableOpacity } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";

const routes = ["Home"];

export default class Drawer extends React.PureComponent {
  
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>Ana İşlemler</Text>
          
        </Content>
      </Container>
    );
  }
}
