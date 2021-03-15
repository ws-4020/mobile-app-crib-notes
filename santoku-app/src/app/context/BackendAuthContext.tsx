import React, {useContext, useState} from 'react';
import {BackendAuthService} from '../service/BackendAuthService';

export class AccountConflictError {}

export class AuthenticationFailedError {}

interface ContextValueType {
  login: (userName: string, password: string) => Promise<void | AuthenticationFailedError>;
  logout: () => Promise<void>;
  loginUserName: string;
  isLoggedIn: boolean;
}

export const BackendAuthContext = React.createContext<ContextValueType>({} as ContextValueType);

export const useBackendAuthContext = () => useContext(BackendAuthContext);

export const BackendAuthContextProvider: React.FC = ({children}) => {
  const [loginUserName, setLoginUserName] = useState<string>('');

  const contextValue: ContextValueType = {
    login: async (userName, password) => {
      // TODO::エラーハンドリングは未実装
      await BackendAuthService.login(userName, password);
      await BackendAuthService.refreshCsrfToken();
      setLoginUserName(userName);
    },
    logout: async () => {
      // TODO::エラーハンドリングは未実装
      await BackendAuthService.logout();
      await BackendAuthService.refreshCsrfToken();
      setLoginUserName('');
    },
    loginUserName,
    isLoggedIn: loginUserName !== '',
  };

  return <BackendAuthContext.Provider value={contextValue}>{children}</BackendAuthContext.Provider>;
};
