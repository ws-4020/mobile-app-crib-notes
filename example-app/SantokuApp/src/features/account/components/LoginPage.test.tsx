import {render, screen, waitFor} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import {WithAppTheme} from 'bases/ui/contexts/AppThemeContext';
import {WithSnackbar} from 'bases/ui/contexts/WithSnackbar';
import {enhanceValidator} from 'bases/validator/utils';
import {useGetAccountsMe, useGetAccountsMeTerms, usePostAccountsMeTerms} from 'features/backend/apis/account/account';
import {useGetTerms} from 'features/backend/apis/terms/terms';
import {WithTermsAgreementOverlay} from 'features/terms/contexts/WithTermsAgreementOverlay';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {WithAccountContext} from '../contexts/WithAccountContext';
import {LoginPageProps} from './LoginPage';

jest.mock('features/backend/apis/account/account');
jest.mock('features/backend/apis/terms/terms');

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <WithAppTheme>
        <WithSnackbar>
          <QueryClientProvider client={queryClient}>
            <WithAccountContext accountData={accountData}>
              <WithTermsAgreementOverlay>{children}</WithTermsAgreementOverlay>
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
  it('マウントされたときに正常にレンダリングされること', async () => {
    (useGetAccountsMe as jest.Mock).mockReturnValue({refetch: () => {}});
    (useGetAccountsMeTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    (useGetTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    (usePostAccountsMeTerms as jest.Mock).mockReturnValue({mutateAsync: () => {}});
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const Page = require('./LoginPage').LoginPage as React.FC<LoginPageProps>;
    render(<Page navigateToCreateAccount={() => {}} />, {
      wrapper: Wrapper,
    });
    await waitFor(() => {
      expect(screen.queryByTestId('Login')).not.toBeNull();
      expect(screen).toMatchSnapshot();
    });
  });
});
