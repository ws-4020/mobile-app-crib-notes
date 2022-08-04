import {m} from 'bases/message/utils/Message';
import {FilledButton} from 'bases/ui/components/button/FilledButton';
import {OutlinedButton} from 'bases/ui/components/button/OutlinedButton';
import {PasswordTextInput} from 'bases/ui/components/input/PasswordTextInput';
import {TextInput} from 'bases/ui/components/input/TextInput';
import {Spacer} from 'bases/ui/components/spacer/Spacer';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useLoginForm} from '../services/useLoginForm';
import {useTerms} from '../services/useTerms';
import {useClearAccountIdUseCase} from '../use-cases/useClearAccountIdUseCase';
import {useClearPasswordUseCase} from '../use-cases/useClearPasswordUseCase';
import {useCreateAccountUseCase} from '../use-cases/useCreateAccountUseCase';
import {useLoginUseCase} from '../use-cases/useLoginUseCase';

export type LoginPageProps = {
  navigateToCreateAccount: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => void;
};

export const LoginPage: React.VFC<LoginPageProps> = ({navigateToCreateAccount}) => {
  const {form} = useLoginForm();
  const {isFetchedTerms} = useTerms();
  const {createAccount} = useCreateAccountUseCase(navigateToCreateAccount);
  const {login, isExecutingLogin} = useLoginUseCase(form);
  const {clearAccountId} = useClearAccountIdUseCase(form);
  const {clearPassword} = useClearPasswordUseCase(form);

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
