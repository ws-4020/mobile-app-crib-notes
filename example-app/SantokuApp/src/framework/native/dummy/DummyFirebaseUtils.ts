import type {ReactNativeFirebaseApp, ReactNativeFirebaseUtilsModule} from './DummyFirebaseTypes';

const NA = 'N/A';

const playServicesAvailability = {
  status: 16,
  isAvailable: false,
  isUserResolvableError: false,
  error: NA,
  hasResolution: false,
};
const dummyFirebaseUtilsModuleBase: Omit<ReactNativeFirebaseUtilsModule, 'app' | 'native' | 'emit'> = {
  isRunningInTestLab: false,
  playServicesAvailability,
  getPlayServicesStatus: () => Promise.resolve(playServicesAvailability),
  makePlayServicesAvailable: () => Promise.resolve(),
  promptForPlayServices: () => Promise.resolve(),
  resolutionForPlayServices: () => Promise.resolve(),
};
const dummyFilePath = {
  MAIN_BUNDLE: NA,
  CACHES_DIRECTORY: NA,
  DOCUMENT_DIRECTORY: NA,
  TEMP_DIRECTORY: NA,
  LIBRARY_DIRECTORY: NA,
  EXTERNAL_DIRECTORY: NA,
  EXTERNAL_STORAGE_DIRECTORY: NA,
  PICTURES_DIRECTORY: NA,
  MOVIES_DIRECTORY: NA,
};

export const createDummyFirebaseUtils = (app: ReactNativeFirebaseApp) => {
  const utils = () => ({app, ...dummyFirebaseUtilsModuleBase} as ReactNativeFirebaseUtilsModule);
  utils.SDK_VERSION = NA;
  utils.FilePath = dummyFilePath;
  return utils;
};
