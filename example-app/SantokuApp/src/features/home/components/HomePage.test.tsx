import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/config/AppConfig';
import {WithSnackbar} from 'bases/ui/contexts/WithSnackbar';
import {WithAccountContext} from 'features/account/contexts/WithAccountContext';
import {WithTermsAgreementOverlay} from 'features/terms/contexts/WithTermsAgreementOverlay';
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
    <WithSnackbar>
      <QueryClientProvider client={queryClient}>
        <WithAccountContext accountData={accountData}>
          <WithTermsAgreementOverlay>{children}</WithTermsAgreementOverlay>
        </WithAccountContext>
      </QueryClientProvider>
    </WithSnackbar>
  );
};

describe('Home', () => {
  beforeEach(() => {
    render(<HomePage />, {wrapper: Wrapper});
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(screen.queryByTestId('HomePage')).toHaveTextContent('開発中');
    expect(screen).toMatchSnapshot();
  });
});
