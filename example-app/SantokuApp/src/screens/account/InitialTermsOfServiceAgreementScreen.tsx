import {m} from 'framework';
import {InitialDataDependingComponent, withInitialData} from 'framework/initialize';
import {AppInitialData} from 'framework/initialize/types';
import {AuthenticatedStackParamList} from 'navigation/types';
import React, {useMemo} from 'react';

import {TermsOfServiceAgreementTemplate} from './TermsOfServiceAgreementTemplate';
import {useOnAgreedInitialTermsOfService} from './usecases';

const ScreenName = 'InitialTermsOfServiceAgreement';

export const InitialTermsOfServiceAgreementScreen = {
  name: ScreenName as typeof ScreenName,
};

const Component: InitialDataDependingComponent = ({initialData}) => {
  const onAgreed = useOnAgreedInitialTermsOfService();
  return (
    <TermsOfServiceAgreementTemplate
      termsOfService={initialData.accountData.terms?.termsOfService}
      onAgreed={onAgreed}
    />
  );
};

export const useInitialTermsOfServiceAgreementScreen: (
  initialData: AppInitialData,
) => NativeStackScreenConfig<AuthenticatedStackParamList, typeof ScreenName> = initialData => {
  return useMemo(
    () => ({
      component: withInitialData(initialData, Component),
      name: ScreenName,
      options: {
        title: m('利用規約'),
      },
    }),
    [initialData],
  );
};
