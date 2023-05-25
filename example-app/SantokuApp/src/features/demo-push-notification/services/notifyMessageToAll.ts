import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';

import {PushNotificationParamsType} from '../types/PushNotificationParamsType';
export const notifyMessageToAll = (params: PushNotificationParamsType) =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`, params);
