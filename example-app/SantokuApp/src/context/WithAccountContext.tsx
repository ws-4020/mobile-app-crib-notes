import {AppInitialData} from 'framework/initialize/types';
import {useIsMounted} from 'framework/utilities';
import React, {useCallback, useMemo} from 'react';

import {AccountContext, AccountContextProvider} from './useAccountContext';
import {AccountAction, DispatchAccountContextProvider} from './useDispatchAccountContext';

const reducer = (prevState: AccountContext, action: AccountAction) => {
  switch (action.type) {
    case 'login':
      return {...prevState, account: action.account, isLoggedIn: true};
    case 'logout':
      return {...prevState, account: undefined, isLoggedIn: false};
  }
};

function WithAccountContext(props: {initialData: AppInitialData; children: React.ReactNode}) {
  const isMounted = useIsMounted();
  const initialAccount = useMemo(() => {
    const account = props.initialData.accountData.account;
    return account ? {account, isLoggedIn: true} : {isLoggedIn: false};
  }, [props.initialData.accountData.account]);

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
      <DispatchAccountContextProvider value={dispatchAccount}>{props.children}</DispatchAccountContextProvider>
    </AccountContextProvider>
  );
}

export {WithAccountContext};
