import {render, waitFor} from '@testing-library/react-native';
import {WithSnackbar} from 'components/snackbar';
import {WithNavigationContainer} from 'navigation/WithNavigationContainer';
import React from 'react';
import {Text} from 'react-native';

import {WithInitializeContext} from './InitializeContext';

describe('WithInitializeContext', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithInitialContextを子要素を含めて正常にrenderできること', async () => {
    const component = (
      <WithInitializeContext>
        <ChildComponent />
      </WithInitializeContext>
    );
    const wrapper: React.FC = ({children}) => (
      <WithSnackbar>
        <WithNavigationContainer>{children}</WithNavigationContainer>
      </WithSnackbar>
    );
    const withInitializeContext = render(component, {wrapper});
    expect(withInitializeContext.queryByTestId('test')).toBeNull();
    await waitFor(() => {
      expect(withInitializeContext.queryByTestId('test')).not.toBeNull();
      expect(withInitializeContext).toMatchSnapshot();
    });
  });
});
