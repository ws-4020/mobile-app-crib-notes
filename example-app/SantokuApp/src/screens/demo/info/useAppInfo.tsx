import * as Application from 'expo-application';
import {firebase} from 'framework/native';
import {Platform} from 'react-native';
import {Constants} from 'react-native-unimodules';

import {isExpoGo} from '../../../framework/utilities/environment';

const info = [
  {
    name: 'Application Name',
    value: Application.applicationName,
  },
  {
    name: Platform.select({android: 'Application ID', ios: 'Bundle Identifier'}),
    value: Application.applicationId,
  },
  {
    name: 'Application Version',
    value: Application.nativeApplicationVersion,
  },
  {
    name: 'Build Version',
    value: Application.nativeBuildVersion,
  },
  {
    name: 'Development mode',
    value: __DEV__ ? 'true' : 'false',
  },
  {
    name: 'Firebase App Name',
    value: firebase.app().name,
  },
  {
    name: 'Firebase Project ID',
    value: firebase.app().options.projectId,
  },
  {
    name: 'Firebase App ID',
    value: firebase.app().options.appId,
  },
  {
    name: 'Expo Go',
    value: isExpoGo ? 'true' : 'false',
  },
  {
    name: 'Expo Version',
    value: Constants.expoVersion,
  },
  {
    name: 'Expo Runtime Version',
    value: Constants.expoRuntimeVersion,
  },
  {
    name: 'Expo Execution Environment',
    value: Constants.executionEnvironment,
  },
  {
    name: 'Expo App Ownership',
    value: Constants.appOwnership,
  },
];

const infoKeyExtractor = (_: unknown, index: number) => index.toString();

export const useAppInfo = () => {
  return {info, infoKeyExtractor};
};
