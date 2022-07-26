import {m} from 'bases/message/utils/Message';
import {FullWindowOverlay} from 'bases/ui/components/overlay/FullWindowOverlay';
import {Snackbar, SnackbarProps, SnackbarShowProps} from 'bases/ui/components/overlay/snackbar/Snackbar';
import {
  SnackbarContextProvider,
  SnackbarContextType,
  SnackbarHideContextProps,
  SnackbarShowCloseButtonContextProps,
  SnackbarShowContextProps,
} from 'bases/ui/contexts/useSnackbar';
import React, {useMemo, useState} from 'react';

function WithSnackbar(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
  const [state, setState] = useState<SnackbarProps>(
    props.initialState ?? {
      message: '',
    },
  );
  const snackbarContext = useMemo<SnackbarContextType>(
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
          actionHandler: snackbarContext.hide,
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
    <SnackbarContextProvider value={snackbarContext}>
      {props.children}
      <FullWindowOverlay>
        <Snackbar {...state} />
      </FullWindowOverlay>
    </SnackbarContextProvider>
  );
}

export {WithSnackbar};
