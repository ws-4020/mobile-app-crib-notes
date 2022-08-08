import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useDisableErrorHandlerCustomErrorQuery} from '../services/useDisableErrorHandlerCustomErrorQuery';

const onError = () => {
  Alert.alert('カスタムエラー処理', 'エラーが発生しました');
};
export const useDisableErrorHandlerRefreshCustomErrorQuery = () => {
  const {refetch} = useDisableErrorHandlerCustomErrorQuery(onError);
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
