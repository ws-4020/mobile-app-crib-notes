import {ReduceMotion} from 'react-native-reanimated';

// WORKAROUND: React Native ReanimatedのKeyframeを引数として受ける際に利用できる適切な型がなかったので、独自に定義して利用しています。

export interface ReanimatedKeyframe {
  duration(durationMs: number): this;
  delay(delayMs: number): this;
  reduceMotion(reduceMotionV: ReduceMotion): this;
  withCallback(callback: (finished: boolean) => void): this;
}
