import {DataType} from './DataType';

export type PushNotificationParamsType = {
  notificationTitle?: string;
  notificationBody?: string;
  collapseKey?: string;
  data?: DataType[];
  badge?: string;
  contentAvailable?: boolean;
  priority?: string;
  interruptionLevel?: string;
  relevanceScore?: string;
  notificationCount?: string;
  channelId?: string;
};
