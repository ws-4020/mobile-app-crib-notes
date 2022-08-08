import {m} from 'bases/message/Message';
import {FilledButton} from 'bases/ui/button/FilledButton';
import {OutlinedButton} from 'bases/ui/button/OutlinedButton';
import {PasswordTextInput} from 'bases/ui/input/PasswordTextInput';
import {TextInput} from 'bases/ui/input/TextInput';
import {Spacer} from 'bases/ui/spacer/Spacer';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useLoginForm} from '../forms/useLoginForm';
import {useTerms} from '../services/useTerms';
import {useClearAccountId} from '../use-cases/useClearAccountId';
import {useClearPassword} from '../use-cases/useClearPassword';
import {useCreateAccount} from '../use-cases/useCreateAccount';
import {useLogin} from '../use-cases/useLogin';

export type LoginPageProps = {
  navigateToCreateAccount: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => void;
};

export const LoginPage: React.VFC<LoginPageProps> = ({navigateToCreateAccount}) => {
  const {form} = useLoginForm();
  const {isFetchedTerms} = useTerms();
  const {createAccount} = useCreateAccount(navigateToCreateAccount);
  const {login, isExecutingLogin} = useLogin(form);
  const {clearAccountId} = useClearAccountId(form);
  const {clearPassword} = useClearPassword(form);

  return (
    <View style={styles.container} testID="Login">
      <TextInput
        label={m('アカウントID')}
        value={form.values.accountId}
        onChangeText={form.handleChange('accountId')}
        showClearButton={!!form.values.accountId}
        onClearButtonPress={clearAccountId}
        errorMessage={form.errors.accountId}
      />
      <Spacer heightRatio={0.03} />
      <PasswordTextInput
        label={m('パスワード')}
        value={form.values.password}
        onChangeText={form.handleChange('password')}
        showClearButton={!!form.values.password}
        onClearButtonPress={clearPassword}
        errorMessage={form.errors.password}
      />
      <Spacer heightRatio={0.05} />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <OutlinedButton title={m('新規登録')} onPress={createAccount} disabled={!isFetchedTerms} />
        <Spacer widthRatio={0.1} />
        <FilledButton title={m('ログイン')} onPress={login} loading={isExecutingLogin} disabled={!isFetchedTerms} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
});
