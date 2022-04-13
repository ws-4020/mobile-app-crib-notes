import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';

import {DEFAULT_FADE_IN_DURATION, DEFAULT_FADE_OUT_DURATION, DEFAULT_OPACITY, PickerBackdrop} from './PickerBackdrop';

// If advancing a timer changes the state of a component, the timer must be run within an act.
// However, since act is `Thenable`, ESLint will issue a warning if you do not do something like await.
// For convenience, disable the relevant rule in this file.
/* eslint-disable @typescript-eslint/no-floating-promises */

// To get react-native-reanimated v2 animations to work with timer mocks, you need to use the `modern` timer.
// By default, Jest v26 uses `legacy` timer. So if you use `withReanimatedTimer` that use the default timer, animation does not start.
// https://jestjs.io/ja/docs/timer-mocks
jest.useFakeTimers('modern');

// コンポーネントの状態変更を契機に開始するアニメーションをテストしたい場合、アニメーションを開始するために1msだけタイマーを進める必要があります。
// 例えば、150msで完了する想定のアニメーションは、タイマーを151ms進めないとアニメーションが完了しません。
// この振る舞いがわかりにくかったので、この関数を用意しています。
// TODO: Jest v27にアップデートできたら、withReanimatedTimerでテストを実装できるか検証する。
//       （JestのバージョンはExpoに依存しているので、Expoでのアップデートを待っている状態）
const startAnimation = () => jest.advanceTimersByTime(1);

describe('PickerBackdrop only with required props', () => {
  it('returns null if not visible', () => {
    const sut = render(<PickerBackdrop isVisible={false} />);
    // PickerBackdropがnullを返していることを確認したいがうまくやる方法が見当たらないので`toJSON`でnullになることを確認する。
    expect(sut.toJSON()).toBeNull();
  });

  it('renders successfully only with required props', () => {
    const sut = render(<PickerBackdrop isVisible testID="backdropAnimated" />);
    const animatedView = sut.getByTestId('backdropAnimated');
    //////////////////////////////////////////////////////////////////////////////////
    // 初期表示
    //////////////////////////////////////////////////////////////////////////////////
    // エラーが起きずにレンダリングされること
    expect(sut).toMatchSnapshot('Before animation started');
    expect(animatedView).toHaveAnimatedStyle({opacity: 0});

    startAnimation();

    // アニメーション中は`opacity`が変化すること
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_IN_DURATION / 2));
    expect(animatedView).toHaveAnimatedStyle({opacity: DEFAULT_OPACITY / 2});
    expect(sut).toMatchSnapshot('Animating (fade in)');

    // アニメーションが完了すると`opacity`が設定値に到達していること
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_IN_DURATION / 2));
    expect(animatedView).toHaveAnimatedStyle({opacity: DEFAULT_OPACITY});
    expect(sut).toMatchSnapshot('Just After fade in animation completed');

    // アニメーションが完了したあとは変化しないこと
    act(() => jest.advanceTimersByTime(10));
    expect(animatedView).toHaveAnimatedStyle({opacity: DEFAULT_OPACITY});
    expect(sut).toMatchSnapshot('Just After fade in animation completed');

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    sut.update(<PickerBackdrop isVisible={false} />);

    startAnimation();

    // アニメーション中は`opacity`が変化すること
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION / 2));
    expect(animatedView).toHaveAnimatedStyle({opacity: DEFAULT_OPACITY / 2});
    expect(sut).toMatchSnapshot('Animating (fade out)');

    // アニメーションが完了するとコンポーネントが消えること
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION / 2));
    expect(sut.container.children).toEqual([]);
    expect(sut).toMatchSnapshot('Just After fade out animation completed');

    // アニメーションが完了した後も少し時間を進めて、何も変わらないことを確認する
    act(() => jest.advanceTimersByTime(10));
    expect(sut.container.children).toEqual([]);
    expect(sut).toMatchSnapshot('Just After fade out animation completed');
  });
});

