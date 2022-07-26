import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/config/AppConfig';
import {WithSnackbarMock} from 'bases/tests/WithSnackbarMock.test';
import {WithAccountContextMock} from 'features/tests/WithAccountContextMock.test';
import {WithTermsAgreementOverlayMock} from 'features/tests/WithTermsAgreementOverlayMock.test';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {HomePage} from './HomePage';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  const accountData = {
    account: {accountId: '123456789', deviceTokens: []},
    terms: {
      termsOfService: {
        version: '1.0.0',
        url: AppConfig.termsUrl,
        termsAgreementStatus: {hasAgreed: true, agreedVersion: '1.0.0'},
      },
    },
  };
  return (
    <WithSnackbarMock>
      <QueryClientProvider client={queryClient}>
        <WithAccountContextMock accountData={accountData}>
          <WithTermsAgreementOverlayMock>{children}</WithTermsAgreementOverlayMock>
        </WithAccountContextMock>
      </QueryClientProvider>
    </WithSnackbarMock>
  );
};

describe('Home', () => {
  beforeEach(() => {
    const Screen = HomePage as React.FC;
    render(<Screen />, {wrapper: Wrapper});
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(screen.queryByTestId('HomeScreen')).toHaveTextContent('開発中');
    expect(screen).toMatchSnapshot();
  });
});
