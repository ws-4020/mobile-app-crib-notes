import {m} from 'bases/message/utils/Message';
import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {
  SnackbarComponent,
  SnackbarHideProps as SnackbarComponentHideProps,
  SnackbarProps as SnackbarComponentProps,
  SnackbarShowProps as SnackbarComponentShowProps,
} from './SnackbarComponent';

type SnackbarShowProps = Omit<SnackbarComponentShowProps, 'message'>;
type SnackbarShowCloseButtonProps = Omit<SnackbarShowProps, 'actionText' | 'actionHandler' | 'actionTextStyle'>;
type SnackbarHideProps = Omit<SnackbarComponentHideProps, 'hide'>;

type SnackbarType = {
  /**
   * Show snackbar.
   *
   * @param message - Displayed message.
   * @param showProps - Snackbar props(SnackbarShowContextProps).
   */
  show: (message: string, showProps?: SnackbarShowProps) => void;

  /**
   * Show the snackbar with the close button.
   * The close button is placed to the right of the message.
   *
   * @param message - Displayed message.
   * @param showProps - Snackbar props(SnackbarShowCloseButtonContextProps).
   */
  showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonProps) => void;

  /**
   * Hide snackbar.
   *
   * @param hideProps - Snackbar props(SnackbarHideContextProps).
   */
  hide: (hideProps?: SnackbarHideProps) => void;
};

let Snackbar: SnackbarType = {
  show: () => {
    throw new Error('WithSnackbar is required.');
  },
  showWithCloseButton: () => {
    throw new Error('WithSnackbar is required.');
  },
  hide: () => {
    throw new Error('WithSnackbar is required.');
  },
};

function WithSnackbar(props: {initialState?: SnackbarComponentShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarComponentProps>(
    props.initialState ?? {
      message: '',
    },
  );
  // const snackbarContext = useMemo<SnackbarContextType>(
  Snackbar = useMemo<SnackbarType>(
    () => ({
      show: (message: string, showProps?: SnackbarShowProps) => {
        setState({
          timestamp: Date.now(),
          ...showProps,
          message,
        });
      },
      showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonProps) => {
        setState({
          timestamp: Date.now(),
          ...showProps,
          actionText: m('閉じる'),
          actionHandler: Snackbar.hide,
          message,
        });
      },
      hide: (hideProps?: SnackbarHideProps) => {
        setState(prevState => ({...prevState, ...hideProps, hide: true}));
      },
    }),
    [],
  );
  return (
    <>
      {props.children}
      <FullWindowOverlay>
        <SnackbarComponent {...state} />
      </FullWindowOverlay>
    </>
  );
}

export {Snackbar, WithSnackbar};
