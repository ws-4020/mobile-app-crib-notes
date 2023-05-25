import messaging from '@react-native-firebase/messaging';
import axios, {AxiosError} from 'axios';
import {log} from 'bases/logging';
import {Box, StyledSafeAreaView, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {RemoveIllustration} from 'bases/ui/illustration/RemoveIllustration';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {useAccountData} from 'features/account/services/account/useAccountData';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import {ErrorResponse} from 'features/sandbox/apis/model';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Pressable, Switch} from 'react-native';

import {usePushNotificationSenderForm} from '../forms/usePushNotificationSenderForm';
import {getFcmToken} from '../services/getFcmToken';
import {notifyMessageToAll as callNotifyMessageToAll, PushNotificationParams} from '../services/notifyMessageToAll';
import {notifyMessageToMe as callNotifyMessageToMe} from '../services/notifyMessageToMe';

const channels = [
  {value: undefined, label: 'No channel'},
  {value: 'emergencyChannel', label: 'Emergency notification'},
  {value: 'highChannel', label: 'High notification'},
  {value: 'middleChannel', label: 'Middle notification'},
  {value: 'lowChannel', label: 'Low notification'},
];

const priorities = [
  // https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns
  {value: undefined, label: '選択しない'},
  {value: '1', label: 'Low'},
  {value: '5', label: 'Normal'},
  {value: '10', label: 'High'},
];

const interruptionLevels = [
  // https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification
  {value: undefined, label: '選択しない'},
  {value: 'passive', label: 'passive'},
  {value: 'active', label: 'active'},
  {value: 'time-sensitive', label: 'time-sensitive'},
  {value: 'critical', label: 'critical'},
];

