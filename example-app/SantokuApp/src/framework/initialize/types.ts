import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

import {AccountData} from './helpers';

export interface AppInitialData {
  accountData: AccountData;
  notification?: FirebaseMessagingTypes.RemoteMessage;
}
