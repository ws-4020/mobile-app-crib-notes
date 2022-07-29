import {render, screen} from '@testing-library/react-native';
import {WithSnackbar} from 'bases/ui/components/overlay/snackbar/WithSnackbar';
import React from 'react';
import {Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {WithReactQuery} from './WithReactQuery';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <WithSnackbar>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
    </WithSnackbar>
  );
};

describe('WithReactQuery', () => {
  test('子要素を正常にrenderできること', () => {
    const children = <Text testID="test">test</Text>;
    render(<WithReactQuery>{children}</WithReactQuery>, {wrapper: Wrapper});
    expect(screen.getByTestId('test')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
