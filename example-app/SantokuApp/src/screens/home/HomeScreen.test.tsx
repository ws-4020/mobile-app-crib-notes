import '@testing-library/jest-native/extend-expect';
import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {HomeScreen} from './HomeScreen';

beforeEach(() => {
  jest.useFakeTimers();
});

describe('Home', () => {
  it('マウントされたときに正常にレンダリングされること', () => {
    const app = render(<HomeScreen.component />);
    expect(app.queryByTestId('HomeScreen')).toHaveTextContent('Hello, World!');
    expect(app).toMatchSnapshot();
  });

  it('Demoをタップすると、デモ画面に遷移すること', () => {
    const app = render(<HomeScreen.component />);
    fireEvent.press(app.getByTestId('goToDemoButton'));
    expect(__mocks.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(__mocks.navigation.navigate).toHaveBeenCalledWith('DemoStackNav', {screen: 'Demo'});
  });

  it('Go to instructionsをタップすると、Reactの説明画面に遷移すること', () => {
    const app = render(<HomeScreen.component />);
    fireEvent.press(app.getByTestId('goToInstructionsButton'));
    expect(__mocks.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(__mocks.navigation.navigate).toHaveBeenCalledWith('DemoStackNav', {screen: 'Instructions'});
  });

  it('Application Informationをタップすると、アプリ情報画面に遷移すること', () => {
    const app = render(<HomeScreen.component />);
    fireEvent.press(app.getByTestId('viewApplicationInformationButton'));
    expect(__mocks.navigation.navigate).toHaveBeenCalledTimes(1);
    expect(__mocks.navigation.navigate).toHaveBeenCalledWith('DemoStackNav', {screen: 'AppInfo'});
  });

  it('コンポーネントがマウントされてから200ms経ってからスプラッシュスクリーンが閉じられること', () => {
    render(<HomeScreen.component />);

    jest.advanceTimersByTime(100);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();

    // 200ms経過してから、スプラッシュスクリーンを閉じる
    jest.advanceTimersByTime(200);
    // FIXME: 呼び出される回数が安定しないので、呼ばれたことだけ検証する
    expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();
  });

  it('スプラッシュスクリーンを閉じるのに失敗しても何もしないこと', () => {
    __mocks.expoSplashScreen.hideAsync.mockImplementationOnce(() =>
      Promise.reject(new Error('Splash screen is already closed')),
    );

    const app = render(<HomeScreen.component />);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(__mocks.expoSplashScreen.hideAsync).not.toHaveBeenCalled();

    jest.advanceTimersByTime(200);
    // FIXME: 呼び出される回数が安定しないので、呼ばれたことだけ検証する
    expect(__mocks.expoSplashScreen.hideAsync).toHaveBeenCalled();

    expect(app).toMatchSnapshot();
  });
});
