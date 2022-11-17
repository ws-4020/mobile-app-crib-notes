const withEnabledATS = require('./app.plugin.js').withEnabledATS;

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
    plugins: [...config.plugins, [withEnabledATS, {enabled: false}]],
  };
};
