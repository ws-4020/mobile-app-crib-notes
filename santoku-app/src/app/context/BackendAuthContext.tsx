import {createContext, useContext} from 'react';
import type {AuthenticationState} from '../backend/authn/AuthenticationState';

export interface BackendAuthContext {
  readonly authState: AuthenticationState;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  ping: () => Promise<void>;
  isLoggedIn: boolean;
}

const warningMessage = 'You probably forgot to put <BackendAuthProvider>.';

const warningObject = {
  get authState(): AuthenticationState {
    throw new Error(warningMessage);
  },
  signIn: () => {
    throw new Error(warningMessage);
  },
  signOut: () => {
    throw new Error(warningMessage);
  },
  ping: () => {
    throw new Error(warningMessage);
  },
  isLoggedIn: false,
};

const Context = createContext<BackendAuthContext>(warningObject);

export const BackendAuthProvider = Context.Provider;
export const useBackendAuthContext = () => useContext(Context);
