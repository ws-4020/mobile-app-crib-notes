module.exports = config => {
  return {
    ...config,
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev.house',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_house.png',
      },
      googleServicesFile: './google-services.json',
    },
  };
};
