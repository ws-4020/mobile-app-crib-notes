import {AccountContextProvider, Terms} from 'features/account/contexts/useAccountContext';
import {
  AccountContextOperationProvider,
  accountContextReducer,
  useAccountOperation,
} from 'features/account/contexts/useAccountContextOperation';
import {Account} from 'features/backend/apis/model/account';
import React from 'react';

type AccountData = {
  account?: Account;
  terms?: Terms;
};
type Props = {
  accountData: AccountData;
};
const WithAccountContextMock: React.FC<Props> = ({accountData, children}) => {
  const account = accountData.account;
  const terms = accountData.terms;
  const initialAccountContext = account ? {account, terms, isLoggedIn: true} : {isLoggedIn: false};

  const [state, dispatch] = React.useReducer(accountContextReducer, initialAccountContext);
  const operations = useAccountOperation(initialAccountContext, dispatch);

  return (
    <AccountContextProvider value={state}>
      <AccountContextOperationProvider value={operations}>{children}</AccountContextOperationProvider>
    </AccountContextProvider>
  );
};

export {WithAccountContextMock};
