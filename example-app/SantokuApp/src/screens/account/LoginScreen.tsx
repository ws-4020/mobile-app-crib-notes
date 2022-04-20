import {useFormik} from 'formik';
import {m} from 'framework';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {FilledButton} from '../../components/button/FilledButton';
import {OutlinedButton} from '../../components/button/OutlinedButton';
import {Spacer} from '../../components/spacer/Spacer';
import {isValidForm} from '../../framework/validator';
import {loginFormInitialValues, loginFormValidationSchema} from './data-types/LoginForm';

const ScreenName = 'Login';

const Screen: React.FC = () => {
  const form = useFormik({
    initialValues: loginFormInitialValues,
    validationSchema: loginFormValidationSchema,
    validateOnChange: false,
    onSubmit: () => {},
  });
  return (
    <View style={styles.container} testID="Login">
      <Input
        label={m('アカウントID')}
        value={form.values.accountId}
        onChangeText={form.handleChange('accountId')}
        errorMessage={form.errors.accountId}
      />
      <Spacer heightRatio={0.01} />
      <Input
        label={m('パスワード')}
        value={form.values.password}
        onChangeText={form.handleChange('password')}
        errorMessage={form.errors.password}
      />
      <Spacer heightRatio={0.03} />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <OutlinedButton title={m('新規登録')} />
        <Spacer widthRatio={0.1} />
        <FilledButton title={m('ログイン')} onPress={() => isValidForm(form)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    // TODO: これどうするかな
    backgroundColor: 'white',
  },
});

export const LoginScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('ログイン'),
    // TODO: これどうするかな
    headerStyle: {backgroundColor: '#fafafa'},
  }),
};
