import React, {useEffect} from 'react';

import {useAutoLoginUseCase} from '../hooks/useAutoLoginUseCase';
import {useIsLoggedIn} from '../hooks/useIsLoggedIn';

export const AutoLogin: React.FC = ({children}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const {autoLogin} = useAutoLoginUseCase();
  useEffect(() => {
    autoLogin().catch(() => {
      // ユースケースでエラーをハンドリングしているので、ここでは何もしない
    });
  }, [autoLogin]);
  // オートログイン時にエラーが発生した場合は、isLoggedInには何も値が設定されない
  if (isLoggedIn == null) {
    return null;
  }
  return <>{children}</>;
};
