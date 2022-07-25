import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/routers';
import {render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader, loadMessages} from 'bases/message';
import {WithSnackbar} from 'bases/ui/components/overlay';
import {WithAppTheme} from 'bases/ui/components/theme';
import {enhanceValidator} from 'bases/validator';
import {WithAccountContext} from 'apps/app/providers/WithAccountContext';
import {WithTermsAgreementOverlay} from 'apps/app/providers/WithTermsAgreementOverlay';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {useGetTerms} from 'service';

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

describe('ProfileRegistrationScreen', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    (useGetTerms as jest.Mock).mockReturnValue({refetch: () => {}});
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const Screen = require('./ProfileRegistrationScreen').ProfileRegistrationScreen.component as React.FC<
      NativeStackScreenProps<ParamListBase>
    >;
    render(
      <Screen
        navigation={__mocks.navigation}
        route={{
          params: {hasAgreedValidTermsOfService: true, agreedTermsOfServiceVersion: '1.0.0'},
          key: '',
          path: '',
          name: 'ProfileRegistration',
        }}
      />,
      {
        wrapper: Wrapper,
      },
    );
    expect(screen.queryByTestId('ProfileRegistration')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
