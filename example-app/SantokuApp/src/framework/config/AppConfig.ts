import {Platform} from 'react-native';
import {Config} from 'react-native-config';

/**
 * 環境設定値を取得できます。
 *
 * ```ts
 * import {AppConfig} from 'framework';
 *
 * console.log(AppConfig.appNameHome);
 * ```
 */
export abstract class AppConfig {
  static get appIdFlavorSuffix(): string {
    return Config.APP_ID_FLAVOR_SUFFIX;
  }

  static get appNameHome(): string {
    return Config.APP_NAME_HOME;
  }

  static get provisioningProfileFlavor(): string {
    return Config.PROVISIONING_PROFILE_FLAVOR;
  }

  static get termsUrl(): string {
    return Config.TERMS_URL;
  }

  static get santokuAppBackendUrl(): string {
    return Platform.OS === 'android'
      ? Config.SANTOKU_APP_BACKEND_URL.replace('localhost', '10.0.2.2')
      : Config.SANTOKU_APP_BACKEND_URL;
  }

  static get requestTimeout(): number | undefined {
    const timeout = Number(Config.REQUEST_TIMEOUT);
    return isNaN(timeout) ? undefined : timeout;
  }

  static get storeUrl(): string | undefined {
    return Platform.select({
      ios: Config.APP_STORE_APP_URL,
      android: Config.GOOGLE_PLAY_APP_URL,
    });
  }

  static get mobileAppCribNotesWebsiteUrl(): string {
    return Config.MOBILE_APP_CRIB_NOTES_WEBSITE_URL;
  }

  static get mobileAppCribNotesRepositoryUrl(): string {
    return Config.MOBILE_APP_CRIB_NOTES_REPOSITORY_URL;
  }
}
