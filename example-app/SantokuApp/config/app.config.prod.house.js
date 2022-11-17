const withEnabledATS = require('./app.plugin.js').withEnabledATS;

module.exports = config => {
  return {
    ...config,
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.house',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_house.png',
      },
    },
    ios: {
      ...config.ios,
      bundleIdentifier: 'jp.fintan.mobile.SantokuApp.house',
      icon: './assets/ios/ic_house.png',
    },
    plugins: [...config.plugins, [withEnabledATS, {enabled: true}]],
  };
};
