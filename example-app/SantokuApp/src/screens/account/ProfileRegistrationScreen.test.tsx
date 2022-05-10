import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithAppTheme} from 'components/theme';
import {WithAccountContext} from 'context/WithAccountContext';
import {BundledMessagesLoader, loadMessages} from 'framework/message';
import {enhanceValidator} from 'framework/validator';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {WithTermsContext} from '../../context/WithTermsContext';
import {useGetTerms} from '../../service';

jest.mock('service/backend/termService');

const Wrapper: React.FC = ({children}) => {
  const initialData = {accountData: {account: {accountId: '123456789', deviceTokens: []}}};
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <WithAppTheme>
        <WithSnackbar>
          <QueryClientProvider client={queryClient}>
            <WithAccountContext initialData={initialData}>
              <WithTermsContext initialData={initialData}>{children}</WithTermsContext>
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

describe('ProfileRegistrationScreen', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    (useGetTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const Screen = require('./ProfileRegistrationScreen').ProfileRegistrationScreen.component as React.FC;
    const app = render(<Screen />, {
      wrapper: Wrapper,
    });
    expect(app.queryByTestId('ProfileRegistration')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
