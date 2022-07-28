import axios, {AxiosError} from 'axios';
import {ErrorResponse} from 'features/sandbox/apis/model';
import {useCallback} from 'react';

import {notifyMessageToMe} from '../utils/notifyMessageToMe';
import {useToken} from './useToken';

export const useNotifyMessageToMeUseCase = () => {
  const [token] = useToken();
  const notifyMessage = useCallback(async () => {
    if (token) {
      try {
        await notifyMessageToMe(token);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            alert(axiosError.response.data.message);
            return;
          }
          alert(e);
        }
      }
      return;
    }
    alert('FCM登録トークンを取得してください');
  }, [token]);
  return {notifyMessageToMe: notifyMessage};
};
