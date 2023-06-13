import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {useMutation} from 'react-query';

import {PushNotificationParams} from '../types/PushNotificationParams';

export const usePushNotificationSendCommands = () => {
  const {mutateAsync: sendToMe, isLoading: isSendingToMe} = useMutation(
    ({token, params}: {token: string; params: PushNotificationParams}) =>
      axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`, params),
  );

  const {mutateAsync: sendToAll, isLoading: isSendingToAll} = useMutation(
    ({params}: {params: PushNotificationParams}) =>
      axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`, params),
  );

  return {
    sendToMe,
    isSendingToMe,
    sendToAll,
    isSendingToAll,
  };
};
