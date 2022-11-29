const withAppBuildGradleForRelease = require('./app.plugin.js').withAppBuildGradleForRelease;
const withRemoveUsesClearTextTrafficForRelease = require('./app.plugin.js').withRemoveUsesClearTextTrafficForRelease;
const withEnabledATS = require('./app.plugin.js').withEnabledATS;
const withSetCredentials = require('./app.plugin.js').withSetCredentials;

module.exports = config => {
  return {
    ...config,
    name: 'Stg SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.stg',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_stg.png',
      },
    },
    ios: {
      ...config.ios,
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.stg',
      icon: './assets/ios/ic_stg.png',
    },
    plugins: [
      ...config.plugins,
      // このアプリで用意しているAndroid用のプラグイン
      withAppBuildGradleForRelease,
      withRemoveUsesClearTextTrafficForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withEnabledATS,
      [
        withSetCredentials,
        {
          developmentTeam: 'D9MUZCM4X6',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp DevInHouse Development',
        },
      ],
    ],
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    },
  };
};
