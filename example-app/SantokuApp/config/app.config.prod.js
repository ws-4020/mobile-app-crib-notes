const withSetCredentials = require('./app.plugin.js').withSetCredentials;

module.exports = config => {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      [
        withSetCredentials,
        {
          developmentTeam: '7Y9M87SSC3',
          codeSignStyle: 'Manual',
          provisioningProfileSpecifier: 'SantokuApp AppStore Development',
        },
      ],
    ],
  };
};
