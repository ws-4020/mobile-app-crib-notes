import {log} from 'bases/logging';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {useCallback} from 'react';

import {clearCacheDir} from '../services/clearCacheDir';

export const useClear = () => {
  const clear = useCallback(async () => {
    try {
      await clearCacheDir();
      Snackbar.showWithCloseButton(`ファイルの削除に成功しました。`);
    } catch (e) {
      log.trace(String(e));
      Snackbar.showWithCloseButton(`ファイルの削除に失敗しました。`);
    }
  }, []);
  return {clear};
};
