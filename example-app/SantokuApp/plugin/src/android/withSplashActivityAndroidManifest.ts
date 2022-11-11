import {ConfigPlugin, withAndroidManifest} from '@expo/config-plugins';

const withSplashActivityAndroidManifest: ConfigPlugin = config => {
  return withAndroidManifest(config, config => {
    const androidManifest = config.modResults;
    if (!androidManifest.manifest.application?.length) {
      // applicationは必ず存在する想定
      throw new Error('Application does not exist in AndroidManifest.');
    }
    const mainApplication = androidManifest.manifest.application[0];
    if (!mainApplication.activity) {
      throw new Error('Activity does not exist in AndroidManifest application.');
    }
    const splashActivity = {
      $: {
        'android:name': '.SplashActivity',
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

    const mainActivity = mainApplication.activity[0];
    console.log(JSON.stringify(mainApplication, null, 2));

    // packageが変更されている状態のAndroidManifestではないため、自分でpackageを変更してます
    config.modResults = {
      manifest: {
        ...androidManifest.manifest,
        $: {...androidManifest.manifest.$, package: config.android?.package},
        // MainActivityのIntentFilterは削除
        application: [
          {
            ...mainApplication,
            $: {...mainApplication.$, 'android:usesCleartextTraffic': undefined},
            activity: [
              splashActivity,
              {$: {...mainActivity.$, 'android:exported': 'false', 'android:theme': undefined}},
            ],
          },
        ],
      },
    };
    return config;
  });
};

export default withSplashActivityAndroidManifest;
