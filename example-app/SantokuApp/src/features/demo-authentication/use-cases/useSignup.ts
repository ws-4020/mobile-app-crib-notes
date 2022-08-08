import {generatePassword} from 'bases/core/utils/generatePassword';
import {useCallback} from 'react';

import {useAccountId} from '../client-states/useAccountId';
import {useSignup as useSignupService} from '../services/useSignup';
import {handleError} from '../utils/handleError';

export const useSignup = () => {
  const [, setAccountId] = useAccountId();
  const mutationSignup = useSignupService();
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
