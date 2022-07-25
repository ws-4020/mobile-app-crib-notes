import messaging from '@react-native-firebase/messaging';

import {ApplicationError} from '../../core/error/ApplicationError';
import {firebaseConfig} from '../FirebaseConfig';

export const getFcmToken = async () => {
  if (!firebaseConfig.isDummy) {
    try {
      return await messaging().getToken();
    } catch (e) {
      throw new GetFcmTokenError('Failed to get fcm token.', e);
    }
  }
};

export class GetFcmTokenError extends ApplicationError {}

export function isGetFcmTokenError(error: unknown): error is GetFcmTokenError {
  return error instanceof GetFcmTokenError;
}
