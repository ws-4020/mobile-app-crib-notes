module.exports = config => {
  return {
    ...config,
    name: 'Dev SantokuApp',
    android: {
      ...config.android,
      package: 'jp.fintan.mobile.SantokuApp.dev',
    },
    extra: {
      ...config.extra,
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
    },
  };
};
