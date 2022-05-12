import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithTermsOfServiceAgreementOverlay} from 'components/overlay/termsOfService';
import {WithAppTheme} from 'components/theme';
import {WithAccountContext} from 'context/WithAccountContext';
import {BundledMessagesLoader, loadMessages} from 'framework/message';
import {enhanceValidator} from 'framework/validator';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useGetAccountsMe, useGetAccountsMeTerms, useGetTerms, usePostAccountsMeTerms} from 'service';

jest.mock('service/backend/accountService');
jest.mock('service/backend/termService');

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <WithAppTheme>
        <WithSnackbar>
          <QueryClientProvider client={queryClient}>
            <WithAccountContext accountData={accountData}>
              <WithTermsOfServiceAgreementOverlay accountData={accountData}>
                {children}
              </WithTermsOfServiceAgreementOverlay>
            </WithAccountContext>
          </QueryClientProvider>
        </WithSnackbar>
      </WithAppTheme>
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
  enhanceValidator();
});

describe('LoginScreen', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    (useGetAccountsMe as jest.Mock).mockReturnValue({refetch: () => {}});
    (useGetAccountsMeTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    (useGetTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    (usePostAccountsMeTerms as jest.Mock).mockReturnValue({mutateAsync: () => {}});
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const Screen = require('./LoginScreen').LoginScreen.component as React.FC;
    const app = render(<Screen />, {
      wrapper: Wrapper,
    });
    expect(app.queryByTestId('Login')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
