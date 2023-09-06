import {NavigationContainerRef} from '@react-navigation/native';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import {pathWithPrefix} from './pathWithPrefix';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchPath = (parsedUrl: ParsedURL) => parsedUrl.path?.startsWith(pathWithPrefix('home'));
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
