import {log} from 'bases/logging/utils';
import {useSnackbar} from 'bases/ui/contexts/useSnackbar';
import {useCallback} from 'react';

import {clearCacheDir} from '../utils/clearCacheDir';

export const useClearUseCase = () => {
  const snackbar = useSnackbar();
  const clear = useCallback(async () => {
    try {
      await clearCacheDir();
      snackbar.showWithCloseButton(`ファイルの削除に成功しました。`);
    } catch (e) {
      log.trace(String(e));
      snackbar.showWithCloseButton(`ファイルの削除に失敗しました。`);
    }
  }, [snackbar]);
  return {clear};
};
