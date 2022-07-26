import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useTermsAgreementOverlay} from 'features/terms/contexts/useTermsAgreementOverlay';
import {useCallback} from 'react';

import {useTerms} from './useTerms';

export const useCreateAccountUseCase = (navigation: {
  createAccount: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => void;
}) => {
  const termsAgreementOverlay = useTermsAgreementOverlay();
  const {termsOfService} = useTerms();
  const createAccount = useCallback(() => {
    termsAgreementOverlay.show({
      // 利用規約を取得できていない場合はボタンを非活性にしているので、ここでは必ず存在する想定
      termsOfService: termsOfService!.data,
      exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
        navigation.createAccount(termsOfServiceAgreementStatus);
      },
      dismissible: true,
    });
  }, [navigation, termsAgreementOverlay, termsOfService]);
  return {createAccount};
};
