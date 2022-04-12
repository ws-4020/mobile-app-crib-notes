import {createUseContextAndProvider} from 'framework/utilities';
import {Account} from 'generated/backend/model';
import React from 'react';

export type SetAccountAction = React.SetStateAction<Account | undefined>;
export type AccountDispatch = React.Dispatch<SetAccountAction>;

export const [useSetAccountContext, SetAccountContextProvider] = createUseContextAndProvider<AccountDispatch>();
