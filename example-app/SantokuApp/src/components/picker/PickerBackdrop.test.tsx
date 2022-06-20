import {act, fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {ModalProps, PressableProps, ViewProps} from 'react-native';
import Reanimated from 'react-native-reanimated';

import {DEFAULT_FADE_IN_DURATION, DEFAULT_FADE_OUT_DURATION, DEFAULT_OPACITY, PickerBackdrop} from './PickerBackdrop';

// If advancing a timer changes the state of a component, the timer must be run within an act.
// However, since act is `Thenable`, ESLint will issue a warning if you do not do something like await.
// For convenience, disable the relevant rule in this file.
/* eslint-disable @typescript-eslint/no-floating-promises */

// To get react-native-reanimated v2 animations to work with timer mocks, you need to use the `modern` timer.
// By default, Jest v26 uses `legacy` timer. So if you use `withReanimatedTimer` that use the default timer, animation does not start.
// https://jestjs.io/ja/docs/timer-mocks
jest.useFakeTimers('modern');

// TODO: Jest v27にアップデートできたら、withReanimatedTimerでテストを実装できるか検証する。
//       （JestのバージョンはExpoに依存しているので、Expoでのアップデートを待っている状態）
const startAnimation = () => act(() => jest.advanceTimersByTime(1));

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

describe('PickerBackdrop with `onPress', () => {
  it('should be called on pressed', () => {
    const onPress = jest.fn();
    const sut = render(
      <PickerBackdrop
        isVisible
        onPress={onPress}
        testID="pickerBackDrop"
        pressableProps={{testID: 'pressable'}}
        modalProps={{testID: 'modal'}}
      />,
    );
    fireEvent.press(sut.getByTestId('pressable'));
    expect(onPress).toHaveBeenCalledTimes(1);
    fireEvent(sut.getByTestId('modal'), 'onRequestClose');
    expect(onPress).toHaveBeenCalledTimes(2);
  });
});
//
describe('PickerBackdrop with all props', () => {
  it('should be applied properly', () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const afterFadeIn = jest.fn();
    /**
     * WithTimingConfigのeasingを取得できなかったため、以下のPropsは検証できていません。
     * - fadeIntConfig
     * - fadeOutConfig
     *
     * animatedPropsは取得できなかったため（Snapshot上にも存在していない）、検証できていません
     */
    const sut = render(
      <PickerBackdrop
        isVisible
        testID="animatedView"
        onPress={onPress}
        modalProps={{
          testID: 'modal',
          style: {backgroundColor: 'yellow'},
          statusBarTranslucent: false,
          animationType: 'fade',
          transparent: false,
          presentationStyle: 'fullScreen',
        }}
        pressableProps={{testID: 'pressable', style: {display: 'none'}, onLongPress}}
        animatedProps={{pointerEvents: 'none'}}
        style={{backgroundColor: 'green', borderColor: 'red'}}
        fadeInDuration={200}
        afterFadeIn={afterFadeIn}
      />,
    );
    expect(sut).toMatchSnapshot('PickerBackdrop with all props.');
    const modal = sut.getByTestId('modal');
    const pressable = sut.getByTestId('pressable');
    const animatedView = sut.getByTestId('animatedView');

    // assert modal
    fireEvent(modal, 'onRequestClose');
    const modalProps = modal.props as ModalProps;
    expect(modalProps.visible).toBe(true);
    expect(modalProps.statusBarTranslucent).toBe(false);
    expect(modalProps.animationType).toBe('fade');
    expect(modalProps.transparent).toBe(false);
    expect(modalProps.style).toEqual({backgroundColor: 'yellow'});
    expect(modalProps.presentationStyle).toBe('fullScreen');
    expect(onPress).toHaveBeenCalledTimes(1);

    // assert animatedView
    const animatedViewProps = animatedView.props as Reanimated.AnimateProps<ViewProps>;
    expect(animatedViewProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red', opacity: 0});

    // fadeInDurationで指定した時間の1msc前ではafterFadeInは実行されない
    act(() => jest.advanceTimersByTime(199));
    expect(afterFadeIn).not.toHaveBeenCalled();
    // fadeInDurationで指定した時間経過後は、afterFadeInが実行される
    act(() => jest.advanceTimersByTime(1));
    expect(afterFadeIn).toHaveBeenCalled();

    // assert pressable
    fireEvent.press(pressable);
    fireEvent(pressable, 'onLongPress');
    const pressableProps = pressable.props as PressableProps;
    expect(pressableProps.style).toEqual({bottom: 0, display: 'none', left: 0, position: 'absolute', right: 0, top: 0});
    expect(onPress).toHaveBeenCalledTimes(2);
    expect(onLongPress).toHaveBeenCalledTimes(1);

    //////////////////////////////////////////////////////////////////////////////////
    // 非表示にする
    //////////////////////////////////////////////////////////////////////////////////
    const afterFadeOut = jest.fn();
    sut.update(<PickerBackdrop isVisible={false} afterFadeOut={afterFadeOut} fadeOutDuration={100} />);

    startAnimation();
    // fadeOutDurationで指定した時間の1msc前ではafterFadeOutは実行されない
    act(() => jest.advanceTimersByTime(99));
    expect(afterFadeOut).not.toHaveBeenCalled();
    // fadeOutDurationで指定した時間経過後は、afterFadeOutが実行される
    act(() => jest.advanceTimersByTime(1));
    expect(afterFadeOut).toHaveBeenCalled();
  });
});
