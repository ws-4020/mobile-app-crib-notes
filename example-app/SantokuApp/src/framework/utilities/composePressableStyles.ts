import {PressableProps, PressableStateCallbackType} from 'react-native';

type PressableStyle = PressableProps['style'];

export const composePressableStyles = (style: PressableStyle | PressableStyle[]) => {
  if (typeof style === 'function') return style;
  if (Array.isArray(style)) {
    return (state: PressableStateCallbackType) => {
      return style.map(sty => {
        return typeof sty === 'function' ? sty(state) : sty;
      });
    };
  }
  return style;
};
