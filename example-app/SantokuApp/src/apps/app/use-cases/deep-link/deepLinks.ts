import {NavigationContainerRef} from '@react-navigation/native';
import {ParsedURL} from 'expo-linking';

import {demoAppInfoDeepLink} from './demoAppInfoDeepLink';
import {questionDetailDeepLink} from './questionDetailDeepLink';
import {MainTabParamList, RootStackParamList} from '../../navigators/types';

export type DeepLink = {
  matchPath: (parsedUrl: ParsedURL) => boolean | undefined;
  handle: (navigation: NavigationContainerRef<RootStackParamList>, parsedUrl: ParsedURL) => void;
  mainTabNavInitialRouteName: keyof MainTabParamList;
};
export const deepLinks = [questionDetailDeepLink, demoAppInfoDeepLink];
