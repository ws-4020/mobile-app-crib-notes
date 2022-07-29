import '@testing-library/jest-native/extend-expect';
import {render, screen} from '@testing-library/react-native';
import {WithSnackbar} from 'bases/ui/components/overlay/snackbar/Snackbar';
import {WithTermsAgreementOverlay} from 'features/terms/contexts/WithTermsAgreementOverlay';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {HomePage} from './HomePage';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <WithSnackbar>
      <QueryClientProvider client={queryClient}>
        <WithTermsAgreementOverlay>{children}</WithTermsAgreementOverlay>
      </QueryClientProvider>
    </WithSnackbar>
  );
};

describe('Home', () => {
  beforeEach(() => {
    render(<HomePage />, {wrapper: Wrapper});
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    expect(screen.queryByTestId('HomePage')).toHaveTextContent('開発中');
    expect(screen).toMatchSnapshot();
  });
});
