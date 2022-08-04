import {useCallback} from 'react';

import {useToken} from '../client-states/useToken';
import {getFcmToken} from '../services/getFcmToken';

export const useGetTokenUseCase = () => {
  const [, setFcmToken] = useToken();
  const getToken = useCallback(async () => {
    const token = await getFcmToken();
    setFcmToken(token);
  }, [setFcmToken]);
  return {getToken};
};
