import React from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, ButtonGroup, CheckBox, Divider, Text} from 'react-native-elements';

import {credentialsOptions} from '../constants/credentialsOptions';
import {redirectOptions} from '../constants/redirectOptions';
import {useAxiosUseCase} from '../hooks/useAxiosUseCase';
import {useCredentialsOptionIndex} from '../hooks/useCredentialsOptionIndex';
import {useFetchApiUseCase} from '../hooks/useFetchApiUseCase';
import {useMaxRedirectsOption} from '../hooks/useMaxRedirectsOption';
import {useRedirectOptionIndex} from '../hooks/useRedirectOptionIndex';
import {useResponseInfo} from '../hooks/useResponseInfo';
import {useWithCredentialsOption} from '../hooks/useWithCredentialsOption';

export const HttpApiPage = () => {
  const [redirectOptionIndex, setRedirectOptionIndex] = useRedirectOptionIndex();
  const [credentialsOptionIndex, setCredentialsOptionIndex] = useCredentialsOptionIndex();
  const [maxRedirectsOption, setMaxRedirectsOption] = useMaxRedirectsOption();
  const [withCredentialsOption, setWithCredentialsOption] = useWithCredentialsOption();
  const [responseInfo] = useResponseInfo();
  const {callFetchApi} = useFetchApiUseCase();
  const {callAxiosApi} = useAxiosUseCase();

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
            <Button onPress={callFetchApi} title="fetch" />
          </View>
        </View>
        <Divider orientation="vertical" style={styles.divider} />
        <View style={styles.requestSection}>
          <Text h4>axios</Text>
          <Text>maxRedirects option:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setMaxRedirectsOption}
            value={maxRedirectsOption}
            keyboardType="numeric"
          />
          <Text>withCredentials option:</Text>
          <CheckBox
            center
            title="withCredentials"
            checked={withCredentialsOption}
            onPress={() => setWithCredentialsOption(!withCredentialsOption)}
          />
          <View style={styles.actionBar}>
            <Text>axios getを呼び出します。</Text>
            <Button onPress={callAxiosApi} title="axios" />
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
  textInput: {
    width: '100%',
    borderBottomWidth: 1,
  },
  actionBar: {
    alignSelf: 'flex-end',
  },
});
