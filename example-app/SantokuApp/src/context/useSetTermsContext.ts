import {createUseContextAndProvider} from 'framework/utilities';
import React from 'react';

import {TermsContext} from './useTermsContext';

export type SetTermsAction = React.SetStateAction<TermsContext>;
export type TermsDispatch = React.Dispatch<SetTermsAction>;

export const [useSetTermsContext, SetTermsContextProvider] = createUseContextAndProvider<TermsDispatch>();
