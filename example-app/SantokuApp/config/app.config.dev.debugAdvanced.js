module.exports = config => {
  return {
    ...config,
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev.debugAdvanced',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_debugAdvanced.png',
      },
      googleServicesFile: './google-services.json',
    },
  };
};
