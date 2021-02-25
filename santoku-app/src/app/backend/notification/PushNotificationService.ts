/* eslint-disable prettier/prettier */
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import {AppConfig} from '../../AppConfig';

export interface PushNotificationService {
  getToken: () => Promise<string | undefined>;
  subscribeToTopic: (topic: string) => Promise<void>;
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

function subscribeToTopic(topic: string) {
  return messaging().subscribeToTopic(topic);
}

function sendMessage(message: Message) {
  return axios.post(`${AppConfig.BACKEND_API_URI}/messages`, JSON.stringify(message), {
    headers : {
      'x-functions-key': AppConfig.BACKEND_API_KEY,
      'Content-Type': 'application/json',
    },
  });
}

async function sendTopic(message: Publish) {
  console.log(AppConfig.BACKEND_API_URI);
  return axios.post(`${AppConfig.BACKEND_API_URI}/publish`, JSON.stringify(message), {
    headers : {
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
