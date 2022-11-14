import {ConfigPlugin, withAndroidManifest} from '@expo/config-plugins';

/**
 * AppActivityをAndroidManifest.xmlに追加します。
 * @param config ExpoConfig
 */
export const withAddAppActivityAndroidManifest: ConfigPlugin = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults;
    if (!androidManifest.manifest.application?.length) {
      // applicationは必ず存在する想定
      throw new Error('Application does not exist in AndroidManifest.');
    }
    const mainApplication = androidManifest.manifest.application[0];
    const originalMainActivity = mainApplication.activity?.find(a => a.$['android:name'] === '.MainActivity');
    if (!originalMainActivity) {
      throw new Error('MainActivity does not exist in AndroidManifest application.');
    }
    const restActivity = mainApplication.activity?.filter(a => a.$['android:name'] !== '.MainActivity') ?? [];
    const mainActivity = {
      $: {
        'android:name': '.MainActivity',
        'android:theme': '@style/Theme.App.SplashScreen',
        'android:exported': 'true' as 'true',
      },
      'intent-filter': [
        {
          action: [{$: {'android:name': 'android.intent.action.MAIN'}}],
          category: [{$: {'android:name': 'android.intent.category.LAUNCHER'}}],
        },
      ],
    };

    config.modResults = {
      ...androidManifest,
      manifest: {
        ...androidManifest.manifest,
        application: [
          {
            ...mainApplication,
            activity: [
              mainActivity,
              {
                $: {
                  ...originalMainActivity.$,
                  'android:name': '.AppActivity',
                  'android:exported': 'false',
                  'android:theme': undefined,
                },
              },
              ...restActivity,
            ],
          },
        ],
      },
    };
    return config;
  });
};
