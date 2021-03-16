import {Cookie} from '@react-native-community/cookies';
import {AuthenticationState} from '../AuthenticationState';
import {OidcAuthenticated} from '../oidc/OidcAuthenticationState';

class BackendAuthenticationState implements AuthenticationState {
  readonly clientAuthenticationState: OidcAuthenticated | null;
  readonly sessionId: Cookie | null;

  constructor(clientAuthenticationState: OidcAuthenticated | null, sessionId: Cookie | null) {
    this.clientAuthenticationState = clientAuthenticationState;
    this.sessionId = sessionId;
  }

  public getclientAuthenticationState(): OidcAuthenticated | null {
    return this.clientAuthenticationState;
  }

  public getSessionId(): Cookie | null {
    return this.sessionId;
  }

  public isClientAuthenticated(): boolean {
    return this.clientAuthenticationState !== null && this.clientAuthenticationState.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    return this.sessionId !== null;
  }
}

export {BackendAuthenticationState};
