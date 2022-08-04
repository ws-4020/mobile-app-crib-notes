import {NativeModules} from 'react-native';
const {ThrowErrorModule} = NativeModules;
export const throwNativeErrorInSyncProcessUseCase = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  await ThrowErrorModule.throwErrorSyncProcess();
};
