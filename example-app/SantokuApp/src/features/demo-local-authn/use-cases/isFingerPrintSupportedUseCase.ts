import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isFingerPrintSupportedUseCase = async () => {
  const isSupported = await LocalAuthentication.isFingerPrintSupported();
  alert(isSupported);
};
