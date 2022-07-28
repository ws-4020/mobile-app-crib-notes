import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const isFingerPrintSupported = async () => {
  const isSupported = await LocalAuthentication.isFingerPrintSupported();
  alert(isSupported);
};
