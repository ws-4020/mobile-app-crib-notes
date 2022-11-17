const withEnabledATS = require('./app.plugin.js').withEnabledATS;

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
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.dev.debug',
      googleServicesFile: './GoogleService-Info.Dummy.plist',
      icon: './assets/ios/ic_debug.png',
    },
    plugins: [...config.plugins, [withEnabledATS, {enabled: false}]],
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    },
  };
};
