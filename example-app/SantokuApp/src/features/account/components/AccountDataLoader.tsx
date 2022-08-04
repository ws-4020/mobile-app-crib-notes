import React, {useEffect, useRef} from 'react';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {useLoadAccountDataUseCase} from '../use-cases/useLoadAccountDataUseCase';

export const AccountDataLoader: React.FC = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const isAutoLoggedIn = useRef(isLoggedIn).current;
  const {isLoading, isLoadingError, handleLoadError} = useLoadAccountDataUseCase(isAutoLoggedIn);

  useEffect(() => handleLoadError(), [handleLoadError]);

  if (isAutoLoggedIn && (isLoading || isLoadingError)) {
    return null;
  }

  return <>{children}</>;
};
