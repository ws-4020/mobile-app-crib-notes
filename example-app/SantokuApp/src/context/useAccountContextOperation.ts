import {createUseContextAndProvider, useIsMounted} from 'framework/utilities';
import {Account} from 'generated/backend/model';
import React, {Reducer, useMemo} from 'react';

import {AccountContext, Terms} from './useAccountContext';

export const [useAccountContextOperation, AccountContextOperationProvider] =
  createUseContextAndProvider<ReturnType<typeof useAccountOperation>>();

export type AccountAction =
  | {type: 'login'; payload: {account: Account; terms: Terms}}
  | {type: 'logout'}
  | {type: 'agreedToTerms'; payload: {agreedVersion: string}};
export type AccountDispatch = React.Dispatch<AccountAction>;

export const accountContextReducer: Reducer<AccountContext, AccountAction> = (prevState, action) => {
  switch (action.type) {
    case 'login':
      return {account: action.payload.account, terms: action.payload.terms, isLoggedIn: true};
    case 'logout':
      return {isLoggedIn: false};
    case 'agreedToTerms':
      return {
        ...prevState,
        terms: {termsAgreementStatus: {hasAgreed: true, agreedVersion: action.payload.agreedVersion}},
      };
  }
};

const createLoginAction = (dispatch: AccountDispatch, isMounted: () => boolean) => (account: Account, terms: Terms) => {
  if (isMounted()) {
    dispatch({
      type: 'login',
      payload: {
        account,
        terms,
      },
    });
  }
};

const createLogoutAction = (dispatch: AccountDispatch, isMounted: () => boolean) => () => {
  if (isMounted()) {
    dispatch({type: 'logout'});
  }
};

const createAgreedTermsAction = (dispatch: AccountDispatch, isMounted: () => boolean) => (agreedVersion: string) => {
  if (isMounted()) {
    dispatch({type: 'agreedToTerms', payload: {agreedVersion}});
  }
};

export const useAccountOperation = (initialAccountContext: AccountContext, dispatch: AccountDispatch) => {
  const isMounted = useIsMounted();
  return useMemo(
    () => ({
      login: createLoginAction(dispatch, isMounted),
      logout: createLogoutAction(dispatch, isMounted),
      agreedToTerms: createAgreedTermsAction(dispatch, isMounted),
    }),
    [dispatch, isMounted],
  );
};
