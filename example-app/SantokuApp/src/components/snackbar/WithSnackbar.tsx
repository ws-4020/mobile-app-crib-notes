import {m} from 'framework';
import React, {useContext, useMemo, useState} from 'react';

import {Snackbar, SnackbarHideProps, SnackbarProps, SnackbarShowProps} from './Snackbar';

type SnackbarShowContextProps = Omit<SnackbarShowProps, 'message'>;
type SnackbarShowCloseButtonContextProps = Omit<
  SnackbarShowContextProps,
  'actionText' | 'actionHandler' | 'actionTextStyle'
>;
type SnackbarHideContextProps = Omit<SnackbarHideProps, 'hide'>;

type SnackbarContextType = {
  /**
   * Show snackbar.
   */
  show: (message: string, showProps?: SnackbarShowContextProps) => void;

  /**
   * Show the snack bar with the close button.
   * The close button is placed to the right of the message.
   */
  showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => void;

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
  const snackbarContext = useMemo<SnackbarContextType>(
    () => ({
      show: (message: string, showProps?: SnackbarShowContextProps) => {
        setState({
          ...showProps,
          message,
        });
      },
      showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => {
        setState({
          ...showProps,
          actionText: m('閉じる'),
          actionHandler: snackbarContext.hide,
          message,
        });
      },
      hide: (hideProps?: SnackbarHideContextProps) => {
        setState({...hideProps, hide: true, message: ''});
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
