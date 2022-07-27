import {m} from 'bases/message/utils/Message';
import {useSnackbar} from 'bases/ui/contexts/useSnackbar';
import React, {useCallback} from 'react';

import {SnackbarTemplate} from '../snackbar/SnackbarTemplate';

export const SnackbarPage: React.FC = () => {
  const snackbar = useSnackbar();

  const showSnackbar = useCallback(() => {
    snackbar.show(m('app.webview.onError'));
  }, [snackbar]);

  const showSnackbarWithCloseButton = useCallback(() => {
    snackbar.showWithCloseButton(m('app.webview.onError'));
  }, [snackbar]);

  return (
    <SnackbarTemplate
      testID="SnackbarScreen"
      showSnackbar={showSnackbar}
      showSnackbarWithCloseButton={showSnackbarWithCloseButton}
    />
  );
};
