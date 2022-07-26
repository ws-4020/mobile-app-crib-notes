import {m} from 'bases/message/utils/Message';
import {FilledButton} from 'bases/ui/components/button/FilledButton';
import {TextInput} from 'bases/ui/components/input/TextInput';
import {Spacer} from 'bases/ui/components/spacer/Spacer';
import {TermsOfServiceAgreementStatus} from 'features//backend/apis/model';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useClearNicknameUseCase} from '../hooks/useClearNicknameUseCase';
import {useProfileRegistrationForm} from '../hooks/useProfileRegistrationForm';
import {useSignupUseCase} from '../hooks/useSignupUseCase';

export type ProfileRegistrationPageProps = {
  termsAgreementStatus: TermsOfServiceAgreementStatus;
};
export const ProfileRegistrationPage: React.VFC<ProfileRegistrationPageProps> = ({termsAgreementStatus}) => {
  const {form} = useProfileRegistrationForm();
  const {signup, isExecutingSignup} = useSignupUseCase(form, termsAgreementStatus);
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
