/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Button} from 'bases/ui/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export type NavigationPageProps = {
  navigateToSnackbarDemo: () => void;
  navigateToHomeStack: () => void;
  navigateToAccountStack: () => void;
};

export const NavigationPage: React.FC<NavigationPageProps> = ({
  navigateToSnackbarDemo,
  navigateToHomeStack,
  navigateToAccountStack,
}) => {
  return (
    <View style={styles.container}>
      <Button size="large" title="Go to Snackbar Demo" onPress={navigateToSnackbarDemo} />
      <Button size="large" title="Go to Home" onPress={navigateToHomeStack} />
      <Button size="large" title="Go to Account" onPress={navigateToAccountStack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
