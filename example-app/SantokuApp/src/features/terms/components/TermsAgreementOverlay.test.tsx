import {render, screen} from '@testing-library/react-native';
import {AppConfig} from 'bases/core/config/AppConfig';
import {BundledMessagesLoader} from 'bases/message/utils/BundledMessageLoader';
import {loadMessages} from 'bases/message/utils/Message';
import {Snackbar} from 'bases/ui/overlay/snackbar/Snackbar';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {TermsAgreementOverlay} from './TermsAgreementOverlay';

jest.useFakeTimers();

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

const ChildComponent: React.FC = () => {
  useEffect(() => {
    TermsAgreementOverlay.show({termsOfService: {version: '1.0.0', url: AppConfig.termsUrl}});
  }, []);

  return <Text testID="text">test</Text>;
};

describe('WithTermsOfServiceAgreementOverlay', () => {
  it('useTermsAgreementOverlayのshowで、利用規約が正常に表示されることを確認', () => {
    render(
      <>
        <ChildComponent />
        <TermsAgreementOverlay.Component />
      </>,
      {wrapper: Wrapper},
    );
    expect(screen.queryByText('利用規約')).not.toBeNull();
  });
});
