import {AppConfig} from 'framework/config';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, ButtonGroup, Divider} from 'react-native-elements';

const redirectOptions: ['follow', 'error', 'manual'] = ['follow', 'error', 'manual'];
const credentialsOptions: ['include', 'same-origin', 'omit'] = ['include', 'same-origin', 'omit'];

const ScreenName = 'FetchTest';
const Screen = () => {
  const [redirectOptionIndex, setRedirectOptionIndex] = useState(0);
  const [credentialsOptionIndex, setCredentialsOptionIndex] = useState(0);
  const [responseInfo, setResponseInfo] = useState('');

  const callFetch = useCallback(() => {
    fetch(AppConfig.santokuAppBackendUrl + '/api/fetch_test/redirect', {
      redirect: redirectOptions[redirectOptionIndex],
      credentials: credentialsOptions[credentialsOptionIndex],
    })
      .then(async response => {
        const json = (await response.json()) as {message: string};
        const info =
          'redirect option:' +
          redirectOptions[redirectOptionIndex] +
          '\n' +
          'credentials option:' +
          credentialsOptions[credentialsOptionIndex] +
          '\n' +
          'response.uri:' +
          response.url +
          '\n' +
          'response.redirected :' +
          String(response.redirected) +
          '\n' +
          json.message;
        setResponseInfo(info);
      })
      .catch(error => {
        console.error(error);
      });
  }, [redirectOptionIndex, credentialsOptionIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.response}>
        <Text>レスポンス情報:</Text>
        <View style={styles.responseBox}>
          <Text>{responseInfo}</Text>
        </View>
      </View>
      <Divider orientation="vertical" style={styles.divider} />
      <Text>redirect option:</Text>
      <ButtonGroup onPress={setRedirectOptionIndex} selectedIndex={redirectOptionIndex} buttons={redirectOptions} />
      <Text>credentials option:</Text>
      <ButtonGroup
        onPress={setCredentialsOptionIndex}
        selectedIndex={credentialsOptionIndex}
        buttons={credentialsOptions}
      />
      <Divider orientation="vertical" style={styles.divider} />
      <View style={styles.actionBox}>
        <Text>Fetch APIを呼び出します。</Text>
        <Button onPress={() => callFetch()} title="fetch" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  response: {
    marginTop: 50,
    width: '100%',
  },
  responseBox: {
    margin: 10,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  actionBox: {
    margin: 10,
    alignSelf: 'flex-end',
  },
});

export const FetchTestScreen = {
  name: ScreenName,
  component: Screen,
};