describe('PickerBackdrop with `afterFadeIn`', () => {
  it('should call `afterFadeIn` just after the fade in animation is completed', () => {
    const afterFadeIn = jest.fn();

    const sut = render(<PickerBackdrop isVisible={false} afterFadeIn={afterFadeIn} />);

    startAnimation();

    // アニメーションの完了直前では呼ばれていないこと
    sut.update(<PickerBackdrop isVisible afterFadeIn={afterFadeIn} />);
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_IN_DURATION - 1));
    expect(afterFadeIn).toHaveBeenCalledTimes(0);

    // アニメーションが完了すると呼ばれること
    act(() => jest.advanceTimersByTime(1));
    expect(afterFadeIn).toHaveBeenCalledTimes(1);
    expect(afterFadeIn).toHaveBeenCalledWith(true);

    // 一度呼ばれた後は、非表示にするなどしても呼ばれないこと
    sut.update(<PickerBackdrop isVisible={false} afterFadeIn={afterFadeIn} />);
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION + 10));
    expect(afterFadeIn).toHaveBeenCalledTimes(1);
  });

  it('should call `afterFadeIn` just after the fade in animation is canceled', () => {
    const afterFadeIn = jest.fn();

    const sut = render(<PickerBackdrop isVisible={false} afterFadeIn={afterFadeIn} />);

    startAnimation();

    // キャンセルされるまでは呼び出されないこと
    sut.update(<PickerBackdrop isVisible afterFadeIn={afterFadeIn} />);
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_IN_DURATION - 1));
    expect(afterFadeIn).toHaveBeenCalledTimes(0);

    // キャンセルされた段階で呼び出されること
    sut.update(<PickerBackdrop isVisible={false} afterFadeIn={afterFadeIn} />);
    startAnimation();
    expect(afterFadeIn).toHaveBeenCalledTimes(1);
    expect(afterFadeIn).toHaveBeenCalledWith(false);

    // キャンセル後に再表示されたときに呼び出されること
    sut.update(<PickerBackdrop isVisible afterFadeIn={afterFadeIn} />);
    startAnimation();
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_IN_DURATION - 1));
    expect(afterFadeIn).toHaveBeenCalledTimes(1);
    act(() => jest.advanceTimersByTime(1));
    expect(afterFadeIn).toHaveBeenCalledTimes(2);
    expect(afterFadeIn).toHaveBeenNthCalledWith(2, true);
  });
});

describe('PickerBackdrop with `afterFadeOut', () => {
  it('should call `afterFadeOut` just after the fade in animation is completed', () => {
    const afterFadeOut = jest.fn();

    // 初期表示時点では呼ばれないこと
    const sut = render(<PickerBackdrop isVisible={false} afterFadeOut={afterFadeOut} />);
    startAnimation();
    expect(afterFadeOut).toHaveBeenCalledTimes(0);

    // 表示アニメーションが完了しても呼ばれないこと
    sut.update(<PickerBackdrop isVisible afterFadeOut={afterFadeOut} />);
    startAnimation();
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_IN_DURATION));
    expect(afterFadeOut).toHaveBeenCalledTimes(0);

    // 非表示アニメーションの完了直前でも呼ばれていないこと
    sut.update(<PickerBackdrop isVisible={false} afterFadeOut={afterFadeOut} />);
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION - 1));
    expect(afterFadeOut).toHaveBeenCalledTimes(0);

    // 非表示アニメーションが完了すると呼ばれること
    act(() => jest.advanceTimersByTime(1));
    expect(afterFadeOut).toHaveBeenCalledTimes(1);
    expect(afterFadeOut).toHaveBeenCalledWith(true);

    // 一度呼ばれた後は、再度表示にするなどしても呼ばれないこと
    sut.update(<PickerBackdrop isVisible afterFadeOut={afterFadeOut} />);
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION + 10));
    expect(afterFadeOut).toHaveBeenCalledTimes(1);
  });

  it('should call `afterFadeOut` just after the fade in animation is canceled', () => {
    const afterFadeOut = jest.fn();

    const sut = render(<PickerBackdrop isVisible afterFadeOut={afterFadeOut} />);

    // キャンセルされるまでは呼び出されないこと
    sut.update(<PickerBackdrop isVisible={false} afterFadeOut={afterFadeOut} />);
    startAnimation();
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION - 1));
    expect(afterFadeOut).toHaveBeenCalledTimes(0);

    // キャンセルされた段階で呼び出されること
    sut.update(<PickerBackdrop isVisible afterFadeOut={afterFadeOut} />);
    startAnimation();
    expect(afterFadeOut).toHaveBeenCalledTimes(1);
    expect(afterFadeOut).toHaveBeenCalledWith(false);

    // キャンセル後に再度非表示にされたときに呼び出されること
    sut.update(<PickerBackdrop isVisible={false} afterFadeOut={afterFadeOut} />);
    startAnimation();
    act(() => jest.advanceTimersByTime(DEFAULT_FADE_OUT_DURATION - 1));
    expect(afterFadeOut).toHaveBeenCalledTimes(1);
    act(() => jest.advanceTimersByTime(1));
    expect(afterFadeOut).toHaveBeenCalledTimes(2);
    expect(afterFadeOut).toHaveBeenNthCalledWith(2, true);
  });
});

describe('PickerBackdrop with `onPress', () => {
  it('should be called on pressed', () => {
    const onPress = jest.fn();
    const sut = render(<PickerBackdrop isVisible onPress={onPress} testID="pickerBackDrop" />);
    sut.getByTestId('pickerBackDrop');
    fireEvent(sut.getByTestId('pickerBackDrop'), 'press');
    // TODO: Add tests
  });
});

describe('PickerBackdrop with all props', () => {
  it('should be applied properly', () => {
    // TODO: Add tests
    const sut = render(
      <PickerBackdrop
        isVisible
        testID=""
        modalProps={{testID: ''}}
        pressableProps={{testID: ''}}
        animatedProps={{testID: ''}}
      />,
    );
  });
});
