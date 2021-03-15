import {AuthenticationState} from '../authn/AuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {OidcAuthenticated, OidcRefreshableAuthenticated} from '../authn/oidc/OidcAuthenticationState';
import {log} from '../../../framework/logging';
import {BackendAuthService} from '../../service/BackendAuthService';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

function translateTo<T>(domain: any): T {
  // @typescript-eslint/no-unsafe-return を有効にしても、この行は無視する。 eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {...domain};
}

class AuthnStateData {
  accessTokenExpirationDate?: string;
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
}

class BackendAuthenticationUsingIDTokenUseCase {
  static INSTANCE = new BackendAuthenticationUsingIDTokenUseCase();

  async signIn(): Promise<AuthenticationState> {
    const storedAuthState = await oidc.loadStoredState();
    if (!storedAuthState.isAuthenticated() && storedAuthState instanceof OidcRefreshableAuthenticated) {
      // 端末認証
      const authState = await oidc.refresh(storedAuthState);
      const authnStateData = translateTo<AuthnStateData>(authState);
      await BackendAuthService.login('userName', 'password');
      await BackendAuthService.refreshCsrfToken();
      return authState;
    } else {
      const authState = await oidc.signIn();
      const authnStateData = translateTo<AuthnStateData>(authState);
      await BackendAuthService.logout();
      await BackendAuthService.refreshCsrfToken();
      return authState;
    }
  }

  async signOut(authnState: AuthenticationState): Promise<void> {
    try {
      // バックエンド認証破棄
      if (authnState instanceof OidcAuthenticated) {
        await oidc.signOut(authnState);
      }
    } catch (e) {
      // TODO エラー処理
      log.error(() => 'Exception occurred while signing out. exception: %o', e);
    }
  }
}

export {BackendAuthenticationUsingIDTokenUseCase};
