import {useCallback} from 'react';

import {getFcmToken} from '../utils/getFcmToken';
import {useToken} from './useToken';

export const useGetTokenUseCase = () => {
  const [, setFcmToken] = useToken();
  const getToken = useCallback(async () => {
    const token = await getFcmToken();
    setFcmToken(token);
  }, [setFcmToken]);
  return {getToken};
};
