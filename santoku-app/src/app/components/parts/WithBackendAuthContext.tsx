import React, {useCallback, useState} from 'react';
import {AuthenticationState, NotAuthenticated} from '../../backend/authn/AuthenticationState';
import type {BackendAuthContext} from '../../context/BackendAuthContext';
import {BackendAuthProvider} from '../../context/BackendAuthContext';
import {BackendAuthenticationUsingIDTokenUseCase} from '../../backend/backendauth/BackendAuthenticationUsingIdTokenUseCase';

const backendAuth = BackendAuthenticationUsingIDTokenUseCase.INSTANCE;

type Props = {
  // 子要素必須なので、あえてPropsに定義
  children: React.ReactNode;
};

const WithBackendAuthContext: React.FC<Props> = ({children}) => {
  const [authnState, setAuthnState] = useState<AuthenticationState>(NotAuthenticated);

  const signIn = useCallback(async () => {
    // TODO::エラーハンドリングは未実装
    setAuthnState(await backendAuth.signIn());
  }, []);

  const signOut = useCallback(async () => {
    // TODO::エラーハンドリングは未実装
    await backendAuth.signOut(authnState);
    setAuthnState(NotAuthenticated);
  }, [authnState]);

  const ping = useCallback(async () => Promise.resolve(), []);

  const authContext: BackendAuthContext = {
    authState: authnState,
    signIn,
    signOut,
    ping,
    isLoggedIn: authnState.isAuthenticated(),
  };

  return <BackendAuthProvider value={authContext}>{children}</BackendAuthProvider>;
};

export default WithBackendAuthContext;