export type PushNotificationSenderPageProps = {
  navigateToPushNotificationStatus: () => void;
};
export const PushNotificationSenderPage: React.FC<PushNotificationSenderPageProps> = ({
  navigateToPushNotificationStatus,
}) => {
  const {
    form,
    setFormDataKey,
    setFormContentAvailable,
    setFormPriority,
    setFormInterruptionLevel,
    setFormChannel,
    addDataField,
    removeDataField,
  } = usePushNotificationSenderForm();

  const {data: accountData} = useAccountData();

  const onSelectedPriorityChange = useCallback(
    (selectedItem?: Item<string | undefined>) => {
      return setFormPriority(selectedItem?.value);
    },
    [setFormPriority],
  );

  const onSelectedInterruptionLevelsKeyChange = useCallback(
    (selectedItem?: Item<string | undefined>) => {
      return setFormInterruptionLevel(selectedItem?.value);
    },
    [setFormInterruptionLevel],
  );

  const onSelectedChannelChange = useCallback(
    (selectedItem?: Item<string | undefined>) => {
      return setFormChannel(selectedItem?.value);
    },
    [setFormChannel],
  );

  const [isAllowedPermission, setIsAllowedPermission] = useState(false);
  const [fcmToken, setFcmToken] = useState<string>();
  useEffect(() => {
    messaging()
      .hasPermission()
      .then(status => {
        if (
          status === messaging.AuthorizationStatus.AUTHORIZED ||
          status === messaging.AuthorizationStatus.PROVISIONAL
        ) {
          setIsAllowedPermission(true);
        }
      })
      .catch(e => {
        log.trace(`Failed to get permission status. cause=[${String(e)}]`);
      });
    getFcmToken()
      .then(fcmToken => setFcmToken(fcmToken))
      .catch(e => {
        log.trace(`Failed to get token. cause=[${String(e)}]`);
      });
  }, []);

  const hasFcmToken = useMemo(() => {
    return !!fcmToken;
  }, [fcmToken]);

  const isRegisteredDeviceToken = useMemo(() => {
    return fcmToken ? accountData?.account.deviceTokens.includes(fcmToken) : false;
  }, [accountData?.account.deviceTokens, fcmToken]);

  const isReceivableOnThisDevice = useMemo(
    () => isAllowedPermission && hasFcmToken && isRegisteredDeviceToken,
    [hasFcmToken, isAllowedPermission, isRegisteredDeviceToken],
  );

  const notifyMessageToAll = useCallback(async () => {
    try {
      if (form.isValid) {
        // string型の入力項目は、空文字の場合は送信しないため除外する
        const filteredStringField = Object.entries(form.values)
          .filter(([_, value]) => {
            return typeof value === 'string' ? value : true;
          })
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {} as {[key: string]: any});
        // Data属性は、Keyが入力されていないものは送信しないため除外する
        const filteredData = form.values.data.filter(f => f.key);
        const params: PushNotificationParams = {...filteredStringField, data: filteredData};
        await callNotifyMessageToAll(params);
      }
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
  }, [form.isValid, form.values]);

  const notifyMessageToMe = useCallback(async () => {
    if (fcmToken) {
      // FCMトークンが取得できていない場合は、自分に送信ボタンが活性化しないため、必ず存在する想定
      try {
        await callNotifyMessageToMe(fcmToken, form.values.channelId);
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
    }
  }, [fcmToken, form.values.channelId]);

  return (
    <StyledSafeAreaView flex={1}>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic" p="p12">
        <SpecAndSourceCodeLink feature="push-notification" />
        <Box flex={1} height={1} px="p16" backgroundColor="grey1" />
        <StyledSpace height="p12" />
        <Text>【このデバイスのプッシュ通知受信可否】</Text>
        <Box p="p16">
          {isReceivableOnThisDevice ? (
            <Text>このデバイスでプッシュ通知を受信可能です。</Text>
          ) : (
            <StyledColumn gap="p2">
              <Text color="textRed" fontWeight="bold">
                このデバイスではプッシュ通知を受信できません。
              </Text>
              {!(isAllowedPermission && hasFcmToken) && (
                <StyledRow>
                  <StyledTouchableOpacity onPress={navigateToPushNotificationStatus}>
                    <Text color="blue">・設定を確認</Text>
                  </StyledTouchableOpacity>
                  <Text>してください。</Text>
                </StyledRow>
              )}
              {!isRegisteredDeviceToken && (
                <Text>・バックエンドAPIに存在しているアカウントで再ログインしてください。</Text>
              )}
            </StyledColumn>
          )}
        </Box>
        <Box flex={1} height={1} px="p16" backgroundColor="grey1" />
        <StyledSpace height="p12" />
        <Text>プッシュ通知として送るパラメータを入力してください。</Text>
        <Text>未入力の項目は、バックエンドに送信されません。</Text>
        <StyledSpace height="p12" />
        <Text>【共通設定】</Text>
        <StyledColumn p="p24" gap="p12">
          <WithLabel label="通知タイトル">
            <StyledTextInput
              value={form.values.notificationTitle}
              onChangeText={form.handleChange('notificationTitle')}
              borderBottomWidth={1}
              multiline
            />
          </WithLabel>
          <WithLabel label="通知ボディ">
            <StyledTextInput
              value={form.values.notificationBody}
              onChangeText={form.handleChange('notificationBody')}
              borderBottomWidth={1}
              multiline
            />
          </WithLabel>
          <WithLabel label="バッジ数">
            <StyledTextInput
              value={form.values.badgeCount}
              onChangeText={form.handleChange('badgeCount')}
              keyboardType="numeric"
              borderBottomWidth={1}
              errorMessage={form.errors.badgeCount}
            />
          </WithLabel>
          <WithLabel label="CollapseKey">
            <StyledTextInput
              value={form.values.collapseKey}
              onChangeText={form.handleChange('collapseKey')}
              borderBottomWidth={1}
            />
          </WithLabel>
          <StyledRow gap="p8" alignItems="center">
            <Text>データ属性の追加</Text>
            <Pressable onPress={addDataField}>
              <AddIllustration color="blue" />
            </Pressable>
          </StyledRow>
          <Text>{`Keyが未入力の項目は、バックエンドに送信されません。
Keyが入力されており、Valueが未入力の場合は送信されます。`}</Text>
          <StyledColumn>
            {form.values.data.map((d, index) => {
              return (
                <StyledRow key={`data-${index}`} gap="p24">
                  <Box flex={2}>
                    <StyledTextInput
                      value={d.key}
                      onChangeText={text => setFormDataKey(text, index)}
                      borderBottomWidth={1}
                      placeholder="Key"
                    />
                  </Box>
                  <Box flex={2}>
                    <StyledTextInput
                      value={d.value}
                      onChangeText={form.handleChange(`data[${index}.value]`)}
                      borderBottomWidth={1}
                      placeholder="Value"
                    />
                  </Box>
                  <StyledRow>
                    <Pressable>
                      <RemoveIllustration color="textRed" onPress={() => removeDataField(index)} />
                    </Pressable>
                  </StyledRow>
                </StyledRow>
              );
            })}
          </StyledColumn>
        </StyledColumn>
        <Text>【iOS設定】</Text>
        <StyledColumn p="p24" gap="p12">
          <StyledRow alignItems="center" justifyContent="space-between" gap="p4">
            <Text>content-available</Text>
            <Switch value={form.values.contentAvailable} onValueChange={setFormContentAvailable} />
          </StyledRow>
          <WithLabel label="Priority">
            <SelectPicker
              items={priorities}
              selectedItemKey={form.values.priority}
              onSelectedItemChange={onSelectedPriorityChange}
              textInputProps={{style: {borderBottomWidth: 1, borderBottomColor: 'gray'}}}
              textInputComponent={
                <StyledTextInput value={form.values.priority} borderBottomWidth={1} editable={false} />
              }
            />
          </WithLabel>
          <WithLabel label="InterruptionLevel">
            <SelectPicker
              items={interruptionLevels}
              selectedItemKey={form.values.interruptionLevel}
              onSelectedItemChange={onSelectedInterruptionLevelsKeyChange}
              textInputComponent={
                <StyledTextInput value={form.values.interruptionLevel} borderBottomWidth={1} editable={false} />
              }
            />
          </WithLabel>
          <WithLabel label="RelevanceScore">
            <StyledTextInput
              value={form.values.relevanceScore}
              onChangeText={form.handleChange('relevanceScore')}
              borderBottomWidth={1}
              errorMessage={form.errors.relevanceScore}
            />
          </WithLabel>
        </StyledColumn>
        <Text>【Android設定】</Text>
        <StyledColumn p="p24" gap="p12">
          <WithLabel label="チャンネル">
            <SelectPicker
              items={channels}
              selectedItemKey={form.values.channelId}
              onSelectedItemChange={onSelectedChannelChange}
              textInputComponent={
                <StyledTextInput value={form.values.channelId} borderBottomWidth={1} editable={false} />
              }
            />
          </WithLabel>
        </StyledColumn>
      </StyledScrollView>
      <StyledRow justifyContent="center" gap="p16">
        <StyledButton title="一斉送信" onPress={notifyMessageToAll} />
        <StyledButton
          title="自分に送信"
          opacity={isReceivableOnThisDevice ? 1 : 0.5}
          disabled={!isReceivableOnThisDevice}
          onPress={notifyMessageToMe}
        />
      </StyledRow>
    </StyledSafeAreaView>
  );
};

const WithLabel: React.FC<React.PropsWithChildren<{label: string}>> = ({label, children}) => {
  return (
    <StyledColumn>
      <Text>{label}</Text>
      <StyledRow>
        <StyledSpace width="p8" />
        <Box flex={1}>{children}</Box>
      </StyledRow>
    </StyledColumn>
  );
};
