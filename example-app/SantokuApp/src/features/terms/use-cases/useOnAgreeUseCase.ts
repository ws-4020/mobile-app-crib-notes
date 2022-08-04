import {useIsLoggedIn} from 'features/account/client-states/useIsLoggedIn';
import {useAccountDataOperation} from 'features/account/services/useAccountDataOperation';
import {usePostAccountsMeTerms} from 'features/account/services/usePostAccountsMeTerms';
import {TermsOfService} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreed} from '../client-states/useAgreed';

export const useOnAgreeUseCase = (close: () => void, termsOfService: TermsOfService) => {
  const [, setAgreedStatus] = useAgreed();
  const [isLoggedIn] = useIsLoggedIn();
  const {agreedToTerms} = useAccountDataOperation();
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();
  const onAgree = useCallback(async () => {
    try {
      const termsAgreementStatus = {
        hasAgreed: true,
        agreedVersion: termsOfService.version,
      };
      if (isLoggedIn) {
        await callPostAccountsMeTerms(termsAgreementStatus);
        agreedToTerms(termsAgreementStatus.agreedVersion);
      }
      setAgreedStatus(termsAgreementStatus);
      close();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [agreedToTerms, callPostAccountsMeTerms, close, isLoggedIn, setAgreedStatus, termsOfService.version]);
  return {onAgree, isLoading};
};
