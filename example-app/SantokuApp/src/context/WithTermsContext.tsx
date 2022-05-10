import {AppInitialData} from 'framework/initialize/types';
import {useIsMounted} from 'framework/utilities';
import React, {useCallback, useState} from 'react';

import {SetTermsAction, SetTermsContextProvider} from './useSetTermsContext';
import {TermsContext, TermsContextProvider} from './useTermsContext';

const initialTermsContext = {};

function WithTermsContext(props: {initialData: AppInitialData; children: React.ReactNode}) {
  const isMounted = useIsMounted();
  const [state, setState] = useState<TermsContext>(props.initialData.accountData.terms ?? initialTermsContext);

  const setStartup = useCallback(
    (setStateAction: SetTermsAction) => {
      if (isMounted()) {
        setState(setStateAction);
      }
    },
    [isMounted],
  );

  return (
    <TermsContextProvider value={state}>
      <SetTermsContextProvider value={setStartup}>{props.children}</SetTermsContextProvider>
    </TermsContextProvider>
  );
}

export {WithTermsContext};
