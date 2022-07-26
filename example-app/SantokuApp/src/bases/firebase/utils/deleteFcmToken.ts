import messaging from '@react-native-firebase/messaging';
import {ApplicationError} from 'bases/core/error/ApplicationError';

import {firebaseConfig} from '../configs/FirebaseConfig';

export const deleteFcmToken = async () => {
  if (!firebaseConfig.isDummy) {
    try {
      return await messaging().deleteToken();
    } catch (e) {
      throw new DeleteFcmTokenError('Failed to delete fcm token.', e);
    }
  }
};

export class DeleteFcmTokenError extends ApplicationError {}

export function isDeleteFcmTokenError(error: unknown): error is DeleteFcmTokenError {
  return error instanceof DeleteFcmTokenError;
}
