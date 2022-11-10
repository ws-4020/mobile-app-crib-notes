module.exports = config => {
  return {
    ...config,
    name: 'SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.debug',
    },
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://fintan-contents.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/Fintan-contents/mobile-app-crib-notes',
    },
  };
};
