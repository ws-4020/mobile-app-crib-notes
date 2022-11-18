const withSetCredentials = require('./app.plugin.js').withSetCredentials;

module.exports = config => {
  return {
    ...config,
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.debugAdvanced',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_debugAdvanced.png',
      },
    },
    ios: {
      ...config.ios,
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.debugAdvanced',
      icon: './assets/ios/ic_debugAdvanced.png',
    },
    plugins: [
      ...config.plugins,
      [
        withSetCredentials,
        {
          developmentTeam: 'D9MUZCM4X6',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp DebugAdvanced Development',
        },
      ],
    ],
  };
};
