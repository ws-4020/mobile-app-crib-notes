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
 *
 * @see https://docs.expo.dev/versions/latest/config/app/
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
