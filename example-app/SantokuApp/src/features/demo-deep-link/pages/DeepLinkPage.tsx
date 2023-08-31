import {handleError} from 'bases/core/errors/handleError';
import * as Linking from 'expo-linking';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {SpecAndSourceCodeLink} from '../../demo-github-link/components/SpecAndSourceCodeLink';

export const keyExtractor = (_: unknown, index: number) => index.toString();

export const DeepLinkPage: React.FC = () => {
  const [receivedLinkLogs, setReceivedLinkLogs] = useState<string[]>([]);

  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          setReceivedLinkLogs(prev => [`[getInitialUrl] ${new Date().toISOString()}\n${url}`, ...prev]);
        }
      })
      .catch(e => handleError(e));
    const subscription = Linking.addEventListener('url', ({url}) =>
      setReceivedLinkLogs(prev => [`[addEventListener] ${new Date().toISOString()}\n${url}`, ...prev]),
    );
    return () => subscription.remove();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SpecAndSourceCodeLink feature="deep-link" />
        <View style={styles.contentsContainer}>
          <Text>【ディープリンク受信ログ】</Text>
          <Text>この画面がアンマウントされると、ログもクリアされます。</Text>
          {receivedLinkLogs.length ? (
            receivedLinkLogs.map((log, index) => (
              <View key={index} style={styles.logItemContainer}>
                <Text>{log}</Text>
              </View>
            ))
          ) : (
            <View style={styles.noLogContainer}>
              <Text style={styles.noLogText}>ディープリンクはまだ受信していません。</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  contentsContainer: {paddingHorizontal: 16, rowGap: 20},
  logItemContainer: {borderBottomWidth: 1, borderBottomColor: 'grey', paddingVertical: 5},
  noLogContainer: {alignItems: 'center'},
  noLogText: {color: 'grey'},
});
