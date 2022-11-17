const withEnabledATS = require('./app.plugin.js').withEnabledATS;

module.exports = config => {
  return {
    ...config,
    plugins: [...config.plugins, [withEnabledATS, {enabled: true}]],
  };
};
