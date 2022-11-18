const withSetCredentials = require('./app.plugin.js').withSetCredentials;
const withAddPersonalAccountConfig = require('./app.plugin.js').withAddPersonalAccountConfig;

module.exports = config => {
  return {
    ...config,
    name: 'Dev SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev.debug',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_debug.png',
      },
      googleServicesFile: './google-services-dummy.json',
    },
    ios: {
      ...config.ios,
      // ExpoのデフォルトConfigPluginでは、「$」のような記号をBundleIdentifierに設定出来なかったため、このアプリで作成した「withSetCredentials」Pluginで設定しています。
      // bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.dev.debug.${PERSONAL_IDENTIFIER}',
      googleServicesFile: './GoogleService-Info.Dummy.plist',
      icon: './assets/ios/ic_debug.png',
    },
    plugins: [
      ...config.plugins,
      [
        withSetCredentials,
        {
          developmentTeam: '${DEVELOPMENT_TEAM}',
          codeSignStyle: '${CODE_SIGN_STYLE}',
          bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.dev.debug.${PERSONAL_IDENTIFIER}',
        },
      ],
      withAddPersonalAccountConfig,
    ],
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    },
  };
};
