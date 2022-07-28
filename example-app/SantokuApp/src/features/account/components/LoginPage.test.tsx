import {render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import {WithAppTheme} from 'bases/ui/contexts/AppThemeContext';
import {WithSnackbar} from 'bases/ui/contexts/WithSnackbar';
import {enhanceValidator} from 'bases/validator/utils';
import {useGetAccountsMe, useGetAccountsMeTerms, usePostAccountsMeTerms} from 'features/backend/apis/account/account';
import {useGetTerms} from 'features/backend/apis/terms/terms';
import {WithAccountContextMock} from 'features/tests/WithAccountContextMock.test';
import {WithTermsAgreementOverlayMock} from 'features/tests/WithTermsAgreementOverlayMock.test';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {LoginPageProps} from './LoginPage';

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
            <WithAccountContextMock accountData={accountData}>
              <WithTermsAgreementOverlayMock>{children}</WithTermsAgreementOverlayMock>
            </WithAccountContextMock>
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
    const Screen = require('./LoginPage').LoginPage.component as React.FC<LoginPageProps>;
    render(<Screen navigation={{createAccount: jest.fn}} />, {
      wrapper: Wrapper,
    });
    expect(screen.queryByTestId('Login')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
