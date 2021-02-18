import messaging from '@react-native-firebase/messaging';

export interface PushNotificationService {
  getToken: () => Promise<string>;
}

async function getToken(): Promise<string> {
  const permission = await messaging().hasPermission();
  const authorized = permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.NOT_DETERMINED;
  if (authorized) {
    return messaging().getToken();
  }
  if (await requestUserPermission()) {
    return messaging().getToken();
  }
  return Promise.reject('Not Authroized');
}

async function requestUserPermission() {
  const authorizationStatus = await messaging().requestPermission();
  return authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED;
}

export const pushNotificationService: PushNotificationService = {
  getToken,
};
