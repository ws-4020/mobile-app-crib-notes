import {m} from 'bases/message/utils/Message';
import {FullWindowOverlay} from 'bases/ui/components/overlay/FullWindowOverlay';
import {Snackbar, SnackbarProps, SnackbarShowProps} from 'bases/ui/components/overlay/snackbar/Snackbar';
import React, {useMemo, useState} from 'react';

import {
  SnackbarContextProvider,
  SnackbarContextType,
  SnackbarHideContextProps,
  SnackbarShowCloseButtonContextProps,
  SnackbarShowContextProps,
} from '../ui/contexts/useSnackbar';

function WithSnackbarMock(props: {initialState?: SnackbarShowProps; children: React.ReactNode}) {
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

export {WithSnackbarMock};
