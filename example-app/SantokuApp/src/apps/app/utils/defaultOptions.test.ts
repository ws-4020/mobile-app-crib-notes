import {defaultOptions} from './defaultOptions';

describe('useDefaultOptions', () => {
  test('retryがfalseに設定されていること', () => {
    expect(defaultOptions.queries?.retry).toEqual(false);
  });
});
