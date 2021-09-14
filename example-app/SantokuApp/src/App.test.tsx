import '@testing-library/jest-native/extend-expect';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {App} from './App';

// 実際にnavigateさせるので、React Navigationのモックは解除しておく。
jest.unmock('@react-navigation/native');

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('マウントされたときに正常にレンダリングされること', () => {
    const app = render(<App />);
    expect(app.queryByTestId('HomeScreen')).not.toBeNull();
    expect(app).toMatchSnapshot();
  });

  it('Demoをタップすると、デモ画面に遷移すること', () => {
    const app = render(<App />);
    fireEvent.press(app.getByTestId('goToDemoButton'));

    expect(app.queryByTestId('DemoScreen')).not.toBeNull();
    // 【動作確認用】 Stackに残っている画面は取得できるので注意。
    expect(app.queryByTestId('HomeScreen')).not.toBeNull();
  });
});
