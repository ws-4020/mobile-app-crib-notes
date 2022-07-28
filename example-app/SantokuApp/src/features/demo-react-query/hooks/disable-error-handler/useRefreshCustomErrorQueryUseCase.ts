import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useCustomErrorQuery} from './useCustomErrorQuery';

const onError = () => {
  Alert.alert('カスタムエラー処理', 'エラーが発生しました');
};
export const useRefreshCustomErrorQueryUseCase = () => {
  const {refetch} = useCustomErrorQuery(onError);
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
