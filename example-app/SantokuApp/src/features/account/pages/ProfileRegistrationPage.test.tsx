/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, screen} from '@testing-library/react-native';
import {BundledMessagesLoader} from 'bases/message/BundledMessageLoader';
import {loadMessages} from 'bases/message/Message';
import {Snackbar} from 'bases/ui/snackbar/Snackbar';
import {AppThemeProvider} from 'bases/ui/theme/AppThemeProvider';
import {enhanceValidator} from 'bases/validator';
import {useGetTerms} from 'features/backend/apis/terms/terms';
import {TermsAgreementOverlay} from 'features/terms/components/TermsAgreementOverlay';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ProfileRegistrationPageProps} from './ProfileRegistrationPage';

jest.mock('features/backend/apis/terms/terms');

const Wrapper: React.FC<React.PropsWithChildren> = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        <TermsAgreementOverlay.Component />
        <Snackbar.Component />
      </AppThemeProvider>
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
    /*
      eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-var-requires --
      importでLoginScreenを読み込むと、メッセージのロードが完了する前にメッセージを読み込んでしまうため、requireで取得する
      requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
     */
    const Page = require('./ProfileRegistrationPage').ProfileRegistrationPage as React.FC<ProfileRegistrationPageProps>;
    render(<Page termsAgreementStatus={{hasAgreed: true, agreedVersion: '1.0.0'}} />, {
      wrapper: Wrapper,
    });
    expect(screen.queryByTestId('ProfileRegistration')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
