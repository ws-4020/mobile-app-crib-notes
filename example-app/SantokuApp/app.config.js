import devDebugConfig from './app.config.dev.debug.js';
import devDebugAdvancedConfig from './app.config.dev.debugAdvanced.js';
import devHouseConfig from './app.config.dev.house.js';
import devConfig from './app.config.dev.release.js';
import prodDebugConfig from './app.config.prod.debug.js';
import prodDebugAdvancedConfig from './app.config.prod.debugAdvanced.js';
import prodHouseConfig from './app.config.prod.house.js';
import prodReleaseConfig from './app.config.prod.release.js';

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
 * ビルドタイプ：Debug、プロダクトフレーバー：Devの設定を定義します。
 * 上記ビルドバリアントと違う設定を定義する場合は、各ビルドバリアントごとの設定ファイル（app.config.xxx.yyy.json）で再定義してください。
 *
 * 環境変数「BUILD_VARIANT」を設定することで、指定のビルドバリアントの設定ファイルを読み込みます。
 * ex) BUILD_VARIANT=dev.debug npx expo prebuild --clean
 *
 * @see https://docs.expo.dev/versions/latest/config/app/
 */
module.exports = ({config}) => {
  const buildVariant = process.env.BUILD_VARIANT;
  const releaseConfig = {
    ...config,
    name: 'Dev SantokuApp',
    version: '0.1.0',
    orientation: 'portrait',
    jsEngine: 'jsc',
    primaryColor: '#393939',
    android: {
      package: 'jp.fintan.mobile.SantokuApp.dev.debug',
      versionCode: 4,
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_debug.png',
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
      googleServicesFile: './google-services-dummy.json',
      softwareKeyboardLayoutMode: 'resize',
      intentFilters: [
        {
          action: undefined,
          category: undefined,
        },
      ],
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
`,
            enableProguardInReleaseBuilds: true,
          },
          ios: {
            deploymentTarget: '13.0',
            useFrameworks: 'static',
          },
        },
      ],
      ['@react-native-firebase/app'],
      ['@react-native-firebase/crashlytics'],
      [
        './plugin/build/android/withCopyAndRenameJavaPackage',
        {srcPath: './plugin/template/android/app/src/main/java/com/helloworld', fileName: 'SplashActivity.java'},
      ],
      ['./plugin/build/android/withSplashActivityAndroidManifest'],
      ['./plugin/build/android/withReleaseSigningConfigBuildGradle'],
      ['./plugin/build/android/withEnabledStatusBarTranslucent'],
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
  return buildVariant ? {...releaseConfig, ...buildVariantConfig[buildVariant](releaseConfig)} : releaseConfig;
};
