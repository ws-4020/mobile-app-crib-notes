const withAndroidAppBuildGradleForRelease = require('./app.plugin.js').withAndroidAppBuildGradleForRelease;
const withIosEnabledATS = require('./app.plugin.js').withIosEnabledATS;
const withIosSetCredentials = require('./app.plugin.js').withIosSetCredentials;

module.exports = config => {
  return {
    plugins: [
      // このアプリで用意しているAndroid用のプラグイン
      withAndroidAppBuildGradleForRelease,

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
