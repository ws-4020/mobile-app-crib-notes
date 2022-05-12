import {useIsMounted} from 'framework/utilities';
import React, {Reducer, useCallback, useMemo} from 'react';

import {AccountDataDependingComponent} from '../framework/initialize/withAccountData';
import {AccountContext, AccountContextProvider} from './useAccountContext';
import {AccountAction, DispatchAccountContextProvider} from './useDispatchAccountContext';

const reducer: Reducer<AccountContext, AccountAction> = (prevState, action) => {
  switch (action.type) {
    case 'login':
      return {account: action.account, isLoggedIn: true};
    case 'logout':
      return {isLoggedIn: false};
  }
};

const WithAccountContext: AccountDataDependingComponent = ({accountData, children}) => {
  const isMounted = useIsMounted();
  const initialAccount = useMemo(() => {
    const account = accountData.account;
    return account ? {account, isLoggedIn: true} : {account: undefined, isLoggedIn: false};
  }, [accountData.account]);

  const [state, dispatch] = React.useReducer(reducer, initialAccount);
  const dispatchAccount = useCallback(
    (action: AccountAction) => {
      if (isMounted()) {
        dispatch(action);
      }
    },
    [isMounted],
  );
  return (
    <AccountContextProvider value={state}>
      <DispatchAccountContextProvider value={dispatchAccount}>{children}</DispatchAccountContextProvider>
    </AccountContextProvider>
  );
};

export {WithAccountContext};
