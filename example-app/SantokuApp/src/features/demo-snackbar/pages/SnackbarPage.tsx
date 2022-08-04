import React from 'react';

import {SnackbarTemplate} from '../components/SnackbarTemplate';
import {useShowSnackbarUseCase} from '../use-cases/useShowSnackbarUseCase';
import {useShowSnackbarWithCloseButtonUseCase} from '../use-cases/useShowSnackbarWithCloseButtonUseCase';

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
