module.exports = ({config}) => {
  return {
    ...config,
    name: 'Dev SantokuApp',
    version: '0.1.0',
    orientation: 'portrait',
    jsEngine: 'jsc',
    androidStatusBar: {
      translucent: true,
    },
    android: {
      package: 'jp.fintan.mobile.SantokuApp.dev',
      versionCode: 4,
      adaptiveIcon: {
        foregroundImage: './assets/ic_launcher_foreground.png',
        backgroundColor: '#393939',
      },
      splash: {
        resizeMode: 'native',
        backgroundColor: '#393939',
        image: './assets/splashscreen.png',
        mdpi: './assets/splashscreen_mdpi.png',
        hdpi: './assets/splashscreen_hdpi.png',
        xhdpi: './assets/splashscreen_xhdpi.png',
        xxhdpi: './assets/splashscreen_xxhdpi.png',
        xxhmdpi: './assets/splashscreen_xxhdpi.png',
      },
      googleServicesFile: './google-services-dummy.json',
      blockedPermissions: ['android.permission.READ_EXTERNAL_STORAGE'],
      softwareKeyboardLayoutMode: 'resize',
    },
    plugins: [['@react-native-firebase/app'], ['@react-native-firebase/crashlytics']],
    extra: {
      termsUrl: 'https://www.tis.co.jp/termsofuse/',
      santokuAppBackendUrl: 'https://santoku-app-backend.azurewebsites.net',
      requestTimeout: 60000,
      appStoreAppUrl: 'itms-apps://itunes.apple.com/jp/app/{appleAppId}',
      googlePlayAppUrl: 'https://play.google.com/store/apps/details?id={applicationId}',
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
      mswEnabled: true,
    },
  };
};
