import '@testing-library/jest-native/extend-expect';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/config';
import {WithSnackbar} from 'bases/ui/components/overlay';
import {WithAccountContext} from 'apps/app/providers/WithAccountContext';
import {WithTermsAgreementOverlay} from 'apps/app/providers/WithTermsAgreementOverlay';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {HomeScreen} from './HomeScreen';

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
        <NavigationContainer>
          <WithAccountContext accountData={accountData}>
            <WithTermsAgreementOverlay>{children}</WithTermsAgreementOverlay>
          </WithAccountContext>
        </NavigationContainer>
      </QueryClientProvider>
    </WithSnackbar>
  );
};

describe('Home', () => {
  beforeEach(() => {
    const Screen = HomeScreen.component as React.FC;
    render(<Screen />, {wrapper: Wrapper});
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(screen.queryByTestId('HomeScreen')).toHaveTextContent('開発中');
    expect(screen).toMatchSnapshot();
  });
});
