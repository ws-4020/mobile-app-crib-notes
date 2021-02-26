import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import {AppConfig} from '../../AppConfig';

export interface PushNotificationService {
  getToken: () => Promise<string | undefined>;
  subscribeToTopic: (topic: string, token: string) => Promise<any>;
  sendMessage: (message: Message) => Promise<any>;
  sendTopic: (message: Publish) => Promise<any>;
}

async function getToken(): Promise<string | undefined> {
  const permission = await messaging().hasPermission();
  if (canNotify(permission)) {
    return messaging().getToken();
  }
  if (permission === messaging.AuthorizationStatus.DENIED) {
    return undefined;
  }
  const newPermission = await messaging().requestPermission();
  if (canNotify(newPermission)) {
    return messaging().getToken();
  }
  return undefined;
}

function canNotify(permission: number) {
  return permission === messaging.AuthorizationStatus.AUTHORIZED || permission === messaging.AuthorizationStatus.PROVISIONAL;
}

function subscribeToTopic(topic: string, token: string) {
  return post('/subscribe', {topic, token});
}

function sendMessage(message: Message) {
  return post('/messages', message);
}

function sendTopic(message: Publish) {
  return post('/publish', message);
}

function post(path: string, message: any) {
  return axios.post(`${AppConfig.BACKEND_API_URI}/${path}`, JSON.stringify(message), {
    headers: {
      'x-functions-key': AppConfig.BACKEND_API_KEY,
      'Content-Type': 'application/json',
    },
  });
}

type Notification = {
  title: string;
  body: string;
};

type Data = {
  text: string;
};

export type Publish = {
  topic: string;
  notification: Notification;
  data: Data;
};

export type Message = {
  token: string;
  notification: Notification;
  data: Data;
};

export const pushNotificationService: PushNotificationService = {
  getToken,
  subscribeToTopic,
  sendMessage,
  sendTopic,
};
