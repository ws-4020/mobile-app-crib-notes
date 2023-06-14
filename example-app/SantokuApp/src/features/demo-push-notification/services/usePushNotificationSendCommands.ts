import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {useMutation} from 'react-query';

import {Data} from '../types/Data';

type PushNotificationParams = {
  notificationTitle?: string;
  notificationBody?: string;
  data?: Data[];
  badge?: string;
  collapseId?: string;
  contentAvailable?: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore?: string;
  notificationCount?: string;
  collapseKey?: string;
  channelId?: string;
};

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
