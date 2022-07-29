import {m} from 'bases/message/utils/Message';
import {FullWindowOverlay} from 'bases/ui/components/overlay/FullWindowOverlay';
import {
  SnackbarComponent,
  SnackbarProps,
  SnackbarShowProps,
} from 'bases/ui/components/overlay/snackbar/SnackbarComponent';
import {
  SnackbarContextType,
  SnackbarHideContextProps,
  SnackbarShowCloseButtonContextProps,
  SnackbarShowContextProps,
} from 'bases/ui/contexts/useSnackbar';
import React, {useMemo, useState} from 'react';

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

export {WithSnackbar, Snackbar};
