const withIosDisabledATS = require('./app.plugin.js').withIosDisabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;
const withIosAddPersonalAccountConfig = require('./app.plugin.js').withIosAddPersonalAccountConfig;

const deepLinkScheme = 'https';
const deepLinkDomain = 'reactnativesandbox.z11.web.core.windows.net';
const deepLinkPathPrefix = 'local';

module.exports = config => {
  return {
    name: 'Local SantokuApp',
    android: {
      package: 'jp.fintan.mobile.SantokuApp.local',
      adaptiveIcon: {
        foregroundImage: './assets/android/ic_launcher_foreground_local.png',
      },
      googleServicesFile: './google-services-dummy.json',
      intentFilters: [
        {
          autoVerify: true,
          action: 'VIEW',
          data: [
            {
              scheme: deepLinkScheme,
              host: deepLinkDomain,
              pathPrefix: `/${deepLinkPathPrefix}`,
              path: `/`,
            },
            {
              scheme: deepLinkScheme,
              host: deepLinkDomain,
              pathPrefix: `/${deepLinkPathPrefix}`,
              path: `/home`,
            },
            {
              scheme: deepLinkScheme,
              host: deepLinkDomain,
              pathPrefix: `/${deepLinkPathPrefix}`,
              pathPattern: `/questions/.*`,
            },
            {
              scheme: deepLinkScheme,
              host: deepLinkDomain,
              pathPrefix: `/${deepLinkPathPrefix}`,
              path: `/demo/app-info`,
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    ios: {
      // ExpoのデフォルトConfigPluginでは、「$」のような記号をBundleIdentifierに設定出来なかったため、このアプリで作成した「withSetCredentials」Pluginで設定しています。
      // bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.dev.debug.${PERSONAL_IDENTIFIER}',
      googleServicesFile: './GoogleService-Info.Dummy.plist',
      icon: './assets/ios/ic_local.png',
      infoPlist: {
        UIBackgroundModes: undefined,
      },
    },
    plugins: [
      // このアプリで用意しているiOS用のプラグイン
      withIosDisabledATS,
      [
        withIosSetCredentials,
        {
          developmentTeam: '${DEVELOPMENT_TEAM}',
          codeSignStyle: '${CODE_SIGN_STYLE}',
          bundleIdentifier: 'personal.jp.fintan.mobile.SantokuApp.local.${PERSONAL_IDENTIFIER}',
        },
      ],
      withIosAddPersonalAccountConfig,
    ],
    extra: {
      mobileAppCribNotesWebsiteUrl: 'https://ws-4020.github.io/mobile-app-crib-notes',
      mobileAppCribNotesRepositoryUrl: 'https://github.com/ws-4020/mobile-app-crib-notes',
      deepLinkPathPrefix,
    },
  };
};
