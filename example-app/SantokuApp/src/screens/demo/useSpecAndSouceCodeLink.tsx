import React, {useCallback} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

import {AppConfig} from '../../framework';

const openUrl = async (url: string) => {
  await Linking.openURL(url);
};

export const useSpecAndSourceCodeLink = (feature: string) => {
  const openSpec = useCallback(async () => {
    await openUrl(`${AppConfig.mobileAppCribNotesWebsiteUrl}/react-native/santoku/design/demo/${feature}/overview`);
  }, [feature]);
  const openSourceCode = useCallback(async () => {
    await openUrl(`${AppConfig.mobileAppCribNotesRepositoryUrl}/example-app/SantokuApp/src/screens/demo/${feature}`);
  }, [feature]);

  const SpecAndSourceCodeLink: React.FC = () => (
    <View style={styles.container}>
      <Button title="・デモページの仕様" type="clear" onPress={openSpec} />
      <Button title="・デモページのソースコード" type="clear" onPress={openSourceCode} />
    </View>
  );
  return {SpecAndSourceCodeLink};
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'flex-start',
  },
});
