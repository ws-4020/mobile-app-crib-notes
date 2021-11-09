import {renderHook} from '@testing-library/react-hooks';
import {useColorScheme} from 'react-native';

import {darkModeAppTheme, lightModeAppTheme} from './AppTheme';
import {useAppTheme} from './useAppTheme';

jest.mock('react-native', () => {
  return {
    useColorScheme: jest.fn().mockName('mockUseColorScheme').mockReturnValue('light'),
  };
});

describe('useAppTheme', () => {
  it('colorSchemeがlightの場合にlight用のAppThemeが取得できること', () => {
    const mockUseColorScheme = useColorScheme as jest.Mock;
    mockUseColorScheme.mockReturnValue('light');
    const {result} = renderHook(() => useAppTheme());
    const appTheme = result.current;
    expect(appTheme).toEqual(lightModeAppTheme);
  });

  it('colorSchemeがdarkの場合にdark用のAppThemeが取得できること', () => {
    const mockUseColorScheme = useColorScheme as jest.Mock;
    mockUseColorScheme.mockReturnValue('dark');
    const {result} = renderHook(() => useAppTheme());
    const appTheme = result.current;
    expect(appTheme).toEqual(darkModeAppTheme);
  });

  it('colorSchemeがnullの場合にlight用のAppThemeが取得できること', () => {
    const mockUseColorScheme = useColorScheme as jest.Mock;
    mockUseColorScheme.mockReturnValue(null);
    const {result} = renderHook(() => useAppTheme());
    const appTheme = result.current;
    expect(appTheme).toEqual(lightModeAppTheme);
  });
});
