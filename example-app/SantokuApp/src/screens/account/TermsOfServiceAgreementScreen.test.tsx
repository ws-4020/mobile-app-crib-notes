import '@testing-library/jest-native/extend-expect';
import {render} from '@testing-library/react-native';
import {WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import {WithTermsContext} from 'context/WithTermsContext';
import {BundledMessagesLoader, loadMessages} from 'framework';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const Wrapper: React.FC = ({children}) => {
  const initialData = {accountData: {account: {accountId: '123456789', deviceTokens: []}}};
  const queryClient = new QueryClient();
  return (
    <WithSnackbar>
      <QueryClientProvider client={queryClient}>
        <WithAccountContext initialData={initialData}>
          <WithTermsContext initialData={initialData}>{children}</WithTermsContext>
        </WithAccountContext>
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
    const Screen = require('./TermsOfServiceAgreementScreen').TermsOfServiceAgreementScreen.component as React.FC;
    const app = render(<Screen />, {
      wrapper: Wrapper,
    });
    expect(app.queryByTestId('TermsOfServiceAgreementScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });
});
