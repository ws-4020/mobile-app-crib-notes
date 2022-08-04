import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/config/AppConfig';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/components/overlay/snackbar/Snackbar';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {TermsAgreementOverlayComponent} from './TermsAgreementOverlayComponent';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Snackbar.Component />
    </SafeAreaProvider>
  );
};

beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
});

describe('TermsOfServiceAgreement', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    // importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    render(
      <TermsAgreementOverlayComponent
        visible
        close={() => {}}
        termsOfService={{version: '1.0.0', url: AppConfig.termsUrl}}
        contentViewTestID="TermsOfServiceAgreement"
      />,
      {
        wrapper: Wrapper,
      },
    );
    expect(screen.queryByTestId('TermsOfServiceAgreement')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
