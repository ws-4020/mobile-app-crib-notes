import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isFacialSupportedUseCase = async () => {
  const isSupported = await LocalAuthentication.isFacialSupported();
  alert(isSupported);
};
