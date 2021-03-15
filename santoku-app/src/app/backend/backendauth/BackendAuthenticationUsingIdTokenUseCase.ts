import {AuthenticationState} from '../authn/AuthenticationState';
import {OidcAuthCodeFlowAuthenticationUseCase} from '../authn/oidc/OidcAuthCodeFlowAuthenticationUseCase';
import {OidcAuthenticated, OidcRefreshableAuthenticated} from '../authn/oidc/OidcAuthenticationState';
import {log} from '../../../framework/logging';
import {BackendAuthService} from './BackendAuthService';

const oidc = OidcAuthCodeFlowAuthenticationUseCase.INSTANCE;

function translateTo<T>(domain: any): T {
  // @typescript-eslint/no-unsafe-return を有効にしても、この行は無視する。 eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return {...domain};
}

interface AuthnStateData {
  idToken: string;
  refreshToken: string;
}

class BackendAuthenticationUsingIDTokenUseCase {
  static INSTANCE = new BackendAuthenticationUsingIDTokenUseCase();

  async siginInBackend(idToken: string): Promise<void> {
    await BackendAuthService.signIn(idToken);
  }

  async siginOutBackend(): Promise<void> {
    await BackendAuthService.signOut();
  }

  async signIn(): Promise<AuthenticationState> {
    const storedAuthState = await oidc.loadStoredState();
    if (!storedAuthState.isAuthenticated() && storedAuthState instanceof OidcRefreshableAuthenticated) {
      // 端末認証
      const authState = await oidc.refresh(storedAuthState);
      const authnStateData = translateTo<AuthnStateData>(authState);
      await this.siginInBackend(authnStateData.idToken);
      return authState;
    } else {
      const authState = await oidc.signIn();
      const authnStateData = translateTo<AuthnStateData>(authState);
      await this.siginInBackend(authnStateData.idToken);
      return authState;
    }
  }

  async signOut(authnState: AuthenticationState): Promise<void> {
    try {
      // バックエンド認証破棄
      if (authnState instanceof OidcAuthenticated) {
        await oidc.signOut(authnState);
      }
      await this.siginOutBackend();
    } catch (e) {
      // TODO エラー処理
      log.error(() => 'Exception occurred while signing out. exception: %o', e);
    }
  }
}

export {BackendAuthenticationUsingIDTokenUseCase};
