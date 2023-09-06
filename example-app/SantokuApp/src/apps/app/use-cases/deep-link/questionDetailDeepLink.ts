import {StackActions} from '@react-navigation/core';
import {NavigationContainerRef} from '@react-navigation/native';
import {ApplicationError} from 'bases/core/errors/ApplicationError';
import {yup} from 'bases/validator';
import type {ParsedURL} from 'expo-linking';

import type {DeepLink} from './deepLinks';
import {pathWithPrefix} from './pathWithPrefix';
import type {MainTabParamList, RootStackParamList} from '../../navigators/types';

const matchedPath = pathWithPrefix('questions/');
const matchPath = (parsedUrl: ParsedURL) => parsedUrl.path?.startsWith(matchedPath);

const validationScheme = yup.object().shape({
  questionId: yup.number().required(),
});
const handle = (navigation: NavigationContainerRef<RootStackParamList>, parsedUrl: ParsedURL) => {
  const {path} = parsedUrl;
  // パスパラメータの取得
  const questionId = path?.split(matchedPath)[1];
  if (!validationScheme.isValidSync({questionId})) {
    throw new ApplicationError(`Invalid questionId. parsedUrl=${JSON.stringify(parsedUrl)}`);
  }
  navigation.dispatch(StackActions.push('AuthenticatedStackNav', {screen: 'QuestionDetail', params: {questionId}}));
};
const mainTabNavInitialRouteName: keyof MainTabParamList = 'HomeStackNav';
export const questionDetailDeepLink: DeepLink = {
  matchPath,
  handle,
  mainTabNavInitialRouteName,
};
