import {StackActions} from '@react-navigation/core';
import {NavigationContainerRef} from '@react-navigation/native';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import {pathWithPrefix} from './pathWithPrefix';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchPath = (parsedUrl: ParsedURL) => parsedUrl.path?.startsWith(pathWithPrefix('demo/app-info'));
const handle = (navigation: NavigationContainerRef<RootStackParamList>) => {
  navigation.dispatch(StackActions.push('DemoStackNav', {screen: 'AppInfo'}));
};
const mainTabNavInitialRouteName: keyof MainTabParamList = 'AccountStackNav';
export const demoAppInfoDeepLink: DeepLink = {
  matchPath,
  handle,
  mainTabNavInitialRouteName,
};
