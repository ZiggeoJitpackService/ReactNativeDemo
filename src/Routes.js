import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './screens/Splash';
import Auth from './screens/auth/Auth';
import RecordingDetails from './screens/recordingDetails/RecordingDetails';

import { Drawer, MainDrawer } from './screens/main/Main';
import Routes from './Routes';
import { CommonSettings } from './screens/settings/CommonSettings';
import { CustomRecorder } from './screens/CustomRecorder';
import { CustomVideoPlayer } from './screens/CustomVideoPlayer';

const Stack = createStackNavigator();

export default {
  Splash: 'Splash',
  AuthStack: 'AuthStack',
  HomeStack: 'HomeStack',
  RecStack: 'RecStack',

  Auth: 'Auth',
  Drawer: 'Drawer',

  Recordings: 'Recordings',
  RecordingDetails: 'RecordingDetails',

  CommonSettings: 'CommonSettings',
  CustomVideo: 'CustomVideo',
  CustomCamera: 'CustomCamera',
};

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Routes.Auth} component={Auth} />
    </Stack.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >

      <Stack.Screen name={Routes.Drawer} component={MainDrawer} />
      <Stack.Screen name={Routes.RecordingDetails} component={RecordingDetails} />
      <Stack.Screen name={Routes.CustomVideo} component={CustomVideoPlayer} />
      <Stack.Screen name={Routes.CustomCamera} component={CustomRecorder} />
    </Stack.Navigator>
  )
}


export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={Routes.Splash} component={Splash} />
      <Stack.Screen name={Routes.AuthStack} component={AuthStack} />
      <Stack.Screen name={Routes.HomeStack} component={HomeStack} />
    </Stack.Navigator>
  )
}

