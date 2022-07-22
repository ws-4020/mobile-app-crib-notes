import {AppConfig} from 'framework/config';
import React, {useCallback} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const openUrl = async (url: string) => {
  await Linking.openURL(url);
};

type Props = {
  feature: string;
};
export const SpecAndSourceCodeLink: React.VFC<Props> = ({feature}) => {
  const openSpec = useCallback(async () => {
    await openUrl(`${AppConfig.mobileAppCribNotesWebsiteUrl}/react-native/santoku/design/demo/${feature}/overview`);
  }, [feature]);
  const openSourceCode = useCallback(async () => {
    await openUrl(
      `${AppConfig.mobileAppCribNotesRepositoryUrl}/tree/master/example-app/SantokuApp/src/screens/demo/${feature}`,
    );
  }, [feature]);

  return (
    <View style={styles.container}>
      <Button title="・デモページの仕様" type="clear" onPress={openSpec} />
      <Button title="・デモページのソースコード" type="clear" onPress={openSourceCode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'flex-start',
  },
});