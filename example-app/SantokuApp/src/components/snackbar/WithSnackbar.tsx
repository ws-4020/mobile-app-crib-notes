import {m} from 'framework';
import React, {Dispatch, SetStateAction, useContext, useMemo, useState} from 'react';

import {Snackbar, SnackbarHideProps, SnackbarProps, SnackbarShowProps} from './Snackbar';

type SnackbarHideContextProps = Omit<SnackbarHideProps, 'hide'>;
type SnackbarShowCloseButtonContextProps = Omit<SnackbarShowProps, 'actionText' | 'actionHandler'>;

type SnackbarContextType = {
  /**
   * Show snackbar.
   */
  show: Dispatch<SetStateAction<SnackbarShowProps>>;

  /**
   * Show the snack bar with the close button.
   * The close button is placed to the right of the message.
   */
  showWithCloseButton: (showProps: SnackbarShowCloseButtonContextProps) => void;

  /**
   * Hide snackbar.
   */
  hide: (hideProps?: SnackbarHideContextProps) => void;
};

const SnackbarContext = React.createContext<SnackbarContextType>({
  show: () => {},
  showWithCloseButton: () => {},
  hide: () => {},
});

export function useSnackbar() {
  return useContext(SnackbarContext);
}

export function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo(
    () => ({
      show: setState,
      showWithCloseButton: (showProps: SnackbarShowCloseButtonContextProps) => {
        setState((prevState) => ({
          ...prevState,
          ...showProps,
          actionText: m('閉じる'),
          actionHandler: snackbarContext.hide,
        }));
      },
      hide: (hideProps?: SnackbarHideContextProps) => {
        setState((prevState) => ({...prevState, ...hideProps, hide: true}));
      },
    }),
    [],
  );
  return (
    <SnackbarContext.Provider value={snackbarContext}>
      <Snackbar {...state}>{props.children}</Snackbar>
    </SnackbarContext.Provider>
  );
}
