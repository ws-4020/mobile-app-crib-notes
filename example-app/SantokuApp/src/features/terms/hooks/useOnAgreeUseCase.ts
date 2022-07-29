import {useAccountDataOperation} from 'features/account/hooks/useAccountDataOperation';
import {useIsLoggedIn} from 'features/account/hooks/useIsLoggedIn';
import {usePostAccountsMeTerms} from 'features/account/hooks/usePostAccountsMeTerms';
import {TermsOfService} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreedClientState} from './useAgreedClientState';

export const useOnAgreeUseCase = (close: () => void, termsOfService: TermsOfService) => {
  const [, setAgreedStatus] = useAgreedClientState();
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
