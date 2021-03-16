import {AuthenticationState} from '../AuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {OidcAuthenticated, OidcRefreshableAuthenticated} from '../oidc/OidcAuthenticationState';
import {log} from '../../../../framework/logging';
import {BackendAuthnService} from '../../BackendAuthnService';
import {Cookie} from '@react-native-community/cookies';
import {BackendAuthenticationState} from './BackendAuthenticationState';
import * as LocalAuthentication from 'expo-local-authentication';
import { SimpleConsoleLogger } from 'src/framework/logging/SimpleConsoleLogger';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

class BackendAuthenticationUsingIDTokenUseCase {
  static INSTANCE = new BackendAuthenticationUsingIDTokenUseCase();

  async siginInBackend(idToken: string): Promise<Cookie> {
    await BackendAuthnService.login(idToken);
    return BackendAuthnService.getSessionId();
  }

  async siginOutBackend(): Promise<void> {
    await BackendAuthnService.logout();
  }

  async signIn(): Promise<BackendAuthenticationState> {
    let authState: OidcAuthenticated | null = null;
    let sessionId: Cookie | null = null;

    try {
      const storedAuthState = await oidc.loadStoredState();
      if (storedAuthState.isAuthenticated() && storedAuthState instanceof OidcRefreshableAuthenticated) {
        // 端末認証
        const {success} = await LocalAuthentication.authenticateAsync({
          promptMessage: 'デバイス認証してください',
          cancelLabel: 'cancel',
        });
        if (!success) {
          return new BackendAuthenticationState(null, null);
        }
        authState = (await oidc.refresh(storedAuthState)) as OidcAuthenticated;
        sessionId = await this.siginInBackend(authState.idToken);
        return new BackendAuthenticationState(authState, sessionId);
      } else {
        authState = (await oidc.signIn()) as OidcAuthenticated;
        sessionId = await this.siginInBackend(authState.idToken);
        return new BackendAuthenticationState(authState, sessionId);
      }
    } catch (e) {
      log.error(() => 'Exception occurred while signing in. exception: %o', e);
      return new BackendAuthenticationState(authState, sessionId);
    }
  }

  async signOut(authnState: AuthenticationState): Promise<void> {
    try {
      if (authnState instanceof BackendAuthenticationState) {
        const clientauthnState = authnState.getclientAuthenticationState();
        if (clientauthnState !== null) {
          // OIDC認証破棄
          await oidc.signOut(clientauthnState);
        }
      }
      // バックエンド認証破棄
      await this.siginOutBackend();
    } catch (e) {
      log.error(() => 'Exception occurred while signing out. exception: %o', e);
    }
  }
}

export {BackendAuthenticationUsingIDTokenUseCase};
