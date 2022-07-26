import {createUseContextAndProvider} from 'bases/core/contexts/createUseContextAndProvider';

import {SnackbarHideProps, SnackbarShowProps} from '../components/overlay/snackbar/Snackbar';

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

export const [useSnackbar, SnackbarContextProvider] = createUseContextAndProvider<SnackbarContextType>();
