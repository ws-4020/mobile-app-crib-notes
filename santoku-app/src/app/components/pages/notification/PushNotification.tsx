import { Input } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Description, Section, TextButton, Title } from '../../basics';

const PushNotification: React.FC = () => {
  const [title, setTitle] = useState('');
  const [messageText, setMessageText] = useState('');
  return (
    <Container>
      <Description>指定した端末へプッシュ通知を送信する例と、指定したトピックを購読している端末へプッシュ通知を送信する例を示します。</Description>
      <Title>指定した端末へプッシュ通知を送信する例</Title>
      <Description>
        指定した端末へプッシュ通知を送信するようにFirebaseに依頼する際には、端末・アプリ単位で生成されるデバイストークンを指定する必要があります。
        {'\n'}
        デバイストークンはFirebase SDKによって、アプリの初回起動時や再インストール直後の起動時などのタイミングで生成されます。{'\n\n'}
        以下の「サーバーにこの端末のトークンを登録」ボタンを押すと、バックエンドサーバーにこの端末のデバイストークンを登録できます。{'\n\n'}
        その後に、送信したい内容を入力して「この端末にプッシュ通知を送信」ボタンを押すと、バックエンドサーバー経由でFirebaseのプッシュ通知送信APIが呼び出され、Firebaseからこの端末にプッシュ通知が届きます。
      </Description>
      <Section>
        <Title>この端末のデバイストークン</Title>
        <Input value="bk3RNw" disabled={true} style={{ backgroundColor: '#EBEBEB' }} />
        <Title>通知メッセージタイトル</Title>
        <Input
          value={title}
          onChangeText={(title) => setTitle(title)}
          placeholder="通知メッセージのタイトルを入力してください"
          style={styles.inputText}
        />
        <Title>通知メッセージ本文</Title>
        <Input
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
          placeholder="通知メッセージの本文を入力してください"
          style={styles.inputText}
        />

        <TextButton
          onPress={() => {
            return true;
          }}
          value="この端末にプッシュ通知を送信"
        />
        <TextButton
          onPress={() => {
            return true;
          }}
          value="この端末に15秒後にプッシュ通知を送信"
        />
      </Section>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputText: {
    textDecorationColor: 'black',
    paddingBottom: 10,
  },
});

export default PushNotification;
