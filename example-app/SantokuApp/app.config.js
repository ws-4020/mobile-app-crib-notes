import devDebugConfig from './config/app.config.dev.debug.js';
import devDebugAdvancedConfig from './config/app.config.dev.debugAdvanced.js';
import devHouseConfig from './config/app.config.dev.house.js';
import devConfig from './config/app.config.dev.release.js';
import prodDebugConfig from './config/app.config.prod.debug.js';
import prodDebugAdvancedConfig from './config/app.config.prod.debugAdvanced.js';
import prodHouseConfig from './config/app.config.prod.house.js';
import prodReleaseConfig from './config/app.config.prod.release.js';
import {
  withAddAppActivity,
  withAddReleaseSigningConfigBuildGradle,
  withEnabledStatusBarTranslucent,
  withDisabledWindowDrawsSystemBarBackgrounds,
  withRemoveUsesClearTextTraffic,
  withMoveDevSettingsActivityToDebugAndroidManifest,
  withRemoveCFBundleUrlTypes,
  withEnabledATS,
  withDisabledATSOnlyDebug,
} from './config/app.plugin.js';

const buildVariantConfig = {
  'dev.debug': devDebugConfig,
  'dev.debugAdvanced': devDebugAdvancedConfig,
  'dev.house': devHouseConfig,
  'dev.release': devConfig,
  'prod.debug': prodDebugConfig,
  'prod.debugAdvanced': prodDebugAdvancedConfig,
  'prod.house': prodHouseConfig,
  'prod.release': prodReleaseConfig,
};
/**
 * アプリ全体のベースとなる設定です
 * ビルドバリアント毎に違う設定値は、ビルドタイプ：Release、プロダクトフレーバー：Prodの設定を定義しています。
 * 上記ビルドバリアントと違う設定を定義する場合は、各ビルドバリアントごとの設定ファイル（app.config.xxx.yyy.json）で再定義してください。
 *
 * 環境変数「BUILD_VARIANT」を設定することで、指定のビルドバリアントの設定ファイルを読み込みます。
 * ex) BUILD_VARIANT=dev.debug npx expo prebuild --clean
 *
 * @see https://docs.expo.dev/versions/latest/config/app/
 */
module.exports = ({config}) => {
  const buildVariant = process.env.BUILD_VARIANT ?? 'prod.release';
  const defaultAppConfig = {
    ...config,
    name: 'SantokuApp',
    version: '0.1.0',
    orientation: 'portrait',
    jsEngine: 'jsc',
    primaryColor: '#393939',
    locales: {
      ja: './l10n.ja.json',
      en: './l10n.en.json',
    },
    android: {
      package: 'jp.fintan.mobile.SantokuApp',
      versionCode: 4,
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_release.png',
        backgroundColor: '#393939',
      },
      splash: {
        resizeMode: 'native',
        backgroundColor: '#393939',
        mdpi: './assets/android/splashscreen_mdpi.png',
        hdpi: './assets/android/splashscreen_hdpi.png',
        xhdpi: './assets/android/splashscreen_xhdpi.png',
        xxhdpi: './assets/android/splashscreen_xxhdpi.png',
        xxhmdpi: './assets/android/splashscreen_xxhdpi.png',
      },
      googleServicesFile: './google-services.json',
      softwareKeyboardLayoutMode: 'resize',
      allowBackup: false,
    },
    ios: {
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp',
      googleServicesFile: './GoogleService-Info.plist',
      icon: './assets/ios/ic_release.png',
      supportsTablet: true,
      infoPlist: {
        CFBundleAllowMixedLocalizations: true,
        UIBackgroundModes: ['fetch', 'remote-notification'],
      },
      splash: {
        backgroundColor: '#393939',
        image: './assets/ios/splashscreen.png',
      },
    },
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            extraProguardRules: `
# Firebase ConsoleでCrashlyticsのエラータイトルが表示されない問題に対応
# https://firebase.google.com/docs/crashlytics/get-deobfuscated-reports?hl=ja&platform=android
-keepattributes SourceFile,LineNumberTable        # Keep file names and line numbers.
-keep public class * extends java.lang.Exception  # Optional: Keep custom exceptions.

# ExpoModulesPakage.ktから、自動生成されたクラスを参照するためにクラス名を利用しているので、クラス名が変わるとアプリが起動しなくなる。
# https://github.com/expo/expo/blob/sdk-43/packages/expo/android/src/main/java/expo/modules/ExpoModulesPackage.kt#L22
-keep class expo.modules.ExpoModulesPackageList { *; }

# https://github.com/software-mansion/react-native-svg#problems-with-proguard
-keep public class com.horcrux.svg.** {*;}
`,
            enableProguardInReleaseBuilds: true,
          },
          ios: {
            useFrameworks: 'static',
          },
        },
      ],
      ['@react-native-firebase/app'],
      ['@react-native-firebase/crashlytics'],
      // このアプリで用意しているAndroid用のプラグイン
      withAddAppActivity,
      withAddReleaseSigningConfigBuildGradle,
      withEnabledStatusBarTranslucent,
      withRemoveUsesClearTextTraffic,
      withDisabledWindowDrawsSystemBarBackgrounds,
      withMoveDevSettingsActivityToDebugAndroidManifest,
      // このアプリで用意しているiOS用のプラグイン
      withRemoveCFBundleUrlTypes,
      withEnabledATS,
      withDisabledATSOnlyDebug,
      // iOSのクレデンシャルはビルドバリアント毎の設定ファイルで定義します。
      // withSetCredentials,
      // iOSのパーソナルアカウントはビルドバリアント毎の設定ファイルで定義します。
      // withAddPersonalAccountConfig,
    ],
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
    updates: {
      enabled: false,
    },
  };
  return {...defaultAppConfig, ...buildVariantConfig[buildVariant](defaultAppConfig)};
};
