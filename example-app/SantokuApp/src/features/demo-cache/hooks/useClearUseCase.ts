import {log} from 'bases/logging/utils';
import {Snackbar} from 'bases/ui/components/overlay/snackbar/Snackbar';
import {useCallback} from 'react';

import {clearCacheDir} from '../utils/clearCacheDir';

export const useClearUseCase = () => {
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
