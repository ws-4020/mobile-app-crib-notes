const DEEP_LINK_SCHEME = require('../constants/deepLink').DEEP_LINK_SCHEME;
const DEEP_LINK_DOMAIN = require('../constants/deepLink').DEEP_LINK_DOMAIN;

module.exports = (pathPrefix = undefined) => {
  const dataWithoutPathPrefix = [
    {
      scheme: DEEP_LINK_SCHEME,
      host: DEEP_LINK_DOMAIN,
      path: `/`,
    },
    {
      scheme: DEEP_LINK_SCHEME,
      host: DEEP_LINK_DOMAIN,
      path: `/home`,
    },
    {
      scheme: DEEP_LINK_SCHEME,
      host: DEEP_LINK_DOMAIN,
      pathPattern: `/questions/.*`,
    },
    {
      scheme: DEEP_LINK_SCHEME,
      host: DEEP_LINK_DOMAIN,
      path: `/demo/app-info`,
    },
  ];
  const data = pathPrefix
    ? dataWithoutPathPrefix.map(d => ({...d, pathPrefix: `/${pathPrefix}`}))
    : dataWithoutPathPrefix;
  return {
    autoVerify: true,
    action: 'VIEW',
    data,
    category: ['BROWSABLE', 'DEFAULT'],
  };
};
