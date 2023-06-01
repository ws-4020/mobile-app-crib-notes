import {DataType} from './DataType';

export type PushNotificationParamsType = {
  notificationTitle?: string;
  notificationBody?: string;
  data?: DataType[];
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
