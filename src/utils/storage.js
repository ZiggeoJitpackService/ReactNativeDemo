import AsyncStorage from '@react-native-community/async-storage';
import Ziggeo from 'react-native-ziggeo-library';
import {error, receiveRecs} from '../screens/recordings/actions';

const appTokenKey = 'appToken';
export const getAppToken = () => AsyncStorage.getItem(appTokenKey);
export const saveAppToken = user => AsyncStorage.setItem(appTokenKey, user);
export const removeAppToken = () => AsyncStorage.removeItem(appTokenKey);

const customVideoMode = 'customVideoMode';
export const getCustomVideoMode = () =>
  AsyncStorage.getItem(customVideoMode).then(value => {
    if (value == null) {
      value = false;
    }
    return JSON.parse(value);
  });
export const saveCustomVideoMode = value =>
  AsyncStorage.setItem(customVideoMode, JSON.stringify(value));

const customCameraMode = 'customCameraMode';
export const getCustomCameraMode = () =>
  AsyncStorage.getItem(customCameraMode).then(value => {
    if (value == null) {
      value = false;
    }
    return JSON.parse(value);
  });

export const saveCustomCameraMode = value =>
  AsyncStorage.setItem(customCameraMode, JSON.stringify(value));

const isBlurMode = 'isBlurMode';
export const getBlurMode = () =>
  AsyncStorage.getItem(isBlurMode).then(value => {
    if (value == null) {
      value = false;
    }
    return JSON.parse(value);
  });

export const saveBlurMode = value => {
  AsyncStorage.setItem(isBlurMode, JSON.stringify(value));
  Ziggeo.setBlurMode(value);
};
