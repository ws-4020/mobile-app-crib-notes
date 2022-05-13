import {createUseContextAndProvider, useIsMounted} from 'framework/utilities';
import {Account} from 'generated/backend/model';
import React, {Reducer, useMemo} from 'react';

import {AccountContext} from './useAccountContext';

export const [useAccountContextOperation, AccountContextOperationProvider] =
  createUseContextAndProvider<ReturnType<typeof useAccountOperation>>();

export type AccountAction = {type: 'login'; payload: {account: Account}} | {type: 'logout'};
export type AccountDispatch = React.Dispatch<AccountAction>;

export const accountContextReducer: Reducer<AccountContext, AccountAction> = (prevState, action) => {
  switch (action.type) {
    case 'login':
      return {account: action.payload.account, isLoggedIn: true};
    case 'logout':
      return {isLoggedIn: false};
  }
};

const createLoginAction = (dispatch: AccountDispatch, isMounted: () => boolean) => (account: Account) => {
  if (isMounted()) {
    dispatch({
      type: 'login',
      payload: {
        account,
      },
    });
  }
};

const createLogoutAction = (dispatch: AccountDispatch, isMounted: () => boolean) => () => {
  if (isMounted()) {
    dispatch({type: 'logout'});
  }
};

export const useAccountOperation = (initialAccountContext: AccountContext, dispatch: AccountDispatch) => {
  const isMounted = useIsMounted();
  return useMemo(
    () => ({
      login: createLoginAction(dispatch, isMounted),
      logout: createLogoutAction(dispatch, isMounted),
    }),
    [dispatch, isMounted],
  );
};
