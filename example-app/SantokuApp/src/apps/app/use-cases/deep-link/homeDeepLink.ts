import {NavigationContainerRef} from '@react-navigation/native';
import {AppConfig} from 'bases/core/configs/AppConfig';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchedPath = AppConfig.deepLinkPathPrefix ? `${AppConfig.deepLinkPathPrefix}/home` : 'home';
const matchPath = (parsedUrl: ParsedURL) => parsedUrl.path?.startsWith(matchedPath);
const handle = (navigation: NavigationContainerRef<RootStackParamList>) => {
  navigation.navigate('AuthenticatedStackNav', {
    screen: 'MainTabNav',
    params: {screen: 'HomeStackNav', params: {screen: 'Home'}},
  });
};
const mainTabNavInitialRouteName: keyof MainTabParamList = 'HomeStackNav';
export const homeDeepLink: DeepLink = {
  matchPath,
  handle,
  mainTabNavInitialRouteName,
};
