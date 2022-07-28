import {generatePassword} from 'bases/core/utils/generatePassword';
import {useSignup} from 'features/account/hooks/useSignup';
import {useCallback} from 'react';

import {handleError} from '../utils/handleError';
import {useAccountId} from './useAccountId';

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
