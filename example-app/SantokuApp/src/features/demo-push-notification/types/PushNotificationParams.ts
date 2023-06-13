import {Data} from './Data';

export type PushNotificationParams = {
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
