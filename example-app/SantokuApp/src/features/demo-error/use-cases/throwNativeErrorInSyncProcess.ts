import {NativeModules} from 'react-native';
const {ThrowErrorModule} = NativeModules;
export const throwNativeErrorInSyncProcess = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  await ThrowErrorModule.throwErrorSyncProcess();
};
