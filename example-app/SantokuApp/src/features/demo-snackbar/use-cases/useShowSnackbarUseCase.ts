import {m} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useCallback} from 'react';

export const useShowSnackbarUseCase = () => {
  const showSnackbar = useCallback(() => {
    Snackbar.show(m('app.webview.onError'));
  }, []);
  return {showSnackbar};
};
