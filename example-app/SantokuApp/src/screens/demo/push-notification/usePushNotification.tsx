import messaging from '@react-native-firebase/messaging';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {AppConfig} from 'framework/config';
import {ErrorResponse} from 'generated/backend/model';
import {useCallback, useState} from 'react';
import {Linking, Platform} from 'react-native';

import {Item} from '../../../components/picker';

type AuthStatusType = 'NOT_DETERMINED' | 'DENIED' | 'AUTHORIZED' | 'PROVISIONAL';

const openSettings = async () => {
  if (Platform.OS === 'ios') {
    // アプリの設定画面を開きます。
    await Linking.openSettings();
  } else if (Platform.OS === 'android') {
    // 以下のようにLinking.sendIntentを使用することで、アプリの通知設定画面を表示できる想定でした。
    // https://reactnative.dev/docs/linking#send-intents-android
    // しかし、React Nativeの0.67未満では、Linking.sendIntentの不具合により、インテントを実行できないようです。
    // https://github.com/facebook/react-native/pull/29000
    // そのため、アプリの設定画面を開きます。
    await Linking.openSettings();
  }
};

const channels = [
  {value: undefined, label: 'チャンネル指定なし'},
  {value: 'emergencyChannel', label: '重要度:緊急チャンネル'},
  {value: 'highChannel', label: '重要度:高チャンネル'},
  {value: 'middleChannel', label: '重要度:中チャンネル'},
  {value: 'lowChannel', label: '重要度:低チャンネル'},
];

export const usePushNotification = () => {
  const [authStatus, setAuthStatus] = useState<AuthStatusType>();
  const [token, setToken] = useState<string>();

  const [channelKey, setChannelKey] = useState<string>();
  const onSelectedChannelChange = useCallback((selectedItem?: Item<string | undefined>) => {
    setChannelKey(selectedItem?.value);
  }, []);

  const getPermissionStatusForDisplay = useCallback((authStatus: FirebaseMessagingTypes.AuthorizationStatus) => {
    switch (authStatus) {
      case messaging.AuthorizationStatus.NOT_DETERMINED:
        return 'NOT_DETERMINED';
      case messaging.AuthorizationStatus.DENIED:
        return 'DENIED';
      case messaging.AuthorizationStatus.AUTHORIZED:
        return 'AUTHORIZED';
      case messaging.AuthorizationStatus.PROVISIONAL:
        return 'PROVISIONAL';
    }
  }, []);

  const getPermissionStatus = useCallback(async () => {
    const authStatus = await messaging().hasPermission();
    setAuthStatus(getPermissionStatusForDisplay(authStatus));
  }, [getPermissionStatusForDisplay]);

  const requestUserPermission = useCallback(
    async (options?: FirebaseMessagingTypes.IOSPermissions) => {
      const authStatus = await messaging().requestPermission(options);
      setAuthStatus(getPermissionStatusForDisplay(authStatus));
    },
    [getPermissionStatusForDisplay],
  );

  const requestUserPermissionWithoutOptions = useCallback(async () => {
    await requestUserPermission();
  }, [requestUserPermission]);

  const requestUserPermissionWithProvisional = useCallback(async () => {
    await requestUserPermission({provisional: true});
  }, [requestUserPermission]);

  const getToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    setToken(fcmToken);
  }, []);

  const notifyMessageToAll = useCallback(async () => {
    try {
      await axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/all`, {channelId: channelKey});
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          alert(axiosError.response.data.message);
          return;
        }
        alert(e);
      }
    }
  }, [channelKey]);

  const notifyMessageToMe = useCallback(async () => {
    if (token) {
      try {
        await axios.put(`${AppConfig.santokuAppBackendUrl}/api/sandbox/push-notification/single/${token}`, {
          channelId: channelKey,
        });
      } catch (e) {
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError<ErrorResponse>;
          if (axiosError.response) {
            alert(axiosError.response.data.message);
            return;
          }
          alert(e);
        }
      }
      return;
    }
    alert('FCM登録トークンを取得してください');
  }, [channelKey, token]);

  return {
    authStatus,
    token,
    getPermissionStatus,
    requestUserPermissionWithoutOptions,
    requestUserPermissionWithProvisional,
    getToken,
    notifyMessageToAll,
    notifyMessageToMe,
    openSettings,
    channels,
    channelKey,
    onSelectedChannelChange,
  };
};
