import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useCustomErrorQueryWithoutGlobalErrorHandling} from './useCustomErrorQueryWithoutGlobalErrorHandling';

const onError = () => {
  Alert.alert('カスタムエラー処理', 'エラーが発生しました');
};
export const useRefreshCustomErrorQueryWithoutGlobalErrorHandlingUseCase = () => {
  const {refetch} = useCustomErrorQueryWithoutGlobalErrorHandling(onError);
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
