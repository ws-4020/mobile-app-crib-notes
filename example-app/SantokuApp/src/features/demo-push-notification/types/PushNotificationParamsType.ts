import {DataType} from './DataType';

export type PushNotificationParamsType = {
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
