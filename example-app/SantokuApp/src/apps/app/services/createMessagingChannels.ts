import notifee from '@notifee/react-native';
import {messagingChannels} from 'features/push-notification/constants/messagingChannels';
export const createMessagingChannels = async () => {
  await notifee.createChannels(messagingChannels);
};
