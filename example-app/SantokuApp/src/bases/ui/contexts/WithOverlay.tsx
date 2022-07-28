import React from 'react';

import {WithLoadingOverlay} from './WithLoadingOverlay';
import {WithSnackbar} from './WithSnackbar';

export const WithOverlay: React.FC = ({children}) => {
  return (
    <WithLoadingOverlay>
      <WithSnackbar>{children}</WithSnackbar>
    </WithLoadingOverlay>
  );
};
