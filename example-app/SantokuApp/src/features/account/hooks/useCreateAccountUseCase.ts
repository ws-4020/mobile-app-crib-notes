import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'apps/app/navigators/types';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useTermsAgreementOverlay} from 'features/terms/contexts/useTermsAgreementOverlay';
import {useCallback} from 'react';

import {useTerms} from './useTerms';

export const useCreateAccountUseCase = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const termsAgreementOverlay = useTermsAgreementOverlay();
  const {termsOfService} = useTerms();
  const createAccount = useCallback(() => {
    termsAgreementOverlay.show({
      // 利用規約を取得できていない場合はボタンを非活性にしているので、ここでは必ず存在する想定
      termsOfService: termsOfService.data,
      exitingCallbackOnAgreed: (termsOfServiceAgreementStatus: TermsOfServiceAgreementStatus) => {
        navigation.navigate('ProfileRegistration', termsOfServiceAgreementStatus);
      },
      dismissible: true,
    });
  }, [navigation, termsAgreementOverlay, termsOfService]);
  return {createAccount};
};
