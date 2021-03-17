import {Cookie} from '@react-native-community/cookies';
import {AuthenticationState} from '../AuthenticationState';

class BackendAuthenticationState implements AuthenticationState {
  readonly clientAuthenticationState: AuthenticationState;
  readonly sessionId?: Cookie;

  constructor(clientAuthenticationState: AuthenticationState, sessionId?: Cookie) {
    this.clientAuthenticationState = clientAuthenticationState;
    this.sessionId = sessionId;
  }

  public getclientAuthenticationState(): AuthenticationState {
    return this.clientAuthenticationState;
  }

  public getSessionId(): Cookie | undefined {
    return this.sessionId;
  }

  public isClientAuthenticated(): boolean {
    return this.clientAuthenticationState.isAuthenticated();
  }

  public isAuthenticated(): boolean {
    return this.sessionId !== null;
  }
}

export {BackendAuthenticationState};
