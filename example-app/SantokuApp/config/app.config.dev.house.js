const withEnabledATS = require('./app.plugin.js').withEnabledATS;

module.exports = config => {
  return {
    ...config,
    name: 'Dev SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev.house',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_house.png',
      },
    },
    ios: {
      ...config.ios,
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.dev.house',
      icon: './assets/ios/ic_house.png',
    },
    plugins: [...config.plugins, [withEnabledATS, {enabled: true}]],
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    },
  };
};
