import '@testing-library/jest-native/extend-expect';
import {render, RenderOptions} from '@testing-library/react-native';
import React, {useContext} from 'react';
import {Text} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

import {darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {AppThemeContext, AppThemeProvider} from './AppThemeContext';

const renderWithAppearanceProvider = (component: React.ReactElement<any>, options?: RenderOptions) => {
  return render(component, {wrapper: AppearanceProvider, ...options});
};

jest.mock('react-native-appearance', () => {
  return {
    useColorScheme: jest.fn().mockName('mockUseColorScheme').mockReturnValue('light'),
  };
});

describe('AppThemeProvider', () => {
  const ChildComponent: React.FC = () => {
    const appTheme = useContext(AppThemeContext);
    return <Text testID="test">{appTheme.name}</Text>;
  };

  it('AppThemeProviderを子要素を含めて正常にrenderできること', () => {
    const appThemeProvider = renderWithAppearanceProvider(
      <AppThemeProvider>
        <ChildComponent />
      </AppThemeProvider>,
    );
    expect(appThemeProvider.queryByTestId('test')).not.toBeNull();
  });

  it('colorSchemeがlightの場合にlight用のAppThemeが取得できること', () => {
    const mockUseColorScheme = useColorScheme as jest.Mock;
    mockUseColorScheme.mockReturnValueOnce('light');
    const appThemeProvider = renderWithAppearanceProvider(
      <AppThemeProvider>
        <ChildComponent />
      </AppThemeProvider>,
    );

    expect(mockUseColorScheme).toBeCalled();
    expect(appThemeProvider.getByText(lightModeAppTheme.name)).not.toBeNull();
    expect(appThemeProvider).toMatchSnapshot();
  });

  it('colorSchemeがdarkの場合にdark用のAppThemeが取得できること', () => {
    const mockUseColorScheme = useColorScheme as jest.Mock;
    mockUseColorScheme.mockReturnValueOnce('dark');
    const appThemeProvider = renderWithAppearanceProvider(
      <AppThemeProvider>
        <ChildComponent />
      </AppThemeProvider>,
    );

    expect(mockUseColorScheme).toBeCalled();
    expect(appThemeProvider.getByText(darkModeAppTheme.name)).not.toBeNull();
    expect(appThemeProvider).toMatchSnapshot();
  });
});
