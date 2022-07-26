import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {ProfileRegistrationPage} from 'features/account/components/ProfileRegistrationPage';
import React from 'react';

const ScreenName = 'ProfileRegistration';

const Screen: React.FC<NativeStackScreenProps<RootStackParamList, typeof ScreenName>> = ({route}) => {
  return <ProfileRegistrationPage termsAgreementStatus={route.params} />;
};

export const ProfileRegistrationScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('プロフィール登録'),
    animation: 'slide_from_bottom',
  },
};
