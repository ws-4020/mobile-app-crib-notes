import React, {useCallback, useEffect, useState} from 'react';
import {Content, Spinner} from 'native-base';
import {Container, TextButton, Section, Description} from '../../basics';
import {useBackendAuthContext} from '../../../context/BackendAuthContext';
import {StackActions, useNavigation} from '@react-navigation/native';

export const BackendAuthSignIn: React.FC = () => {
  const authContext = useBackendAuthContext();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const signIn = useCallback(async () => {
    setLoading(true);
    await authContext.login('aaa', '');
    setLoading(false);
    navigation.dispatch(StackActions.pop());
  }, [setLoading, authContext, navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (event) => {
      if (authContext.isLoggedIn) {
        return;
      }
      event.preventDefault();
    });
    return unsubscribe;
  }, [navigation, authContext]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Content>
          <Description>
            AWS Cognitoを使ったOIDC認証の例を示します。 {'\n\n'}
            以下のボタンをタップするとAWS Cognitoの認証画面に遷移して、認証を求められます。 IDとパスワードはそれぞれ「guest」「P@ssw0rd」
            を入力してください。
          </Description>
          <Section>
            <TextButton onPress={signIn} value={'サインイン'} />
          </Section>
        </Content>
      )}
    </Container>
  );
};
