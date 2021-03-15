import React, {useContext, useState} from 'react';
import {AuthenticationState, NotAuthenticated} from '../backend/authn/AuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../backend/authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {OidcAuthenticated} from '../backend/authn/oidc/OidcAuthenticationState';
import {BackendAuthService} from '../service/BackendAuthService';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

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
      setAuthnState(await oidc.signIn());
      await BackendAuthService.login('userName', 'password');
      await BackendAuthService.refreshCsrfToken();
      setLoginUserName('userName');
    },
    logout: async () => {
      // TODO::エラーハンドリングは未実装
      if (authnState instanceof OidcAuthenticated) {
        await oidc.signOut(authnState);
      }
      setAuthnState(NotAuthenticated);
      await BackendAuthService.logout();
      await BackendAuthService.refreshCsrfToken();
      setLoginUserName('');
    },
    loginUserName,
    isLoggedIn: loginUserName !== '',
  };

  return <BackendAuthContext.Provider value={contextValue}>{children}</BackendAuthContext.Provider>;
};
