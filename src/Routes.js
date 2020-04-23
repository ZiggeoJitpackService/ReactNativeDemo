import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './screens/Splash';
import Auth from './screens/auth/Auth';
import Recordings from './screens/recordings/Recordings';

import Header from './components/Header';
import {Drawer} from './screens/main/Main';
import Routes from './Routes';
import RecordingDetails from './screens/recordingDetails/RecordingDetails';

export default {
  Splash: 'Splash',
  AuthStack: 'AuthStack',
  HomeStack: 'HomeStack',
  RecStack: 'RecStack',

  Auth: 'Auth',
  Drawer: 'Drawer',

  Recordings: 'Recordings',
  RecordingDetails: 'RecordingDetails',

  Settings: 'Settings',
};

const defaultHeaderObject = {
  header: props => <Header scene={props.scene} />,
};

const createDefaultStackNavigator = (screensObject, customOptions) =>
  createStackNavigator(screensObject, {
    defaultNavigationOptions: {...defaultHeaderObject},
    headerMode: 'screen',
    ...customOptions,
  });

const AuthStack = createDefaultStackNavigator({
  [Routes.Auth]: {screen: Auth},
});

const HomeStack = createStackNavigator({
  [Routes.Drawer]: {screen: Drawer},
});

const RecStack = createStackNavigator({
  [Routes.Recordings]: {screen: Recordings},
  [Routes.RecordingDetails]: {screen: RecordingDetails},
});

export const RootStack = createAppContainer(
  createSwitchNavigator({
    [Routes.Splash]: {screen: Splash},
    [Routes.AuthStack]: {screen: AuthStack},
    [Routes.HomeStack]: {screen: HomeStack},
    [Routes.RecStack]: {screen: RecStack},
  }),
);
