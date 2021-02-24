import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';

export interface PushNotificationService {
  getToken: () => Promise<string>;
  subscribeToTopic: (topic: string) => Promise<void>;
  sendMessage: (message: FirebaseMessagingTypes.RemoteMessage) => Promise<void>;
}

async function getToken(): Promise<string> {
  const permission = await messaging().hasPermission();
  const authorized = permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.PROVISIONAL;
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

function subscribeToTopic(topic: string) {
  return messaging().subscribeToTopic(topic);
}

function sendMessage(message: FirebaseMessagingTypes.RemoteMessage) {
  return messaging().sendMessage(message);
}

export const pushNotificationService: PushNotificationService = {
  getToken,
  subscribeToTopic,
  sendMessage,
};
