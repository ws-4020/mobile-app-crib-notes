import {AccountContextProvider} from 'features/account/contexts/useAccountContext';
import {
  AccountContextOperationProvider,
  accountContextReducer,
  useAccountOperation,
} from 'features/account/contexts/useAccountContextOperation';
import React from 'react';

import {AccountDataDependingComponent} from '../components/withAccountData';

const WithAccountContext: AccountDataDependingComponent = ({accountData, children}) => {
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

export {WithAccountContext};
