import axios, {AxiosError} from 'axios';
import {ErrorResponse} from 'features/sandbox/apis/model';
import {useCallback} from 'react';

import {notifyMessageToAll} from '../services/notifyMessageToAll';

export const useNotifyMessageToAll = () => {
  const notifyMessage = useCallback(async () => {
    try {
      await notifyMessageToAll();
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
  }, []);
  return {notifyMessageToAll: notifyMessage};
};
