import {render, RenderOptions} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';
import {AppearanceProvider} from 'react-native-appearance';

import {AppThemeProvider} from './AppThemeProvider';

const renderWithAppearanceProvider = (component: React.ReactElement<any>, options?: RenderOptions) => {
  return render(component, {wrapper: AppearanceProvider, ...options});
};

describe('AppThemeProvider', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('AppThemeProviderを子要素を含めて正常にrenderできること', () => {
    const appThemeProvider = renderWithAppearanceProvider(
      <AppThemeProvider>
        <ChildComponent />
      </AppThemeProvider>,
    );
    expect(appThemeProvider.queryByTestId('test')).not.toBeNull();
    expect(appThemeProvider).toMatchSnapshot();
  });
});
