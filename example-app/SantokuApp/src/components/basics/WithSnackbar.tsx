import React, {Dispatch, SetStateAction, useContext, useMemo, useState} from 'react';

import {Snackbar, SnackbarProp} from './Snackbar';

type SnackbarContextType = {
  show: Dispatch<SetStateAction<SnackbarProp>>;
};

const SnackbarContext = React.createContext<SnackbarContextType>({show: () => {}});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function WithSnackbar(props: {initialState?: SnackbarProp; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProp>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo(() => ({show: setState}), []);
  return (
    <SnackbarContext.Provider value={snackbarContext}>
      <Snackbar {...state}>{props.children}</Snackbar>
    </SnackbarContext.Provider>
  );
}
