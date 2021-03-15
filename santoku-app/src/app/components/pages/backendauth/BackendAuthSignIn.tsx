import React, {useCallback, useEffect, useState} from 'react';
import {Content, Spinner} from 'native-base';
import {Container, TextButton, Section, Description} from '../../basics';
import {useBackendAuthContext} from '../../../context/BackendAuthContext';
import {StackActions, useFocusEffect, useNavigation} from '@react-navigation/native';

export const BackendAuthSignIn: React.FC = () => {
  const authContext = useBackendAuthContext();
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useCallback(async () => {
    setLoading(true);
    await authContext.signIn();
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

  useFocusEffect(
    useCallback(() => {
      if (loading || !authContext.isLoggedIn) {
        return;
      }
      const signInIfPingNG = async () => {
        setLoading(true);
        try {
          const isValid = await authContext.checkSessionIsValid();
          console.log(isValid);

          if (authContext.isLoggedIn && isValid) {
            navigation.dispatch(StackActions.pop());
            return;
          }

          await authContext.signIn();
          navigation.dispatch(StackActions.pop());
        } catch (e) {
          // Handle error
        }
        setLoading(false);
      };

      signInIfPingNG();
    }, [navigation, authContext, loading, setLoading]),
  );

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
