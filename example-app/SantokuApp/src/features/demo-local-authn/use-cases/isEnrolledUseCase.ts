import {LocalAuthentication} from 'bases/local-authentication/utils/LocalAuthentication';

export const isEnrolledUseCase = async () => {
  const isEnrolled = await LocalAuthentication.isEnrolled();
  alert(isEnrolled);
};
