import {ConfigPlugin, withStringsXml} from '@expo/config-plugins';

const withEnabledStatusBarTranslucent: ConfigPlugin = config => {
  return withStringsXml(config, config => {
    const strings = config.modResults.resources.string ?? [];
    const filtered = strings?.filter(s => s.$.name !== 'expo_splash_screen_status_bar_translucent');
    config.modResults = {
      resources: {
        ...config.modResults.resources,
        string: [
          ...filtered,
          {
            $: {
              name: 'expo_splash_screen_status_bar_translucent',
              translatable: 'false',
            },
            _: 'true',
          },
        ],
      },
    };
    return config;
  });
};

export default withEnabledStatusBarTranslucent;
