import {render} from '@testing-library/react-native';
import {WithAccountContext} from 'context/WithAccountContext';
import {AppConfig, BundledMessagesLoader, loadMessages} from 'framework';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {WithSnackbar} from '../snackbar';
import {
  useTermsOfServiceAgreementOverlay,
  WithTermsOfServiceAgreementOverlay,
} from './WithTermsOfServiceAgreementOverlay';

jest.useFakeTimers();

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <WithSnackbar>
        <QueryClientProvider client={queryClient}>
          <WithAccountContext accountData={accountData}>{children}</WithAccountContext>
        </QueryClientProvider>
      </WithSnackbar>
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

const ChildComponent: React.FC = () => {
  const termsOverlay = useTermsOfServiceAgreementOverlay();

  useEffect(() => {
    termsOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl}});
  }, [termsOverlay]);

  return <Text testID="text">test</Text>;
};

describe('WithTermsOfServiceAgreementOverlay', () => {
  it('useTermsOfServiceAgreementOverlayのshowで、利用規約が正常に表示されることを確認', () => {
    const renderResult = render(
      <WithTermsOfServiceAgreementOverlay accountData={{terms: {}}}>
        <ChildComponent />
      </WithTermsOfServiceAgreementOverlay>,
      {wrapper: Wrapper},
    );

    expect(renderResult.queryByTestId('TermsOfServiceAgreement')).not.toBeNull();
  });

  it('利用規約に同意済の場合は、利用規約が表示されないことを確認', () => {
    const renderResult = render(
      <WithTermsOfServiceAgreementOverlay
        accountData={{
          terms: {
            termsOfService: {version: '1.0.0', url: AppConfig.termsUrl},
            termsOfServiceAgreementStatus: {hasAgreed: true, agreedVersion: '0.9.0'},
          },
        }}
      />,
      {wrapper: Wrapper},
    );

    expect(renderResult.queryByTestId('TermsOfServiceAgreement')).toBeNull();
  });

  it('利用規約に同意済ではない場合は、利用規約が正常に表示されることを確認', () => {
    const renderResult = render(
      <WithTermsOfServiceAgreementOverlay
        accountData={{
          terms: {
            termsOfService: {version: '1.0.0', url: AppConfig.termsUrl},
            termsOfServiceAgreementStatus: {hasAgreed: false, agreedVersion: '0.9.0'},
          },
        }}
      />,
      {wrapper: Wrapper},
    );

    expect(renderResult.queryByTestId('TermsOfServiceAgreement')).not.toBeNull();
  });
});
