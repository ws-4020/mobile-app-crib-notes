import {m} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useCallback} from 'react';

export const useShowSnackbarWithCloseButton = () => {
  const showSnackbarWithCloseButton = useCallback(() => {
    Snackbar.showWithCloseButton(m('app.webview.onError'));
  }, []);
  return {showSnackbarWithCloseButton};
};
