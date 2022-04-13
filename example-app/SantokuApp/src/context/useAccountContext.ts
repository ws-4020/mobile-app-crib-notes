import {createUseContextAndProvider} from 'framework/utilities';
import {Account} from 'generated/backend/model';

export type AccountContext = {
  account?: Account;
  isLoggedIn: boolean;
};
export const [useAccountContext, AccountContextProvider] = createUseContextAndProvider<AccountContext>();
