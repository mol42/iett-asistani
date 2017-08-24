import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';
import App from './App';
import configureStore from './redux/configureStore';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

function setup():React.Component {

  class Root extends Component {

    state = {
      store : null
    }

    constructor() {
      super();
      this.state.store = configureStore();
    }

    render() {
      return (
        <StyleProvider style={getTheme(platform)}>
          <Provider store={this.state.store}>
            <App />
          </Provider>
        </StyleProvider>
      );
    }
  }

  return Root;
}

export default setup;
