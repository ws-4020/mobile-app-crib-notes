import {m} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {StatusBar} from 'expo-status-bar';
import React, {useCallback} from 'react';
import {Platform} from 'react-native';

import {SnackbarTemplate} from '../components/SnackbarTemplate';

export const SnackbarPage: React.FC = () => {
  const showSnackbar = useCallback(() => {
    Snackbar.show(m('app.webview.onError'));
  }, []);

  const showSnackbarWithCloseButton = useCallback(() => {
    Snackbar.showWithCloseButton(m('app.webview.onError'));
  }, []);
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar style="light" />}
      <SnackbarTemplate
        testID="SnackbarScreen"
        showSnackbar={showSnackbar}
        showSnackbarWithCloseButton={showSnackbarWithCloseButton}
      />
    </>
  );
};
