import {Config} from 'react-native-config';

/**
 * 環境設定値を取得できます。
 *
 * ```ts
 * import {config} from 'framework/config';
 *
 * console.log(Config.appNameHome);
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
}
