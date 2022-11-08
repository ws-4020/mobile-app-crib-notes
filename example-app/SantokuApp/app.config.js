import debugConfig from './app.config.debug.js';
import debugAdvancedConfig from './app.config.debugAdvanced.js';
import devDebugConfig from './app.config.dev.debug.js';
import devDebugAdvancedConfig from './app.config.dev.debugAdvanced.js';
import devHouseConfig from './app.config.dev.house.js';
import devConfig from './app.config.dev.js';
import houseConfig from './app.config.house.js';

const buildVariantConfig = {
  dev: devConfig,
  'dev.debug': devDebugConfig,
  'dev.debugAdvanced': devDebugAdvancedConfig,
  'dev.house': devHouseConfig,
  debug: debugConfig,
  debugAdvanced: debugAdvancedConfig,
  house: houseConfig,
};
/**
 * ビルドタイプ：Release、プロダクトフレーバー：SantokuAppの設定を定義します。
 * 上記ビルドバリアントと違う設定を定義する場合は、各ビルドバリアントごとの設定ファイル（app.config.xxx.json）で再定義してください。
 *
 * 環境変数「BUILD_VARIANT」を設定することで、指定のビルドバリアントの設定ファイルを読み込みます。
 * ex) BUILD_VARIANT=dev.debug npx expo prebuild --clean
 */
module.exports = ({config}) => {
  const buildVariant = process.env.BUILD_VARIANT;
  const releaseConfig = {
    ...config,
    name: 'SantokuApp',
    version: '0.1.0',
    orientation: 'portrait',
    jsEngine: 'jsc',
    androidStatusBar: {
      translucent: true,
    },
    android: {
      package: 'jp.fintan.mobile.SantokuApp',
      versionCode: 4,
      adaptiveIcon: {
        foregroundImage: './assets/ic_launcher_foreground.png',
        backgroundColor: '#393939',
      },
      splash: {
        resizeMode: 'native',
        backgroundColor: '#393939',
        image: './assets/splashscreen.png',
        mdpi: './assets/splashscreen_mdpi.png',
        hdpi: './assets/splashscreen_hdpi.png',
        xhdpi: './assets/splashscreen_xhdpi.png',
        xxhdpi: './assets/splashscreen_xxhdpi.png',
        xxhmdpi: './assets/splashscreen_xxhdpi.png',
      },
      googleServicesFile: './google-services.json',
      blockedPermissions: ['android.permission.READ_EXTERNAL_STORAGE'],
      softwareKeyboardLayoutMode: 'resize',
    },
    plugins: [['@react-native-firebase/app'], ['@react-native-firebase/crashlytics']],
    extra: {
      termsUrl: 'https://www.tis.co.jp/termsofuse/',
      santokuAppBackendUrl: 'https://santoku-app-backend.azurewebsites.net',
      requestTimeout: 60000,
      appStoreAppUrl: 'itms-apps://itunes.apple.com/jp/app/{appleAppId}',
      googlePlayAppUrl: 'https://play.google.com/store/apps/details?id={applicationId}',
      mobileAppCribNotesWebsiteUrl: 'https://fintan-contents.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/Fintan-contents/mobile-app-crib-notes',
      mswEnabled: true,
    },
  };
  return buildVariant ? {...releaseConfig, ...buildVariantConfig[buildVariant](releaseConfig)} : releaseConfig;
};
