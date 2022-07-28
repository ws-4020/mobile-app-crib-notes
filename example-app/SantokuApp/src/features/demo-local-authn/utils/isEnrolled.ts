import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const isEnrolled = async () => {
  const isEnrolled = await LocalAuthentication.isEnrolled();
  alert(isEnrolled);
};
