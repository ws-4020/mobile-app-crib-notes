import {config} from 'framework/config';

const info = [
  {
    name: 'APP_ID_FLAVOR_SUFFIX',
    value: config.appIdFlavorSuffix,
  },
  {
    name: 'APP_NAME_HOME',
    value: config.appNameHome,
  },
  {
    name: 'PROVISIONING_PROFILE_FLAVOR',
    value: config.provisioningProfileFlavor,
  },
];

const infoKeyExtractor = (_: unknown, index: number) => index.toString();

export const useConfig = () => {
  return {info, infoKeyExtractor};
};
