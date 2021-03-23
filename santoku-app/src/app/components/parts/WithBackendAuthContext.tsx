import React, {useCallback, useEffect, useState} from 'react';
import {NotAuthenticated} from '../../backend/authn/AuthenticationState';
import type {BackendAuthContext} from '../../context/BackendAuthContext';
import {BackendAuthProvider} from '../../context/BackendAuthContext';
import {BackendAuthenticationUsingIDTokenUseCase} from '../../backend/authn/backend/BackendAuthenticationUsingIdTokenUseCase';
import {BackendAuthenticationState} from '../../backend/authn/backend/BackendAuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../../backend/authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {Spinner} from 'native-base';
import {OidcRefreshableAuthenticated} from '../../backend/authn/oidc/OidcAuthenticationState';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;
const backendAuth = BackendAuthenticationUsingIDTokenUseCase.INSTANCE;

type Props = {
  // 子要素必須なので、あえてPropsに定義
  children: React.ReactNode;
};

const WithBackendAuthContext: React.FC<Props> = ({children}) => {
  const backendNotAuthenticated = new BackendAuthenticationState(NotAuthenticated, false);
  const [authnState, setAuthnState] = useState<BackendAuthenticationState>(backendNotAuthenticated);
  const [initialized, setInitialized] = useState<boolean>(false);

  const signIn = useCallback(async () => {
    const backendAuthnState = await backendAuth.signIn();
    setAuthnState(backendAuthnState);
  }, []);

  const signOut = useCallback(async () => {
    await backendAuth.signOut(authnState);
    setAuthnState(new BackendAuthenticationState(NotAuthenticated, false));
  }, [authnState]);

  const refreshSession = useCallback(async () => {
    if (authnState instanceof OidcRefreshableAuthenticated) {
      const backendAuthnState = await backendAuth.refreshSessionAsync(authnState);
      setAuthnState(backendAuthnState);
    } else {
      setAuthnState(new BackendAuthenticationState(NotAuthenticated, false));
    }
  }, [authnState]);

  const authContext: BackendAuthContext = {
    authnState,
    signIn,
    signOut,
    refreshSession,
    isLoggedIn: authnState.isAuthenticated(),
  };

  useEffect(() => {
    oidc
      .loadStoredState()
      .then((oidcAuthnState) => setAuthnState(new BackendAuthenticationState(oidcAuthnState, false)))
      .finally(() => setInitialized(true));
    return () => {
      setInitialized(false);
    };
  }, []);

  if (!initialized) {
    return <Spinner />;
  } else {
    return <BackendAuthProvider value={authContext}>{children}</BackendAuthProvider>;
  }
};

export default WithBackendAuthContext;
