import {ConfigPlugin, withAndroidManifest} from '@expo/config-plugins';

const withDisabledUseClearTextTraffic: ConfigPlugin = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults;
    const applications = androidManifest.manifest.application;
    const disabledClearTextTrafficApplications = applications?.map(a => ({
      ...a,
      $: {...a.$, 'android:usesCleartextTraffic': 'false' as 'false'},
    }));
    config.modResults = {
      manifest: {
        ...androidManifest.manifest,
        $: {...androidManifest.manifest.$, package: config.android?.package},
        // MainActivityのIntentFilterは削除
        application: disabledClearTextTrafficApplications,
      },
    };
    return config;
  });
};

export default withDisabledUseClearTextTraffic;
