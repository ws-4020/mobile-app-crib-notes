import {m} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/overlay/snackbar/Snackbar';
import {useCallback} from 'react';

export const useShowSnackbarUseCase = () => {
  const showSnackbar = useCallback(() => {
    Snackbar.show(m('app.webview.onError'));
  }, []);
  return {showSnackbar};
};
