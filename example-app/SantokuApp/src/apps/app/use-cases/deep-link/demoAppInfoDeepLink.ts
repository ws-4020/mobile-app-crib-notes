import {StackActions} from '@react-navigation/core';
import {NavigationContainerRef} from '@react-navigation/native';
import {AppConfig} from 'bases/core/configs/AppConfig';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchedPath = AppConfig.deepLinkPathPrefix ? `${AppConfig.deepLinkPathPrefix}/demo/app-info` : 'demo/app-info';
const matchPath = (parsedUrl: ParsedURL) => parsedUrl.path?.startsWith(matchedPath);
const handle = (navigation: NavigationContainerRef<RootStackParamList>) => {
  navigation.dispatch(StackActions.push('DemoStackNav', {screen: 'AppInfo'}));
};
const mainTabNavInitialRouteName: keyof MainTabParamList = 'AccountStackNav';
export const demoAppInfoDeepLink: DeepLink = {
  matchPath,
  handle,
  mainTabNavInitialRouteName,
};
