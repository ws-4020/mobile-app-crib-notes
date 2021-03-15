import {Content, Spinner} from 'native-base';
import React, {useCallback, useState} from 'react';
import {useBackendAuthContext} from '../../../context/BackendAuthContext';
import {Container, Description, Section, TextButton} from '../../basics';

export const BackendAuthAuthed: React.FC = () => {
  const authContext = useBackendAuthContext();
  const [loading, setLoading] = useState<boolean>(false);
  const signOut = useCallback(async () => {
    setLoading(true);
    await authContext.logout();
    setLoading(false);
  }, [authContext]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Content>
          <Description>
            認証が成功して、バックエンドサーバーとのセッションが確立できました。{'\n\n'}
            取得結果を以下に示します。AWS CognitoのOIDC認証ではIDトークン、アクセストークン、リフレッシュトークンの3つが取得できます。{'\n'}
            ここでは便宜上取得結果を画面に表示していますが、
            通常のアプリであれば、ユーザーまたは第三者の目に触れることのないようにセキュアなストレージに保管して管理してください。
            このアプリでは、AndroidではKeyStoreに保存した鍵で暗号化してSharedPreferenceに保管し、iOSではKeychainに保管しています。
          </Description>
          <Section>
            <TextButton onPress={signOut} value={'サインアウト'} />
          </Section>
        </Content>
      )}
    </Container>
  );
};
