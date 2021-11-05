import {m} from 'framework';
import {useCallback} from 'react';

import {useSnackbar} from '../../../components/basics/WithSnackbar';

export const useSnackbarDemo = () => {
  const snackbar = useSnackbar();
  const showSnackbar = useCallback(() => {
    snackbar.show({message: m('msg.error.ネットワーク'), actionText: '閉じる', actionHandler: () => snackbar.hide()});
  }, [snackbar]);

  return {
    showSnackbar,
  };
};
