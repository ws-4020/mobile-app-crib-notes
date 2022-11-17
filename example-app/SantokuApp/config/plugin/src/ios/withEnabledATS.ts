import {ConfigPlugin, withInfoPlist} from '@expo/config-plugins';

/**
 * ATS（App Transport Security）の有効化・無効化を設定します。
 * @param config ExpoConfig
 * @param disabled
 */
export const withEnabledATS: ConfigPlugin<{enabled: boolean}> = (config, {enabled = true}) => {
  return withInfoPlist(config, config => {
    const ats = enabled ? undefined : {NSAllowsArbitraryLoads: true};
    config.modResults = {...config.modResults, NSAppTransportSecurity: ats};
    return config;
  });
};
