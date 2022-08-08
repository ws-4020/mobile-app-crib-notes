import React from 'react';

import {SnackbarTemplate} from '../components/SnackbarTemplate';
import {useShowSnackbar} from '../use-cases/useShowSnackbar';
import {useShowSnackbarWithCloseButton} from '../use-cases/useShowSnackbarWithCloseButton';

export const SnackbarPage: React.FC = () => {
  const {showSnackbar} = useShowSnackbar();
  const {showSnackbarWithCloseButton} = useShowSnackbarWithCloseButton();
  return (
    <SnackbarTemplate
      testID="SnackbarScreen"
      showSnackbar={showSnackbar}
      showSnackbarWithCloseButton={showSnackbarWithCloseButton}
    />
  );
};
