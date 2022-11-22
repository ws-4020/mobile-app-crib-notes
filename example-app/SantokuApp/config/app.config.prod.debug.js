const withSetCredentials = require('./app.plugin.js').withSetCredentials;

module.exports = config => {
  return {
    ...config,
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.debug',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_debug.png',
      },
      googleServicesFile: './google-services-dummy.json',
    },
    ios: {
      ...config.ios,
      // ExpoのデフォルトConfigPluginでは、「$」のような記号をBundleIdentifierに設定出来なかったため、このアプリで作成した「withSetCredentials」Pluginで設定しています。
      // bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.debug.${PERSONAL_IDENTIFIER}',
      googleServicesFile: './GoogleService-Info.Dummy.plist',
      icon: './assets/ios/ic_debug.png',
      infoPlist: {
        ...config.ios.infoPlist,
        UIBackgroundModes: undefined,
      },
    },
    plugins: [
      ...config.plugins,
      [
        withSetCredentials,
        {
          developmentTeam: 'D9MUZCM4X6',
          codeSignStyle: 'Automatic',
          bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.debug.${PERSONAL_IDENTIFIER}',
        },
      ],
    ],
  };
};
