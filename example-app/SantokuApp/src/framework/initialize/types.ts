import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {Account} from 'generated/backend/model';

export interface AppInitialData {
  accountData: AccountData;
  notification?: FirebaseMessagingTypes.RemoteMessage;
}

interface AccountData {
  account?: Account;
  terms?: TermsAgreement;
}

type TermsAgreement = {
  hasAgreedValidTermsOfService: boolean;
  agreedTermsOfServiceVersion: string;
};
