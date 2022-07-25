import {renderHook} from '@testing-library/react-native';

import {WithSnackbar} from '../providers/WithSnackbar';
import {useDefaultOptions} from './useDefaultOptions';

describe('useDefaultOptions', () => {
  test('retryがfalseに設定されていること', () => {
    const {result} = renderHook(() => useDefaultOptions(), {wrapper: WithSnackbar});
    const defaultOptions = result.current;
    expect(defaultOptions.queries?.retry).toEqual(false);
  });
});
