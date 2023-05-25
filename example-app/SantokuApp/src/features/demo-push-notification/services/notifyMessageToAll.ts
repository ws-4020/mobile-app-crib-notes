import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';

import {DataType} from '../types/DataType';

export type PushNotificationParams = {
  notificationTitle?: string;
  notificationBody?: string;
  badgeCount?: string;
  collapseKey?: string;
  data?: DataType[];
  contentAvailable?: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore?: string;
  channelId?: string;
};
export const notifyMessageToAll = (params: PushNotificationParams) =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`, params);
