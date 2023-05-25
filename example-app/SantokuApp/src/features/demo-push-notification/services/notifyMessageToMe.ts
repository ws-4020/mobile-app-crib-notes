import axios from 'axios';
import {AppConfig} from 'bases/core/configs/AppConfig';

import {PushNotificationParamsType} from '../types/PushNotificationParamsType';

export const notifyMessageToMe = (token: string, params: PushNotificationParamsType) =>
  axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`, params);
