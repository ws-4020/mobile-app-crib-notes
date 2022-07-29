import {m} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/components/overlay/snackbar/WithSnackbar';
import {useCallback} from 'react';

export const useShowSnackbarUseCase = () => {
  // const snackbar = useSnackbar();

  const showSnackbar = useCallback(() => {
    Snackbar.show(m('app.webview.onError'));
  }, []);
  return {showSnackbar};
};
