import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const isFacialSupported = async () => {
  const isSupported = await LocalAuthentication.isFacialSupported();
  alert(isSupported);
};
