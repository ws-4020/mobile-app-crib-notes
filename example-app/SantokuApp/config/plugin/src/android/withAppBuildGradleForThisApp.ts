import {ConfigPlugin, withAppBuildGradle} from '@expo/config-plugins';

/**
 * このPluginでは、以下を実施しています。
 * 【リリース用のSigningConfigを追加】
 * リリース用のSigningConfigは、以下のプロパティをgradle.propertiesに設定する必要があります。
 *
 * - SANTOKU_APP_UPLOAD_KEYSTORE_FILE
 * - SANTOKU_APP_UPLOAD_KEYSTORE_PASSWORD
 * - SANTOKU_APP_UPLOAD_KEY_ALIAS
 * - SANTOKU_APP_UPLOAD_KEY_PASSWORD
 *
 * 【NDKのクラッシュログ収集に関する設定を追加】
 * リリースビルドの場合は、Native Development KitのクラッシュログをFirebase Crashlyticsに送信する設定を追加します。
 *
 * @param config ExpoConfig
 * @see https://rnfirebase.io/crashlytics/android-setup#4-optional-enable-crashlytics-ndk-reporting
 */
export const withAppBuildGradleForThisApp: ConfigPlugin = config => {
  return withAppBuildGradle(config, config => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = apply(config.modResults.contents);
    } else {
      throw new Error('In this app, only groovy is supported as the language for build.gradle.');
    }
    return config;
  });
};

const apply = (buildGradle: string): string => {
  const added = addReleaseSigningConfig(buildGradle);
  return setReleaseSigningConfigAndNdkCrashReporting(added);
};

const addReleaseSigningConfig = (buildGradle: string): string => {
  return buildGradle.replace(
    'signingConfigs {',
    `signingConfigs {
        release {
            // You must set following properties in gradle.properties for release build
            if (project.hasProperty('SANTOKU_APP_UPLOAD_KEYSTORE_FILE')) {
                storeFile file(SANTOKU_APP_UPLOAD_KEYSTORE_FILE)
                storePassword SANTOKU_APP_UPLOAD_KEYSTORE_PASSWORD
                keyAlias SANTOKU_APP_UPLOAD_KEY_ALIAS
                keyPassword SANTOKU_APP_UPLOAD_KEY_PASSWORD
            }
        }`,
  );
};

const setReleaseSigningConfigAndNdkCrashReporting = (buildGradle: string): string => {
  return buildGradle.replace(
    /buildTypes[\s\S]*release[\s\S]*signingConfigs\.debug/,
    `buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.release
            // Crashlytics NDK reporting allows you to capture Native Development Kit crashes.
            // see https://rnfirebase.io/crashlytics/android-setup#4-optional-enable-crashlytics-ndk-reporting
            firebaseCrashlytics {
                nativeSymbolUploadEnabled true
                unstrippedNativeLibsDir 'build/intermediates/merged_native_libs/release/out/lib'
            }`,
  );
};
