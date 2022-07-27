import React from 'react';

import {useShowSnackbarUseCase} from '../hooks/useShowSnackbarUseCase';
import {useShowSnackbarWithCloseButtonUseCase} from '../hooks/useShowSnackbarWithCloseButtonUseCase';
import {SnackbarTemplate} from './SnackbarTemplate';

export const SnackbarPage: React.FC = () => {
  const {showSnackbar} = useShowSnackbarUseCase();
  const {showSnackbarWithCloseButton} = useShowSnackbarWithCloseButtonUseCase();
  return (
    <SnackbarTemplate
      testID="SnackbarScreen"
      showSnackbar={showSnackbar}
      showSnackbarWithCloseButton={showSnackbarWithCloseButton}
    />
  );
};
