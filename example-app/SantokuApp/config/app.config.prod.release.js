module.exports = config => {
  return {
    ...config,
    name: 'SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp',
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        foregroundImage: './assets/android/ic_launcher_foreground_release.png',
      },
      googleServicesFile: './google-services.json',
    },
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://fintan-contents.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/Fintan-contents/mobile-app-crib-notes',
    },
  };
};
