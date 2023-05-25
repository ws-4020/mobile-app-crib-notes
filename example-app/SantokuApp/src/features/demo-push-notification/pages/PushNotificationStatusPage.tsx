import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {log} from 'bases/logging';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {Item} from 'bases/ui/picker/SelectPicker';
import {ErrorResponse} from 'features/sandbox/apis/model';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {StyledButton} from '../../../bases/ui/common/StyledButton';
import {StyledColumn} from '../../../bases/ui/common/StyledColumn';
import {StyledRow} from '../../../bases/ui/common/StyledRow';
import {getFcmToken} from '../services/getFcmToken';
import {notifyMessageToAll as callNotifyMessageToAll} from '../services/notifyMessageToAll';
import {notifyMessageToMe as callNotifyMessageToMe} from '../services/notifyMessageToMe';
import {openSettings} from '../services/openSettings';
import {requestUserPermission as requestUserPermissionService} from '../services/requestUserPermission';

type PermissionAuthStatusType = 'NOT_DETERMINED' | 'DENIED' | 'AUTHORIZED' | 'PROVISIONAL';

const channels = [
  {value: undefined, label: 'No channel'},
  {value: 'emergencyChannel', label: 'Emergency notification'},
  {value: 'highChannel', label: 'High notification'},
  {value: 'middleChannel', label: 'Middle notification'},
  {value: 'lowChannel', label: 'Low notification'},
];

export const PushNotificationStatusPage: React.FC = () => {
  const [permissionAuthStatus, setPermissionAuthStatus] = useState<PermissionAuthStatusType>();
  const [token, setToken] = useState<string>();

  const [channelKey, setChannelKey] = useState<string>();
  const onSelectedChannelChange = useCallback((selectedItem?: Item<string | undefined>) => {
    setChannelKey(selectedItem?.value);
  }, []);

  const getPermissionAuthStatusForDisplay = useCallback(
    (permissionAuthStatus: FirebaseMessagingTypes.AuthorizationStatus) => {
      switch (permissionAuthStatus) {
        case messaging.AuthorizationStatus.NOT_DETERMINED:
          return 'NOT_DETERMINED';
        case messaging.AuthorizationStatus.DENIED:
          return 'DENIED';
        case messaging.AuthorizationStatus.AUTHORIZED:
          return 'AUTHORIZED';
        case messaging.AuthorizationStatus.PROVISIONAL:
          return 'PROVISIONAL';
      }
    },
    [],
  );

  const getPermissionAuthStatus = useCallback(async () => {
    const permissionAuthStatus = await messaging().hasPermission();
    setPermissionAuthStatus(getPermissionAuthStatusForDisplay(permissionAuthStatus));
  }, [getPermissionAuthStatusForDisplay]);

  const requestUserPermission = useCallback(
    async (options?: FirebaseMessagingTypes.IOSPermissions) => {
      const permissionAuthStatus = await requestUserPermissionService(options);
      setPermissionAuthStatus(getPermissionAuthStatusForDisplay(permissionAuthStatus));
    },
    [getPermissionAuthStatusForDisplay],
  );

  const requestUserPermissionWithoutOptions = useCallback(async () => {
    await requestUserPermission();
  }, [requestUserPermission]);

  const requestUserPermissionWithProvisional = useCallback(async () => {
    await requestUserPermission({provisional: true});
  }, [requestUserPermission]);

  const getToken = useCallback(async () => {
    const fcmToken = await getFcmToken();
    setToken(fcmToken);
  }, []);

  const notifyMessageToAll = useCallback(async () => {
    try {
      await callNotifyMessageToAll(channelKey);
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
        await callNotifyMessageToMe(token, channelKey);
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

  useEffect(() => {
    getPermissionAuthStatus().catch(e => log.trace(`Failed to get permission status. cause=[${String(e)}]`));
    getToken().catch(e => log.trace(`Failed to get token. cause=[${String(e)}]`));
  }, [getPermissionAuthStatus, getToken]);

  return (
    <StyledSafeAreaView style={styles.container}>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex={1} p="p12">
          <Text>【Permission】</Text>
          <StyledColumn p="p24" space="p12">
            <Text>現在のステータス：{permissionAuthStatus ?? 'Permissionのステータスが表示されます。'}</Text>
            <StyledRow justifyContent="center" space="p16">
              <StyledButton onPress={requestUserPermissionWithoutOptions} title="許可" />
              <StyledButton onPress={requestUserPermissionWithProvisional} title="仮許可" />
            </StyledRow>
            <Text>
              一度でも許可ダイアログで許可もしくは拒否すると、それ以降はステータスを`PROVISIONAL`に変更できなくなります。
            </Text>
          </StyledColumn>
          <Text>【FCM登録トークン】</Text>
          <StyledColumn p="p24">
            <Text selectable>
              {token ??
                `FCM登録トークンは発行されていません。
Firebaseの設定ファイルが正しくない可能性があります。`}
            </Text>
          </StyledColumn>
          <Text>【通知設定】</Text>
          <StyledColumn p="p24" space="p12">
            <Text>OSのアプリ設定画面に遷移します。</Text>
            <StyledRow justifyContent="center">
              <StyledButton onPress={openSettings} title="アプリの設定画面を開く" />
            </StyledRow>
          </StyledColumn>
        </Box>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  notificationMessageContainer: {},
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  elementContainer: {
    padding: 20,
  },
});
