import '@testing-library/jest-native/extend-expect';
import 'react-native';
import {render, waitFor} from '@testing-library/react-native';
import React from 'react';

import {App} from './App';

beforeEach(() => {
  // 画面遷移時のアニメーションが、コンポーネントのアンマウント後にステートを更新してしまうようで、
  // テストは成功するものの、エラーログが出力されてしまう。
  // タイマーを使わないようにして、アニメーションを動かさないことで回避しているつもり。
  jest.useFakeTimers();
});

describe('App', () => {
  it('マウントされたときに正常にレンダリングされること', async () => {
    const app = render(<App />);
    await waitFor(() => {
      expect(app.queryByTestId('InitialScreen')).not.toBeNull();
      expect(app).toMatchSnapshot();
    });
  });
});
