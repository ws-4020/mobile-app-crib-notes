import React, {useCallback, useState} from 'react';
import {AuthenticationState, NotAuthenticated} from '../../backend/authn/AuthenticationState';
import type {BackendAuthContext} from '../../context/BackendAuthContext';
import {BackendAuthProvider} from '../../context/BackendAuthContext';
import {BackendAuthenticationUsingIDTokenUseCase} from '../../backend/authn/backend/BackendAuthenticationUsingIdTokenUseCase';
import {BackendAuthenticationState} from 'src/app/backend/authn/backend/BackendAuthenticationState';

const backendAuth = BackendAuthenticationUsingIDTokenUseCase.INSTANCE;

type Props = {
  // 子要素必須なので、あえてPropsに定義
  children: React.ReactNode;
};

const WithBackendAuthContext: React.FC<Props> = ({children}) => {
  const [authnState, setAuthnState] = useState<AuthenticationState>(NotAuthenticated);

  const signIn = useCallback(async () => {
    setAuthnState(await backendAuth.signIn());
  }, []);

  const signOut = useCallback(async () => {
    await backendAuth.signOut(authnState);
    setAuthnState(NotAuthenticated);
  }, [authnState]);

  const checkSessionIsValid = useCallback(async () => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(true), 3000);
    });
  }, []);

  const authContext: BackendAuthContext = {
    authnState,
    signIn,
    signOut,
    checkSessionIsValid,
    isLoggedIn: authnState.isAuthenticated(),
  };

  return <BackendAuthProvider value={authContext}>{children}</BackendAuthProvider>;
};

export default WithBackendAuthContext;
