import React, {useCallback, useRef, useState} from 'react';
import {Animated, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';

import CompositeAnimation = Animated.CompositeAnimation;

export type SnackbarProp = {
  message: string;
  messageTextStyle?: StyleProp<TextStyle>;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  style?: StyleProp<ViewStyle>;
  animatedContainerStyle?: StyleProp<ViewStyle>;
  actionText?: string;
  actionHandler?: () => void;
  actionTextStyle?: StyleProp<TextStyle>;
  autoHideDuration?: number;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  forceFadeOutDuration?: number;
};

export const Snackbar: React.FC<SnackbarProp> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeInAnimationRef = useRef<CompositeAnimation>();
  const fadeOutAnimationRef = useRef<CompositeAnimation>();
  const barrierFadeOutAnimationRef = useRef<CompositeAnimation>();
  const [visibleSnackbarProps, setVisibleSnackbarProps] = useState<SnackbarProp>();

  //TODO リファクタ（適切に関数に切り出しとかしてもうちょっと可読性を高くしたい）
  const show = useCallback(() => {
    setVisibleSnackbarProps(props);
    const fadeInAnimation = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.fadeInDuration,
      useNativeDriver: true,
    });
    fadeInAnimationRef.current = fadeInAnimation;
    fadeInAnimation.start((fadeInResult) => {
      fadeInAnimationRef.current = undefined;
      if (fadeInResult.finished) {
        const fadeOutAnimation = Animated.timing(fadeAnim, {
          toValue: 0,
          delay: props.autoHideDuration,
          duration: props.fadeOutDuration,
          useNativeDriver: true,
        });
        fadeOutAnimationRef.current = fadeOutAnimation;
        fadeOutAnimation.start(() => {
          fadeOutAnimationRef.current = undefined;
          if (!barrierFadeOutAnimationRef) {
            setVisibleSnackbarProps(undefined);
          }
        });
      } else {
        if (!barrierFadeOutAnimationRef) {
          setVisibleSnackbarProps(undefined);
        }
      }
    });
  }, [fadeAnim, props]);

  //TODO リファクタ（適切に関数に切り出しとかしてもうちょっと可読性を高くしたい）
  React.useEffect(() => {
    if (!props.message) {
      return;
    }
    if (barrierFadeOutAnimationRef.current) {
      return;
    }
    if (fadeInAnimationRef.current || fadeOutAnimationRef.current) {
      const barrierFadeOutAnimation = Animated.timing(fadeAnim, {
        toValue: 0,
        duration: props.forceFadeOutDuration,
        useNativeDriver: true,
      });
      barrierFadeOutAnimationRef.current = barrierFadeOutAnimation;
      fadeInAnimationRef.current?.stop();
      fadeOutAnimationRef.current?.stop();
      barrierFadeOutAnimation.start(() => {
        barrierFadeOutAnimationRef.current = undefined;
        setVisibleSnackbarProps(undefined);
        show();
      });
      return;
    }
    show();
  }, [props, fadeAnim, show]);

  const snackbarStyle = StyleSheet.flatten([styles.snackbar, props.style]);

  const animatedViewStyle = StyleSheet.flatten<ViewStyle>([styles.animatedContainer, props.animatedContainerStyle]);
  if (animatedViewStyle?.top === undefined && animatedViewStyle.bottom === undefined) {
    animatedViewStyle.bottom = 50;
  }

  return (
    <>
      {props.children}
      {visibleSnackbarProps && (
        <Animated.View style={StyleSheet.flatten([{opacity: fadeAnim}, animatedViewStyle])}>
          <View style={snackbarStyle}>
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>{visibleSnackbarProps.message}</Text>
            </View>
            {visibleSnackbarProps.actionText && visibleSnackbarProps.actionHandler && (
              <View style={styles.actionContainer}>
                <TouchableOpacity onPress={visibleSnackbarProps.actionHandler}>
                  <Text style={styles.actionText}>{visibleSnackbarProps.actionText}</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </Animated.View>
      )}
    </>
  );
};

Snackbar.defaultProps = {
  autoHideDuration: 4000,
  fadeInDuration: 1000,
  fadeOutDuration: 1000,
  forceFadeOutDuration: 300,
};

const styles = StyleSheet.create({
  animatedContainer: {
    flex: 1,
    position: 'absolute',
    minHeight: 48,
    paddingHorizontal: 10,
    width: '100%',
  },
  snackbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#393939',
  },
  messageContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 10,
  },
  actionContainer: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  messageText: {
    color: 'white',
  },
  actionText: {
    color: '#85A3F1',
  },
});
