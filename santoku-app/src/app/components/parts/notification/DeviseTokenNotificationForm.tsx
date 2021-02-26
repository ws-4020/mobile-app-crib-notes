import React, {useCallback, useState} from 'react';
import {Description, Section, TextButton, Title} from '../../basics';
import FormInput from './FormInput';
import pushNotificationService from '../../../backend/notification/PushNotificationService';

type Props = {
  deviseToken?: string;
};

const DeviseTokenNotificationForm: React.FC<Props> = ({deviseToken}) => {
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();
  const [text, setText] = useState<string>();

  const sendMessage = useCallback(
    (delay) => {
      if (deviseToken && title && body && text) {
        pushNotificationService.sendMessage({token: deviseToken, notification: {title, body}, data: {text}, delay});
      }
    },
    [deviseToken, title, body, text],
  );

  return (
    <>
      <Title>指定した端末へプッシュ通知を送信する例</Title>
      <Description>
        指定した端末へプッシュ通知を送信するようにFirebaseに依頼する際には、端末・アプリ単位で生成されるデバイストークンを指定する必要があります。
        {'\n'}
        デバイストークンはFirebase SDKによって、アプリの初回起動時や再インストール直後の起動時などのタイミングで生成されます。{'\n\n'}
        以下の「サーバーにこの端末のトークンを登録」ボタンを押すと、バックエンドサーバーにこの端末のデバイストークンを登録できます。{'\n\n'}
        その後に、送信したい内容を入力して「この端末にプッシュ通知を送信」ボタンを押すと、バックエンドサーバー経由でFirebaseのプッシュ通知送信APIが呼び出され、Firebaseからこの端末にプッシュ通知が届きます。
      </Description>
      <Section>
        <FormInput readonly={true} label="この端末のデバイストークン" value={deviseToken} />
        <FormInput
          label="通知メッセージタイトル"
          value={title}
          onChangeText={(value) => setTitle(value)}
          placeholder="通知メッセージのタイトルを入力してください"
        />
        <FormInput
          label="通知メッセージ本文"
          value={body}
          onChangeText={(value) => setBody(value)}
          placeholder="通知メッセージの本文を入力してください"
        />
        <FormInput
          label="(任意) データとしてアプリが受け取る値 (文字列)"
          value={text}
          onChangeText={(value) => setText(value)}
          placeholder="データのValueを入力してください"
        />
        <TextButton
          onPress={() => {
            sendMessage(0);
          }}
          value="この端末にプッシュ通知を送信"
        />
        <TextButton
          onPress={() => {
            sendMessage(15);
          }}
          value="この端末に15秒後にプッシュ通知を送信"
        />
      </Section>
    </>
  );
};

export default DeviseTokenNotificationForm;
