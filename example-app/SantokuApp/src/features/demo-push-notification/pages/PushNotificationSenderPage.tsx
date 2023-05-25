import {Box, StyledSafeAreaView, StyledScrollView, StyledTouchableOpacity, Text} from 'bases/ui/common';
import {StyledButton} from 'bases/ui/common/StyledButton';
import {StyledColumn} from 'bases/ui/common/StyledColumn';
import {StyledRow} from 'bases/ui/common/StyledRow';
import {StyledSpace} from 'bases/ui/common/StyledSpace';
import {StyledTextInput} from 'bases/ui/common/StyledTextInput';
import {AddIllustration} from 'bases/ui/illustration/AddIllustration';
import {RemoveIllustration} from 'bases/ui/illustration/RemoveIllustration';
import {Item, SelectPicker} from 'bases/ui/picker/SelectPicker';
import {SpecAndSourceCodeLink} from 'features/demo-github-link/components/SpecAndSourceCodeLink';
import React, {useCallback} from 'react';
import {Pressable, Switch} from 'react-native';

import {usePushNotificationSenderForm} from '../forms/usePushNotificationSenderForm';

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

  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Box flex={1} p="p12">
          <SpecAndSourceCodeLink feature="push-notification" />
          <Box flex={1} height={1} px="p16" backgroundColor="grey1" />
          <StyledSpace height="p12" />
          <Text>【このデバイスのプッシュ通知受信可否】</Text>
          <Box p="p16">
            <Text color="textRed" fontWeight="bold">
              このデバイスではプッシュ通知を受信できません。
              <StyledRow>
                <StyledTouchableOpacity onPress={navigateToPushNotificationStatus}>
                  <Text color="blue">設定を確認</Text>
                </StyledTouchableOpacity>
                <Text>してください。</Text>
              </StyledRow>
            </Text>
          </Box>
          <Box flex={1} height={1} px="p16" backgroundColor="grey1" />
          <StyledSpace height="p12" />
          <Text>プッシュ通知として送るパラメータを入力してください。</Text>
          <Text>未入力の項目は、バックエンドに送信されません。</Text>
          <StyledSpace height="p12" />
          <Text>【共通設定】</Text>
          <StyledColumn p="p24" gap="p12">
            <StyledTextInput
              value={form.values.notificationTitle}
              onChangeText={form.handleChange('notificationTitle')}
              borderBottomWidth={1}
              multiline
              placeholder="通知タイトルを入力してください"
            />
            <StyledTextInput
              value={form.values.notificationBody}
              onChangeText={form.handleChange('notificationBody')}
              borderBottomWidth={1}
              multiline
              placeholder="通知ボディを入力してください"
            />
            <StyledTextInput
              value={form.values.badgeCount}
              onChangeText={form.handleChange('badgeCount')}
              keyboardType="numeric"
              borderBottomWidth={1}
              errorMessage={form.errors.badgeCount}
              placeholder="バッチ数を入力してください"
            />
            <StyledTextInput
              value={form.values.collapseKey}
              onChangeText={form.handleChange('collapseKey')}
              borderBottomWidth={1}
              placeholder="CollapseKeyを入力してください"
            />
            <StyledRow space="p8" alignItems="center">
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
                  <StyledRow key={`data-${index}`} space="p24">
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
            <SelectPicker
              items={priorities}
              selectedItemKey={form.values.priority}
              onSelectedItemChange={onSelectedPriorityChange}
              textInputProps={{style: {borderBottomWidth: 1, borderBottomColor: 'gray'}}}
              textInputComponent={
                <StyledTextInput
                  value={form.values.priority}
                  borderBottomWidth={1}
                  editable={false}
                  placeholder="Priorityを選択してください"
                />
              }
            />
            <SelectPicker
              items={interruptionLevels}
              selectedItemKey={form.values.interruptionLevel}
              onSelectedItemChange={onSelectedInterruptionLevelsKeyChange}
              textInputComponent={
                <StyledTextInput
                  value={form.values.interruptionLevel}
                  borderBottomWidth={1}
                  editable={false}
                  placeholder="InterruptionLevelを選択してください"
                />
              }
            />
            <StyledTextInput
              value={form.values.relevanceScore}
              onChangeText={form.handleChange('relevanceScore')}
              borderBottomWidth={1}
              errorMessage={form.errors.relevanceScore}
              placeholder="RelevanceScoreを入力してください"
            />
          </StyledColumn>
          <Text>【Android設定】</Text>
          <StyledColumn p="p24" gap="p12">
            <SelectPicker
              items={channels}
              selectedItemKey={form.values.channel}
              onSelectedItemChange={onSelectedChannelChange}
              textInputComponent={
                <StyledTextInput
                  value={form.values.channel}
                  borderBottomWidth={1}
                  editable={false}
                  placeholder="チャンネルを選択してください"
                />
              }
            />
          </StyledColumn>
          <StyledRow justifyContent="center" gap="p16">
            <StyledButton title="一斉送信" />
            <StyledButton title="自分に送信" />
          </StyledRow>
        </Box>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};
