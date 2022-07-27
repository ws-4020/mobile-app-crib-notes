import {m} from 'bases/message/utils/Message';
import {useSnackbar} from 'bases/ui/contexts/useSnackbar';
import {useCallback} from 'react';

export const useShowSnackbarWithCloseButtonUseCase = () => {
  const snackbar = useSnackbar();

  const showSnackbarWithCloseButton = useCallback(() => {
    snackbar.showWithCloseButton(m('app.webview.onError'));
  }, [snackbar]);
  return {showSnackbarWithCloseButton};
};
