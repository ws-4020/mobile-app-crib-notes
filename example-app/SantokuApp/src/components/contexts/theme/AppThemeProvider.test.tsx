import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {AppThemeProvider} from './AppThemeProvider';

describe('AppThemeProvider', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('AppThemeProviderを子要素を含めて正常にrenderできること', () => {
    const appThemeProvider = render(
      <AppThemeProvider>
        <ChildComponent />
      </AppThemeProvider>,
    );
    expect(appThemeProvider.queryByTestId('test')).not.toBeNull();
    expect(appThemeProvider).toMatchSnapshot();
  });
});
