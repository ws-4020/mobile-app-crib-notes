import {renderHook} from '@testing-library/react-hooks';

import {usePrevious} from './usePrevious';

describe('usePrevious', () => {
  it('returns previous value', () => {
    const {result, rerender} = renderHook(current => usePrevious(current), {initialProps: 1});
    expect(result.current).toBe(undefined);

    rerender(2);
    expect(result.current).toBe(1);
  });
});
