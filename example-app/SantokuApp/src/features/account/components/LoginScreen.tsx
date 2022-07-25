import {RootStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {FilledButton, OutlinedButton} from 'bases/ui/components/button';
import {PasswordTextInput, TextInput} from 'bases/ui/components/input';
import {Spacer} from 'bases/ui/components/spacer/Spacer';
import {useFormik} from 'formik';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {loginFormInitialValues} from '../constants/loginFormInitialValues';
import {loginFormValidationSchema} from '../constants/loginFormValidationSchema';
import {useClearAccountIdUseCase} from '../hooks/useClearAccountIdUseCase';
import {useClearPasswordUseCase} from '../hooks/useClearPasswordUseCase';
import {useCreateAccountUseCase} from '../hooks/useCreateAccountUseCase';
import {useLoginForm} from '../hooks/useLoginForm';
import {useLoginUseCase} from '../hooks/useLoginUseCase';
import {useTerms} from '../hooks/useTerms';

const ScreenName = 'Login';

const Screen: React.FC = () => {
  const {form} = useLoginForm();
  const {isFetchedTerms} = useTerms();
  const {createAccount} = useCreateAccountUseCase();
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

export const LoginScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('ログイン'),
    animation: 'fade',
  },
};
