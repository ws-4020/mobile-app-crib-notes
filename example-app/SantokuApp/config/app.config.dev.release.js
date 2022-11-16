module.exports = config => {
  return {
    ...config,
    name: 'Dev SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_release.png',
      },
      googleServicesFile: './google-services.json',
    },
  };
};
