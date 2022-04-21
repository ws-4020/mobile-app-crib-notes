import {renderHook, WrapperComponent} from '@testing-library/react-hooks';
import {WithSnackbar} from 'components/overlay';
import {WithAccountContext} from 'context/WithAccountContext';
import {AppInitialData} from 'framework/initialize/types';
import React from 'react';
import {MutationCache, QueryCache} from 'react-query';

import {useDefaultQueryCache, useDefaultMutationCache} from './useDefaultCache';

const wrapper: WrapperComponent<React.ProviderProps<AppInitialData>> = ({children, value}) => {
  return (
    <WithSnackbar>
      <WithAccountContext initialData={value}>{children}</WithAccountContext>
    </WithSnackbar>
  );
};

describe('useDefaultQueryCache', () => {
  test('onErrorが設定されたQueryCacheを取得できること', () => {
    const {result} = renderHook(() => useDefaultQueryCache(), {
      wrapper,
      initialProps: {value: {accountData: {account: {accountId: '123456789', deviceTokens: []}}}},
    });
    const defaultQueryCache = result.current;
    expect(defaultQueryCache).toBeInstanceOf(QueryCache);
    expect(defaultQueryCache.config.onError).not.toBeUndefined();
  });
});

describe('useDefaultMutationCache', () => {
  test('onErrorが設定されたMutationCacheを取得できること', () => {
    const {result} = renderHook(() => useDefaultMutationCache(), {
      wrapper,
      initialProps: {value: {accountData: {account: {accountId: '123456789', deviceTokens: []}}}},
    });
    const defaultQueryCache = result.current;
    expect(defaultQueryCache).toBeInstanceOf(MutationCache);
    expect(defaultQueryCache.config.onError).not.toBeUndefined();
  });
});
