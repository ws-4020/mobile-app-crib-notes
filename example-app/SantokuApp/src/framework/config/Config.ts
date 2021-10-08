import {Config as RNConfig} from 'react-native-config';

/**
 * 環境設定値を取得できます。
 *
 * ```ts
 * import {config} from 'framework/config';
 *
 * console.log(Config.appNameHome);
 * ```
 */
export abstract class Config {
  static get appIdFlavorSuffix(): string {
    return RNConfig.APP_ID_FLAVOR_SUFFIX;
  }

  static get appNameHome(): string {
    return RNConfig.APP_NAME_HOME;
  }

  static get provisioningProfileFlavor(): string {
    return RNConfig.PROVISIONING_PROFILE_FLAVOR;
  }
}
