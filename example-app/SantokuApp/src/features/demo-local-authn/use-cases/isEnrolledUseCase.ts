import {LocalAuthentication} from 'bases/local-authentication/LocalAuthentication';

export const isEnrolledUseCase = async () => {
  const isEnrolled = await LocalAuthentication.isEnrolled();
  alert(isEnrolled);
};
