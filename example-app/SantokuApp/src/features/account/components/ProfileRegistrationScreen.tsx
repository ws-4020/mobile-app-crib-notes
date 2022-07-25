import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {FilledButton} from 'bases/ui/components/button';
import {TextInput} from 'bases/ui/components/input';
import {Spacer} from 'bases/ui/components/spacer/Spacer';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useClearNicknameUseCase} from '../hooks/useClearNicknameUseCase';
import {useProfileRegistrationForm} from '../hooks/useProfileRegistrationForm';
import {useSignupUseCase} from '../hooks/useSignupUseCase';

const ScreenName = 'ProfileRegistration';

const Screen: React.FC<NativeStackScreenProps<RootStackParamList, typeof ScreenName>> = ({route}) => {
  const {form} = useProfileRegistrationForm();
  const {signup, isExecutingSignup} = useSignupUseCase(form, route.params);
  const {clearNickname} = useClearNicknameUseCase(form);

  return (
    <View style={styles.container} testID="ProfileRegistration">
      <TextInput
        label={m('ニックネーム')}
        value={form.values.nickname}
        onChangeText={form.handleChange('nickname')}
        showClearButton={!!form.values.nickname}
        onClearButtonPress={clearNickname}
        errorMessage={form.errors.nickname}
      />
      <Spacer heightRatio={0.05} />
      <FilledButton title={m('登録')} onPress={signup} loading={isExecutingSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

export const ProfileRegistrationScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('プロフィール登録'),
    animation: 'slide_from_bottom',
  },
};
