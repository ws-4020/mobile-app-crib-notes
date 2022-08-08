import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useDisableErrorHandlerCustomErrorQueryWithoutGlobalErrorHandling} from '../services/useDisableErrorHandlerCustomErrorQueryWithoutGlobalErrorHandling';

const onError = () => {
  Alert.alert('カスタムエラー処理', 'エラーが発生しました');
};
export const useDisableErrorHandlerRefreshCustomErrorQueryWithoutGlobalErrorHandling = () => {
  const {refetch} = useDisableErrorHandlerCustomErrorQueryWithoutGlobalErrorHandling(onError);
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
