import React from 'react';

import {WithSnackbar} from '../snackbar/Snackbar';
import {WithLoadingOverlay} from './LoadingOverlay';

export const WithOverlay: React.FC = ({children}) => {
  return (
    <WithLoadingOverlay>
      <WithSnackbar>{children}</WithSnackbar>
    </WithLoadingOverlay>
  );
};
