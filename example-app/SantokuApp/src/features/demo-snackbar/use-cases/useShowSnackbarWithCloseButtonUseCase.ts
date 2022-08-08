import {m} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/overlay/snackbar/Snackbar';
import {useCallback} from 'react';

export const useShowSnackbarWithCloseButtonUseCase = () => {
  const showSnackbarWithCloseButton = useCallback(() => {
    Snackbar.showWithCloseButton(m('app.webview.onError'));
  }, []);
  return {showSnackbarWithCloseButton};
};
