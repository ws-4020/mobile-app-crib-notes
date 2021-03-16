import React, {useCallback, useEffect, useState} from 'react';
import {AuthenticationState, NotAuthenticated} from '../../backend/authn/AuthenticationState';
import type {BackendAuthContext} from '../../context/BackendAuthContext';
import {BackendAuthProvider} from '../../context/BackendAuthContext';
import {BackendAuthenticationUsingIDTokenUseCase} from '../../backend/authn/backend/BackendAuthenticationUsingIdTokenUseCase';
import {Spinner} from 'native-base';
import {BackendAuthenticationState} from '../../backend/authn/backend/BackendAuthenticationState';
import {OidcAuthenticated} from '../../backend/authn/oidc/OidcAuthenticationState';

const backendAuth = BackendAuthenticationUsingIDTokenUseCase.INSTANCE;

type Props = {
  // 子要素必須なので、あえてPropsに定義
  children: React.ReactNode;
};

const WithBackendAuthContext: React.FC<Props> = ({children}) => {
  const [authnState, setAuthnState] = useState<AuthenticationState>(NotAuthenticated);
  const [initialized, setInitialized] = useState<boolean>(false);

  const signIn = useCallback(async () => {
    setAuthnState(await backendAuth.signIn());
  }, []);

  const signOut = useCallback(async () => {
    await backendAuth.signOut(authnState);
    setAuthnState(NotAuthenticated);
  }, [authnState]);

  const checkSessionIsValid = useCallback(async () => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(false), 3000);
    });
  }, []);

  useEffect(() => {
    backendAuth
      .loadStoredState()
      .then((result) => {
        if (result instanceof OidcAuthenticated) {
          setAuthnState(new BackendAuthenticationState(result, null));
        }
      })
      .finally(() => setInitialized(true));

    return () => {
      setInitialized(false);
    };
  }, []);

  const authContext: BackendAuthContext = {
    authnState,
    signIn,
    signOut,
    checkSessionIsValid,
    isLoggedIn: authnState.isAuthenticated(),
  };

  // FIX-ME 下記をつけると初回動かない
  // if (initialized === false) {
  //   return <Spinner />;
  // }

  return <BackendAuthProvider value={authContext}>{children}</BackendAuthProvider>;
};

export default WithBackendAuthContext;
