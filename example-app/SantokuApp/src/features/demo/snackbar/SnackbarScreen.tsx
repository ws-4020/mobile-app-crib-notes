import {DemoStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases/message/utils/Message';
import {useSnackbar} from 'bases/ui/contexts/useSnackbar';
import React, {useCallback} from 'react';

import {SnackbarTemplate} from './SnackbarTemplate';

const ScreenName = 'Snackbar';
const Screen: React.FC = () => {
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

export const SnackbarScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Message',
    presentation: 'formSheet' as const,
  },
};
