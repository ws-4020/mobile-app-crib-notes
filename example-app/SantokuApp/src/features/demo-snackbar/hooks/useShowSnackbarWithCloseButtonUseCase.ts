import {m} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/components/overlay/snackbar/WithSnackbar';
import {useCallback} from 'react';

export const useShowSnackbarWithCloseButtonUseCase = () => {
  // const snackbar = useSnackbar();

  const showSnackbarWithCloseButton = useCallback(() => {
    Snackbar.showWithCloseButton(m('app.webview.onError'));
  }, []);
  return {showSnackbarWithCloseButton};
};
