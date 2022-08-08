import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isIrisSupportedUseCase = async () => {
  const isSupported = await LocalAuthentication.isIrisSupported();
  alert(isSupported);
};
