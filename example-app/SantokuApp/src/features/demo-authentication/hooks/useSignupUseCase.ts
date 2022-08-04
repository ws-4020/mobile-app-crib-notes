import {generatePassword} from 'bases/core/utils/generatePassword';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';
import {useAccountId} from './useAccountId';
import {useSignup} from './useSignup';

export const useSignupUseCase = () => {
  const [, setAccountId] = useAccountId();
  const mutationSignup = useSignup();
  const signup = useCallback(async () => {
    try {
      const password = await generatePassword();
      const account = await mutationSignup.mutateAsync({nickname: 'demoNickname', password});
      setAccountId(account.accountId);
      alert(`アカウントIDは${account.accountId}です`);
    } catch (e) {
      handleError(e);
    }
  }, [mutationSignup, setAccountId]);
  return {signup, isLoading: mutationSignup.isLoading};
};
