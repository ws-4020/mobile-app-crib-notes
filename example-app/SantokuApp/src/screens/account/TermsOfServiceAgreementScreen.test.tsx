import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {TermsOfServiceAgreementScreen} from './TermsOfServiceAgreementScreen';

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
    const Screen = TermsOfServiceAgreementScreen.component as React.FC;
    const app = render(<Screen />, {
      wrapper: Wrapper,
    });
    expect(app.queryByTestId('TermsOfServiceAgreementScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
