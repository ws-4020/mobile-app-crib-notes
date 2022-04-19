import {AppInitialData} from 'framework/initialize/types';
import {useIsMounted} from 'framework/utilities';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {Account} from '../generated/backend/model';
import {AccountContext, AccountContextProvider} from './useAccountContext';
import {SetAccountAction, SetAccountContextProvider} from './useSetAccountContext';

function WithAccountContext(props: {initialData: AppInitialData; children: React.ReactNode}) {
  const isMounted = useIsMounted();
  const initialAccount = useMemo(() => {
    const account = props.initialData.accountData.account;
    return account ? {account, isLoggedIn: true} : {isLoggedIn: false};
  }, [props.initialData.accountData.account]);

  const [state, setState] = useState<AccountContext>(initialAccount);
  // setAccountがstateの値によって再作成されないように、Refとして持っておく
  const ref = useRef<Account>();
  useEffect(() => {
    ref.current = state.account;
  }, [state.account]);

  const setAccount = useCallback(
    (setStateAction: SetAccountAction) => {
      if (isMounted()) {
        const account = typeof setStateAction === 'function' ? setStateAction(ref.current) : setStateAction;
        setState({
          account,
          isLoggedIn: !!account,
        });
      }
    },
    [isMounted],
  );

  return (
    <AccountContextProvider value={state}>
      <SetAccountContextProvider value={setAccount}>{props.children}</SetAccountContextProvider>
    </AccountContextProvider>
  );
}

export {WithAccountContext};
