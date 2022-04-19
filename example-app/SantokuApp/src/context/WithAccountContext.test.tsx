import {renderHook, WrapperComponent} from '@testing-library/react-hooks';
import {render} from '@testing-library/react-native';
import React from 'react';
import {Text} from 'react-native';

import {AppInitialData} from '../framework/initialize/types';
import {WithAccountContext} from './WithAccountContext';
import {useAccountContext} from './useAccountContext';

const wrapper: WrapperComponent<React.ProviderProps<AppInitialData>> = ({children, value}) => {
  return <WithAccountContext initialData={value}>{children}</WithAccountContext>;
};

describe('WithAccountContext', () => {
  const ChildComponent: React.FC = () => {
    return <Text testID="test">test</Text>;
  };

  it('WithAccountContextを子要素を含めて正常にrenderできること', () => {
    const initialData = {accountData: {account: {accountId: '123456789', deviceTokens: []}}};
    const withAccountContext = render(
      <WithAccountContext initialData={initialData}>
        <ChildComponent />
      </WithAccountContext>,
    );

    expect(withAccountContext.queryByTestId('test')).not.toBeNull();
    expect(withAccountContext).toMatchSnapshot();
  });

  it('初期データにAccountが存在している場合は、AccountContextのisLoggedInがtrueで取得できること', () => {
    const {result} = renderHook(() => useAccountContext(), {
      wrapper,
      initialProps: {value: {accountData: {account: {accountId: '123456789', deviceTokens: []}}}},
    });
    const accountContext = result.current;
    expect(accountContext).toEqual({account: {accountId: '123456789', deviceTokens: []}, isLoggedIn: true});
  });

  it('初期データにAccountが存在しない場合は、AccountContextのisLoggedInがfalseで取得できること', () => {
    const {result} = renderHook(() => useAccountContext(), {
      wrapper,
      initialProps: {value: {accountData: {}}},
    });
    const accountContext = result.current;
    expect(accountContext).toEqual({isLoggedIn: false});
  });
});
