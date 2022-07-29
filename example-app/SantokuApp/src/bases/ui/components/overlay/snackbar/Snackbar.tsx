import {m} from 'bases/message/utils/Message';
import React, {useMemo, useState} from 'react';

import {FullWindowOverlay} from '../FullWindowOverlay';
import {SnackbarComponent, SnackbarHideProps, SnackbarProps, SnackbarShowProps} from './SnackbarComponent';

export type SnackbarShowContextProps = Omit<SnackbarShowProps, 'message'>;
export type SnackbarShowCloseButtonContextProps = Omit<
  SnackbarShowContextProps,
  'actionText' | 'actionHandler' | 'actionTextStyle'
>;
export type SnackbarHideContextProps = Omit<SnackbarHideProps, 'hide'>;

export type SnackbarContextType = {
  /**
   * Show snackbar.
   *
   * @param message - Displayed message.
   * @param showProps - Snackbar props(SnackbarShowContextProps).
   */
  show: (message: string, showProps?: SnackbarShowContextProps) => void;

  /**
   * Show the snackbar with the close button.
   * The close button is placed to the right of the message.
   *
   * @param message - Displayed message.
   * @param showProps - Snackbar props(SnackbarShowCloseButtonContextProps).
   */
  showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => void;

  /**
   * Hide snackbar.
   *
   * @param hideProps - Snackbar props(SnackbarHideContextProps).
   */
  hide: (hideProps?: SnackbarHideContextProps) => void;
};

let Snackbar: SnackbarContextType = {
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

function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  // const snackbarContext = useMemo<SnackbarContextType>(
  Snackbar = useMemo<SnackbarContextType>(
    () => ({
      show: (message: string, showProps?: SnackbarShowContextProps) => {
        setState({
          timestamp: Date.now(),
          ...showProps,
          message,
        });
      },
      showWithCloseButton: (message: string, showProps?: SnackbarShowCloseButtonContextProps) => {
        setState({
          timestamp: Date.now(),
          ...showProps,
          actionText: m('閉じる'),
          actionHandler: Snackbar.hide,
          message,
        });
      },
      hide: (hideProps?: SnackbarHideContextProps) => {
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
