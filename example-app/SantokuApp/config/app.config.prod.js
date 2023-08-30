const withAndroidAppBuildGradleForRelease = require('./app.plugin.js').withAndroidAppBuildGradleForRelease;
const withAndroidRemoveUsesClearTextTrafficForRelease =
  require('./app.plugin.js').withAndroidRemoveUsesClearTextTrafficForRelease;
const withIosEnabledATS = require('./app.plugin.js').withIosEnabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;

const deepLinkScheme = 'https';
const deepLinkDomain = 'reactnativesandbox.z11.web.core.windows.net';

module.exports = config => {
  return {
    android: {
      intentFilters: [
        {
          autoVerify: true,
          action: 'VIEW',
          data: [
            {
              scheme: deepLinkScheme,
              host: deepLinkDomain,
              pathPattern: `/question/.*`,
            },
            {
              scheme: deepLinkScheme,
              host: deepLinkDomain,
              path: `/demo/app-info`,
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    plugins: [
      // このアプリで用意しているAndroid用のプラグイン
      withAndroidAppBuildGradleForRelease,
      withAndroidRemoveUsesClearTextTrafficForRelease,

      // このアプリで用意しているiOS用のプラグイン
      withIosEnabledATS,
      [
        withIosSetCredentials,
        {
          developmentTeam: '7Y9M87SSC3',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp AppStore Development',
        },
      ],
    ],
    extra: {
      deepLinkPathPrefix: '',
    },
  };
};
