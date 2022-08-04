import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import {useCallback} from 'react';

import {useTerms} from '../services/useTerms';

export const useCreateAccountUseCase = (
  navigateToCreateAccount: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => void,
) => {
  const {termsOfService} = useTerms();
  const createAccount = useCallback(() => {
    TermsAgreementOverlay.show({
      // 利用規約を取得できていない場合はボタンを非活性にしているので、ここでは必ず存在する想定
      termsOfService: termsOfService!.data,
      exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
        navigateToCreateAccount(termsOfServiceAgreementStatus);
      },
      dismissible: true,
    });
  }, [navigateToCreateAccount, termsOfService]);
  return {createAccount};
};
