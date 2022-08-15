import {useIsLoggedIn} from 'features/account/client-states/useIsLoggedIn';
import {useAccountCommands} from 'features/account/services/account/useAccountCommands';
import {TermsOfService} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreed} from '../client-states/useAgreed';

export const useOnAgree = (close: () => void, termsOfService: TermsOfService) => {
  const [, setAgreedStatus] = useAgreed();
  const [isLoggedIn] = useIsLoggedIn();
  const accountCommands = useAccountCommands();
  const onAgree = useCallback(async () => {
    try {
      const termsAgreementStatus = {
        hasAgreed: true,
        agreedVersion: termsOfService.version,
      };
      if (isLoggedIn) {
        await accountCommands.agreeTerms(termsAgreementStatus);
      }
      setAgreedStatus(termsAgreementStatus);
      close();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [accountCommands, close, isLoggedIn, setAgreedStatus, termsOfService.version]);
  return {onAgree, isLoading: accountCommands.isaAgreeingTerms};
};
