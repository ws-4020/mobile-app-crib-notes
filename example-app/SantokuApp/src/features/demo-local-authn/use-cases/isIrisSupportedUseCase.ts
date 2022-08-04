import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const isIrisSupportedUseCase = async () => {
  const isSupported = await LocalAuthentication.isIrisSupported();
  alert(isSupported);
};
