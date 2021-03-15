import React, {useContext, useState} from 'react';
import {AuthenticationState, NotAuthenticated} from '../backend/authn/AuthenticationState';
import {BackendAuthenticationUsingIDTokenUseCase} from '../backend/backendauth/BackendAuthenticationUsingIdTokenUseCase';

const backendAuth = BackendAuthenticationUsingIDTokenUseCase.INSTANCE;

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
  const [authnState, setAuthnState] = useState<AuthenticationState>(NotAuthenticated);
  const [loginUserName, setLoginUserName] = useState<string>('');

  const contextValue: ContextValueType = {
    login: async () => {
      // TODO::エラーハンドリングは未実装
      setAuthnState(await backendAuth.signIn());
      setLoginUserName('userName');
    },
    logout: async () => {
      // TODO::エラーハンドリングは未実装
      await backendAuth.signOut(authnState);
      setAuthnState(NotAuthenticated);
      setLoginUserName('');
    },
    loginUserName,
    isLoggedIn: loginUserName !== '',
  };

  return <BackendAuthContext.Provider value={contextValue}>{children}</BackendAuthContext.Provider>;
};
