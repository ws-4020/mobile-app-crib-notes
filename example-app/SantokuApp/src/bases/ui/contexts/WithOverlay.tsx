import React from 'react';

import {WithSnackbar} from '../components/overlay/snackbar/WithSnackbar';
import {WithLoadingOverlay} from './WithLoadingOverlay';

export const WithOverlay: React.FC = ({children}) => {
  return (
    <WithLoadingOverlay>
      <WithSnackbar>{children}</WithSnackbar>
    </WithLoadingOverlay>
  );
};
