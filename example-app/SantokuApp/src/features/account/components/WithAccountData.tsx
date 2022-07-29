import React, {useEffect, useRef} from 'react';

import {useIsLoggedIn} from '../hooks/useIsLoggedIn';
import {useLoadAccountDataUseCase} from '../hooks/useLoadAccountDataUseCase';

export const WithAccountData: React.FC = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const isAutoLoggedIn = useRef(isLoggedIn).current;
  const {isLoading, isLoadingError, handleLoadError} = useLoadAccountDataUseCase(isAutoLoggedIn);

  useEffect(() => handleLoadError(), [handleLoadError]);

  if (isAutoLoggedIn && (isLoading || isLoadingError)) {
    return null;
  }

  return <>{children}</>;
};
