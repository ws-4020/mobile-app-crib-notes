import '@testing-library/jest-native/extend-expect';
import {renderHook} from '@testing-library/react-hooks';
import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {AppConfig, BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {useInitialTermsOfServiceAgreementScreen} from './InitialTermsOfServiceAgreementScreen';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <WithSnackbar>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WithSnackbar>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('TermsOfServiceAgreement', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    const termsOfServiceAgreementScreen = renderHook(() =>
      useInitialTermsOfServiceAgreementScreen({
        accountData: {terms: {termsOfService: {latestTermsOfServiceVersion: '1.0.0', url: AppConfig.termsUrl}}},
      }),
    ).result.current;
    const Screen = termsOfServiceAgreementScreen.component as React.FC;
    const app = render(<Screen />, {
      wrapper: Wrapper,
    });
    expect(app.queryByTestId('TermsOfServiceAgreementScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
