import { Input, Item } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Description, Section, TextButton, Title } from '../../basics';

const PushNotification: React.FC = () => {
  const [title, setTitle] = useState('');
  const [messageText, setMessageText] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [topicName, setTopicName] = useState('');
  const [topicTitle, setTopicTitle] = useState('');
  const [topicText, setTopicText] = useState('');
  const [sendTopicName, setSendTopicName] = useState('');

  return (
    <Container refreshing={false}>
      <ScrollView>
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
          <Item disabled>
            <Input value="bk3RNw" disabled={true} style={[styles.disableInput, styles.inputText]} />
          </Item>
          <Title>通知メッセージタイトル</Title>
          <Item>
            <Input
              value={title}
              onChangeText={(value) => setTitle(value)}
              placeholder="通知メッセージのタイトルを入力してください"
              style={styles.inputText}
            />
          </Item>
          <Title>通知メッセージ本文</Title>
          <Item>
            <Input
              value={messageText}
              onChangeText={(value) => setMessageText(value)}
              placeholder="通知メッセージの本文を入力してください"
              style={styles.inputText}
            />
          </Item>
          <Title>(任意) データとしてアプリが受け取る値 (文字列)</Title>
          <Item>
            <Input
              value={messageValue}
              onChangeText={(value) => setMessageValue(value)}
              placeholder="データのValueを入力してください"
              style={styles.inputText}
            />
          </Item>
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
        <Title>指定したトピックを購読する全ての端末へプッシュ通知を送信する例</Title>
        <Description>
          指定したトピックを購読している端末へプッシュ通知を送信するためには、Firebaseに対して購読したいトピックを登録する必要があります。この購読登録は、クライアントアプリ側、バックエンドサーバー側のどちらからでもFirebaseに登録可能です。
          {'\n\n'}
          以下の「この端末で購読するトピックを追加」ボタンを押すと、指定したトピック名でFirebaseに購読登録できます。その後に、「指定したトピックにプッシュ通知を送信」ボタンを押すと、そのトピックを購読している端末全てにプッシュ通知が届きます。
        </Description>
        <Title>追加購読するトピック名</Title>
        <Item>
          <Input
            value={topicName}
            onChangeText={(value) => setTopicName(value)}
            placeholder="購読したいトピック名を入力してください"
            style={styles.inputText}
          />
        </Item>
        <TextButton
          onPress={() => {
            return true;
          }}
          value="この端末で購読するトピックを追加"
        />
        <Title>通知メッセージの送信先トピック名</Title>
        <Item>
          <Input
            value={sendTopicName}
            onChangeText={(value) => setSendTopicName(value)}
            placeholder="メッセージを送信したいトピック名を入力してください"
            style={styles.inputText}
          />
        </Item>
        <Title>通知メッセージタイトル</Title>
        <Item>
          <Input
            value={topicTitle}
            onChangeText={(value) => setTopicTitle(value)}
            placeholder="通知メッセージのタイトルを入力してください"
            style={styles.inputText}
          />
        </Item>
        <Title>通知メッセージ本文</Title>
        <Item>
          <Input
            value={topicText}
            onChangeText={(value) => setTopicText(value)}
            placeholder="通知メッセージの本文を入力してください"
            style={styles.inputText}
          />
        </Item>
        <TextButton
          onPress={() => {
            return true;
          }}
          value="指定したトピックにプッシュ通知を送信する"
        />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  inputText: {
    textDecorationColor: 'black',
    paddingBottom: 10,
  },
  container: {
    display: 'flex',
  },
  disableInput: {
    backgroundColor: '#EBEBEB',
  },
});

export default PushNotification;
