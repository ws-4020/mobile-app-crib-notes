import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import messaging from '@react-native-firebase/messaging';
import {log} from 'bases/logging';
import {Box, StyledSafeAreaView, StyledScrollView, Text} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import React, {useCallback, useEffect, useState} from 'react';

import {getFcmToken} from '../services/getFcmToken';
import {openSettings} from '../services/openSettings';
import {requestUserPermission as requestUserPermissionService} from '../services/requestUserPermission';
import {PermissionAuthStatus} from '../types/PermissionAuthStatus';

export const PushNotificationStatusPage: React.FC = () => {
  const [permissionAuthStatus, setPermissionAuthStatus] = useState<PermissionAuthStatus>();
  const [token, setToken] = useState<string>();

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

  useEffect(() => {
    getPermissionAuthStatus().catch(e => log.trace(`Failed to get permission status. cause=[${String(e)}]`));
    getToken().catch(e => log.trace(`Failed to get token. cause=[${String(e)}]`));
  }, [getPermissionAuthStatus, getToken]);

  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex={1} p="p12">
          <Text>【Permission】</Text>
          <StyledColumn p="p24" gap="p12">
            <Text>現在のステータス：{permissionAuthStatus ?? 'Permissionのステータスが表示されます。'}</Text>
            <StyledRow justifyContent="center" gap="p16">
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
          <StyledColumn p="p24" gap="p12">
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
