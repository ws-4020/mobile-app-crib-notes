import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Text, TextStyle, ViewStyle} from 'react-native';
import {ReactTestInstance} from 'react-test-renderer';

import {Snackbar} from './Snackbar';

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
}));

jest.useFakeTimers();

function getStyle<T>(instance: ReactTestInstance) {
  return instance.props.style as T;
}

const ChildComponent = () => {
  return <Text testID="text">test</Text>;
};

describe('Snackbar', () => {
  it('Snackbarが正常にrenderできることを確認', () => {
    const renderResult = render(
      <Snackbar message="テストメッセージ">
        <ChildComponent />
      </Snackbar>,
    );

    const {queryByTestId, queryByText, getByTestId} = renderResult;

    expect(queryByTestId('text')).not.toBeNull();
    expect(queryByText('テストメッセージ')).not.toBeNull();

    expect(getStyle<ViewStyle>(getByTestId('snackbarAnimatedView')).opacity).toBe(0);
    expect(renderResult).toMatchSnapshot('render直後');

    jest.advanceTimersByTime(1000);
    expect(getStyle<ViewStyle>(getByTestId('snackbarAnimatedView')).opacity).toBe(1);
    expect(renderResult).toMatchSnapshot('フェードイン後');

    jest.advanceTimersByTime(5000);
    expect(getStyle<ViewStyle>(getByTestId('snackbarAnimatedView')).opacity).toBe(0);
    expect(renderResult).toMatchSnapshot('フェードアウト後');
  });

  it('Snackbar表示中にpropsが更新された場合、フェードアウト後に更新後のpropsでSnackbarが表示されることを確認', async () => {
    const renderResult = render(
      <Snackbar message="初回">
        <ChildComponent />
      </Snackbar>,
    );

    expect(renderResult.queryByText('初回')).not.toBeNull();

    renderResult.update(
      <Snackbar message="２回目">
        <ChildComponent />
      </Snackbar>,
    );

    await waitFor(() => {
      expect(renderResult.queryByText('初回')).not.toBeNull();

      jest.advanceTimersByTime(300);

      expect(renderResult.queryByText('２回目')).not.toBeNull();
    });
  });

  it('Snackbarの表示中に２連続propsが更新された場合、後で更新した方のpropsでSnackbarが表示されることを確認', async () => {
    const renderResult = render(
      <Snackbar message="初回">
        <ChildComponent />
      </Snackbar>,
    );

    expect(renderResult.queryByText('初回')).not.toBeNull();

    renderResult.update(
      <Snackbar message="２回目">
        <ChildComponent />
      </Snackbar>,
    );

    renderResult.update(
      <Snackbar message="３回目">
        <ChildComponent />
      </Snackbar>,
    );

    await waitFor(() => {
      jest.advanceTimersByTime(300);

      expect(renderResult.queryByText('３回目')).not.toBeNull();
    });
  });

  it('Snackbar表示中にpropsでhideを指定した場合、Snackbarが消えること', async () => {
    const renderResult = render(
      <Snackbar message="テストメッセージ">
        <ChildComponent />
      </Snackbar>,
    );

    jest.advanceTimersByTime(1000);
    expect(renderResult.queryByText('テストメッセージ')).not.toBeNull();

    renderResult.update(
      <Snackbar message="テストメッセージ" hide>
        <ChildComponent />
      </Snackbar>,
    );

    await waitFor(() => {
      jest.advanceTimersByTime(300);
      expect(renderResult.queryByText('テストメッセージ')).toBeNull();
    });
  });

  it('Snackbarに指定したpropsがrenderに反映されていること', () => {
    /**
     * 下記項目は対象外
     * - autoHideDuration / fadeInDuration / fadeOutDuration / forceFadeOutDuration / hideFadeOutDuration
     *     テストコードでアニメーション時間を調整できない
     * - actionHandler
     *     setVisibleSnackbarProps()でpropsをセットした時点で、指定したモック関数ではなくなっており、追跡できない
     * - hide
     *     テスト済
     */
    const {queryByText, getByText, getByTestId} = render(
      <Snackbar
        message="テストメッセージ"
        messageTextStyle={{color: 'black'}}
        style={{backgroundColor: 'red'}}
        positionStyle={{bottom: 50}}
        actionText="閉じる"
        actionHandler={() => {}}
        actionTextStyle={{color: 'blue'}}>
        <ChildComponent />
      </Snackbar>,
    );

    jest.advanceTimersByTime(1000);

    expect(queryByText('テストメッセージ')).not.toBeNull();
    expect(getStyle<TextStyle>(getByText('テストメッセージ')).color).toBe('black');
    expect(getStyle<ViewStyle>(getByTestId('snackbarStyleView')).backgroundColor).toBe('red');
    expect(getStyle<ViewStyle>(getByTestId('snackbarAnimatedView')).bottom).toBe(50);
    expect(queryByText('閉じる')).not.toBeNull();
    expect(getStyle<TextStyle>(getByText('閉じる')).color).toBe('blue');
  });
});
