import {render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/components/overlay/snackbar/Snackbar';
import {WithAppTheme} from 'bases/ui/contexts/AppThemeContext';
import {enhanceValidator} from 'bases/validator/utils';
import {useGetTerms} from 'features/backend/apis/terms/terms';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ProfileRegistrationPageProps} from './ProfileRegistrationPage';

jest.mock('features/backend/apis/terms/terms');

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <WithAppTheme>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <TermsAgreementOverlay.Component />
        <Snackbar.Component />
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
    const Page = require('./ProfileRegistrationPage')
      .ProfileRegistrationPage as React.VFC<ProfileRegistrationPageProps>;
    render(<Page termsAgreementStatus={{hasAgreed: true, agreedVersion: '1.0.0'}} />, {
      wrapper: Wrapper,
    });
    expect(screen.queryByTestId('ProfileRegistration')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
