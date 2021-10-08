import {Config as RNConfig} from 'react-native-config';

class Config {
  get appIdFlavorSuffix(): string {
    return RNConfig.APP_ID_FLAVOR_SUFFIX;
  }

  get appNameHome(): string {
    return RNConfig.APP_NAME_HOME;
  }

  get provisioningProfileFlavor(): string {
    return RNConfig.PROVISIONING_PROFILE_FLAVOR;
  }
}
export const config = new Config();
