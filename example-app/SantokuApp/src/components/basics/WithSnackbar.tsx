import React, {Dispatch, DispatchWithoutAction, SetStateAction, useContext, useMemo, useState} from 'react';

import {Snackbar, SnackbarProps, SnackbarShowProps} from './Snackbar';

type SnackbarContextType = {
  show: Dispatch<SetStateAction<SnackbarShowProps>>;
  hide: DispatchWithoutAction;
};

const SnackbarContext = React.createContext<SnackbarContextType>({show: () => {}, hide: () => {}});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo(() => ({show: setState, hide: () => setState({...state, hide: true})}), []);
  return (
    <SnackbarContext.Provider value={snackbarContext}>
      <Snackbar {...state}>{props.children}</Snackbar>
    </SnackbarContext.Provider>
  );
}
