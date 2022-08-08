import {render, screen} from '@testing-library/react-native';
import {Snackbar} from 'bases/ui/overlay/snackbar/Snackbar';
import React from 'react';
import {Text} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

import {ReactQueryProvider} from './ReactQueryProvider';

const Wrapper: React.FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Snackbar.Component />
    </>
  );
};

describe('WithReactQuery', () => {
  test('子要素を正常にrenderできること', () => {
    const children = <Text testID="test">test</Text>;
    render(<ReactQueryProvider>{children}</ReactQueryProvider>, {wrapper: Wrapper});
    expect(screen.getByTestId('test')).not.toBeNull();
    expect(screen).toMatchSnapshot();
  });
});
