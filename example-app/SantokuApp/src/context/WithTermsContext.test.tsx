import {render} from '@testing-library/react-native';
import {AppConfig} from 'framework/config';
import React from 'react';
import {Text} from 'react-native';

import {WithTermsContext} from './WithTermsContext';

describe('WithTermsContext', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithTermsContextを子要素を含めて正常にrenderできること', () => {
    const initialData = {
      accountData: {
        terms: {
          termsOfServiceAgreementStatus: {hasAgreedValidTermsOfService: true, agreedTermsOfServiceVersion: '1.0.0'},
          termsOfService: {latestTermsOfServiceVersion: '1.0.0', url: AppConfig.termsUrl},
        },
      },
    };
    const withTermsContext = render(
      <WithTermsContext initialData={initialData}>
        <ChildComponent />
      </WithTermsContext>,
    );

    expect(withTermsContext.queryByTestId('test')).not.toBeNull();
    expect(withTermsContext).toMatchSnapshot();
  });
});
