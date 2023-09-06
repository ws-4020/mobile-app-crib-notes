const withAndroidAppBuildGradleForRelease = require('./app.plugin.js').withAndroidAppBuildGradleForRelease;
const withAndroidRemoveUsesClearTextTrafficForRelease =
  require('./app.plugin.js').withAndroidRemoveUsesClearTextTrafficForRelease;
const withIosEnabledATS = require('./app.plugin.js').withIosEnabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;
const generateDeepLinkIntentFilter = require('./utils/generateDeepLinkIntentFilter');

const deepLinkIntentFilter = generateDeepLinkIntentFilter();

module.exports = config => {
  return {
    android: {
      intentFilters: [deepLinkIntentFilter],
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
  };
};
