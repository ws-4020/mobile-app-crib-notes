import '@testing-library/jest-native/extend-expect';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {AppThemeProvider} from 'bases/ui/theme/AppThemeProvider';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import {handlers} from 'fixtures/msw/handlers';
import {setupServer} from 'msw/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import type {HomePageProps} from './HomePage';

const server = setupServer(...handlers);
beforeAll(async () => {
  await loadMessages(new BundledMessagesLoader());
  server.listen();
});
afterAll(() => server.close());

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </NavigationContainer>
        <TermsAgreementOverlay.Component />
        <Snackbar.Component />
      </AppThemeProvider>
    </SafeAreaProvider>
  );
};

describe('Home', () => {
  beforeEach(() => {
    // メッセージのロード前にHomePageをimportしてしまうとエラーになるため、メッセージのロード後にrequireします
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const HomePage = require('./HomePage').HomePage as React.FC<HomePageProps>;
    render(
      <HomePage
        navigateToQuestionDetail={() => {}}
        navigateToQuestionAndEventPost={() => {}}
        setNavigationOptions={() => {}}
      />,
      {
        wrapper: Wrapper,
      },
    );
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(screen.queryByTestId('HomePage')).toHaveTextContent('募集中のイベント');
    expect(screen).toMatchSnapshot();
  });
});
