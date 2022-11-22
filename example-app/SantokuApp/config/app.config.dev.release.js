const withSetCredentials = require('./app.plugin.js').withSetCredentials;

module.exports = config => {
  return {
    ...config,
    name: 'Dev SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev',
    },
    ios: {
      ...config.ios,
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.dev',
    },
    plugins: [
      ...config.plugins,
      [
        withSetCredentials,
        {
          developmentTeam: '7Y9M87SSC3',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp DevAppStore Development',
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
