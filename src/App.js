import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './Routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <RootStack />
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App;
