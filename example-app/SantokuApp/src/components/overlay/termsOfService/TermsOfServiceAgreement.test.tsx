import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {TermsOfServiceAgreement} from './TermsOfServiceAgreement';

const Wrapper: React.FC = ({children}) => {
  const accountData = {account: {accountId: '123456789', deviceTokens: []}};
  const queryClient = new QueryClient();
  return (
    <WithSnackbar>
      <QueryClientProvider client={queryClient}>
        <WithAccountContext accountData={accountData}>{children}</WithAccountContext>
      </QueryClientProvider>
    </WithSnackbar>
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
    const app = render(
      <TermsOfServiceAgreement visible close={() => {}} termsOfService={{latestTermsOfServiceVersion: '', url: ''}} />,
      {
        wrapper: Wrapper,
      },
    );
    expect(app.queryByTestId('TermsOfServiceAgreement')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
