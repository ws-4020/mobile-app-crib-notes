import {ConfigPlugin, withAppBuildGradle} from '@expo/config-plugins';

export const withAddReleaseSigningConfigBuildGradle: ConfigPlugin = config => {
  return withAppBuildGradle(config, config => {
    if (config.modResults.language === 'groovy') {
      config.modResults.contents = applyReleaseSigningConfig(config.modResults.contents);
    } else {
      throw new Error('In this app, only groovy is supported as the language for build.gradle.');
    }
    return config;
  });
};

const applyReleaseSigningConfig = (buildGradle: string): string => {
  const added = addReleaseSigningConfig(buildGradle);
  return setReleaseSigningConfig(added);
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

const setReleaseSigningConfig = (buildGradle: string): string => {
  return buildGradle.replace(
    /buildTypes[\s\S]*release[\s\S]*signingConfigs\.debug/,
    `buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.release`,
  );
};
