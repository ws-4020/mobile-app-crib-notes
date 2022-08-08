import {m} from 'bases/message/Message';
import {FilledButton} from 'bases/ui/button/FilledButton';
import {TextInput} from 'bases/ui/input/TextInput';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {TermsOfServiceAgreementStatus} from 'features//backend/apis/model';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useProfileRegistrationForm} from '../forms/useProfileRegistrationForm';
import {useClearNickname} from '../use-cases/useClearNickname';
import {useSignup} from '../use-cases/useSignup';

export type ProfileRegistrationPageProps = {
  termsAgreementStatus: TermsOfServiceAgreementStatus;
};
export const ProfileRegistrationPage: React.VFC<ProfileRegistrationPageProps> = ({termsAgreementStatus}) => {
  const {form} = useProfileRegistrationForm();
  const {signup, isExecutingSignup} = useSignup(form, termsAgreementStatus);
  const {clearNickname} = useClearNickname(form);

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
