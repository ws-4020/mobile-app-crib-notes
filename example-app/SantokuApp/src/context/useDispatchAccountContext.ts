import {createUseContextAndProvider} from 'framework/utilities';
import {Account} from 'generated/backend/model';
import React from 'react';

export type AccountAction = {type: 'login'; account: Account} | {type: 'logout'};
export type AccountDispatch = React.Dispatch<AccountAction>;

export const [useDispatchAccountContext, DispatchAccountContextProvider] =
  createUseContextAndProvider<AccountDispatch>();
