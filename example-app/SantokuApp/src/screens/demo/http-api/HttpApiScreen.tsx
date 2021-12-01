import axios from 'axios';
import {AppConfig} from 'framework/config';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View, ScrollView, TextInput} from 'react-native';
import {Button, ButtonGroup, CheckBox, Divider, Text} from 'react-native-elements';

const redirectOptions: ['follow', 'error', 'manual'] = ['follow', 'error', 'manual'];
const credentialsOptions: ['include', 'same-origin', 'omit'] = ['include', 'same-origin', 'omit'];

const ScreenName = 'HttpApi';
const Screen = () => {
  const [redirectOptionIndex, setRedirectOptionIndex] = useState(0);
  const [credentialsOptionIndex, setCredentialsOptionIndex] = useState(0);
  const [maxRedirectsOption, setMaxRedirectsOption] = useState('5');
  const [withCredentialsOption, setWithCredentialsOption] = useState(true);
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

  const callAxios = useCallback(() => {
    const maxRedirects = isNaN(Number(maxRedirectsOption)) ? undefined : Number(maxRedirectsOption);
    axios
      .get<{message: string}>(AppConfig.santokuAppBackendUrl + '/api/fetch_test/redirect', {
        maxRedirects,
        withCredentials: withCredentialsOption,
      })
      .then(response => {
        const info =
          'maxRedirects option:' +
          String(maxRedirects) +
          '\n' +
          'withCredentials option:' +
          String(withCredentialsOption) +
          '\n' +
          response.data.message;
        setResponseInfo(info);
      })
      .catch(error => {
        console.error(error);
      });
  }, [maxRedirectsOption, withCredentialsOption]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.responseSection}>
          <Text>レスポンス情報:</Text>
          <View style={styles.responseBox}>
            <Text>{responseInfo}</Text>
          </View>
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View style={styles.requestSection}>
          <Text h4>Fetch API</Text>
          <Text>redirect option:</Text>
          <ButtonGroup onPress={setRedirectOptionIndex} selectedIndex={redirectOptionIndex} buttons={redirectOptions} />
          <Text>credentials option:</Text>
          <ButtonGroup
            onPress={setCredentialsOptionIndex}
            selectedIndex={credentialsOptionIndex}
            buttons={credentialsOptions}
          />
          <View style={styles.actionBar}>
            <Text>Fetch APIを呼び出します。</Text>
            <Button onPress={callFetch} title="fetch" />
          </View>
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View style={styles.requestSection}>
          <Text h4>axios</Text>
          <Text>maxRedirects option:</Text>
          <TextInput onChangeText={setMaxRedirectsOption} value={maxRedirectsOption} keyboardType="numeric" />
          <Text>withCredentials option:</Text>
          <CheckBox
            center
            title="withCredentials"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={withCredentialsOption}
            onPress={() => setWithCredentialsOption(!withCredentialsOption)}
          />
          <View style={styles.actionBar}>
            <Text>axios getを呼び出します。</Text>
            <Button onPress={callAxios} title="axios" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  scrollView: {
    width: '100%',
  },
  responseSection: {
    width: '100%',
  },
  responseBox: {
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  requestSection: {
    width: '100%',
    alignItems: 'flex-start',
  },
  actionBar: {
    alignSelf: 'flex-end',
  },
});

export const HttpApiScreen = {
  name: ScreenName,
  component: Screen,
};
