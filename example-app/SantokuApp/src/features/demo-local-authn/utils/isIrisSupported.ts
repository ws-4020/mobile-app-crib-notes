import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const isIrisSupported = async () => {
  const isSupported = await LocalAuthentication.isIrisSupported();
  alert(isSupported);
};
