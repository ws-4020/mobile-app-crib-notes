/**
 * Copyright 2023 TIS Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useCallback, useRef, useState} from 'react';
import {Animated, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';

import CompositeAnimation = Animated.CompositeAnimation;

export type SnackbarShowProps = {
  /**
   * Displayed message.
   */
  message: string;
  /**
   * Style of message.
   */
  messageTextStyle?: StyleProp<TextStyle>;
  /**
   * Style to adjust the look of the snackbar.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Adjust the position of the snackbar style.
   */
  positionStyle?: StyleProp<ViewStyle>;
  /**
   * Button text.
   * Placed to the right of the message.
   */
  actionText?: string;
  /**
   * Function called when the user taps the button.
   */
  actionHandler?: () => void;
  /**
   * Style of Button text.
   */
  actionTextStyle?: StyleProp<TextStyle>;
  /**
   * Time from when the snackbar appears to when it starts to fade-out.
   */
  autoHideDuration?: number;
  /**
   * Snackbar fade-in time.
   */
  fadeInDuration?: number;
  /**
   * Snackbar fade-out time.
   */
  fadeOutDuration?: number;
  /**
   * Fade-out time to close the previously displayed snack bar when displaying a new one.
   * This is applied when you try to display another snackbar while a snackbar is being displayed.
   */
  forceFadeOutDuration?: number;
  /**
   * Timestamp
   */
  timestamp?: number;
};

export type SnackbarHideProps = {
  /**
   * Specify when to hide the snackbar.
   */
  hide?: true;
  /**
   * Fade-out time when hide is specified.
   */
  hideFadeOutDuration?: number;
};

export type SnackbarProps = SnackbarShowProps & SnackbarHideProps;

export const SnackbarComponent: React.FC<SnackbarProps> = ({
  autoHideDuration = 4000,
  fadeInDuration = 1000,
  fadeOutDuration = 1000,
  forceFadeOutDuration = 300,
  hideFadeOutDuration = 300,
  ...props
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeInAnimationRef = useRef<CompositeAnimation>();
  const fadeOutAnimationRef = useRef<CompositeAnimation>();
  const barrierFadeOutAnimationRef = useRef<CompositeAnimation>();
  const [visibleSnackbarProps, setVisibleSnackbarProps] = useState<SnackbarShowProps>();

  const animationStart = useCallback(
    (
      animationRef: React.MutableRefObject<CompositeAnimation | undefined>,
      config: Animated.TimingAnimationConfig,
      callback?: Animated.EndCallback,
    ) => {
      const animation = Animated.timing(fadeAnim, config);
      animationRef.current = animation;
      animation.start(result => {
        animationRef.current = undefined;
        if (callback) {
          callback(result);
        }
      });
    },
    [fadeAnim],
  );

  const show = useCallback(() => {
    setVisibleSnackbarProps({
      actionHandler: props.actionHandler,
      actionText: props.actionText,
      actionTextStyle: props.actionTextStyle,
      autoHideDuration,
      fadeInDuration,
      fadeOutDuration,
      forceFadeOutDuration,
      message: props.message,
      messageTextStyle: props.messageTextStyle,
      positionStyle: props.positionStyle,
      style: props.style,
      timestamp: props.timestamp,
    });

    const fadeInAnimationConfig = {
      toValue: 1,
      duration: fadeInDuration,
      useNativeDriver: true,
    };
    animationStart(fadeInAnimationRef, fadeInAnimationConfig, ({finished}) => {
      if (finished) {
        const fadeOutAnimationConfig = {
          toValue: 0,
          delay: autoHideDuration,
          duration: fadeOutDuration,
          useNativeDriver: true,
        };
        animationStart(fadeOutAnimationRef, fadeOutAnimationConfig, () => {
          if (!barrierFadeOutAnimationRef.current) {
            setVisibleSnackbarProps(undefined);
          }
        });
      } else {
        if (!barrierFadeOutAnimationRef.current) {
          setVisibleSnackbarProps(undefined);
        }
      }
    });
  }, [
    animationStart,
    props.actionHandler,
    props.actionText,
    props.actionTextStyle,
    autoHideDuration,
    fadeInDuration,
    fadeOutDuration,
    forceFadeOutDuration,
    props.message,
    props.messageTextStyle,
    props.positionStyle,
    props.style,
    props.timestamp,
  ]);

  const forceFadeout = useCallback(
    (fadeOutDuration?: number, callback?: () => void) => {
      const barrierFadeOutAnimationConfig = {
        toValue: 0,
        duration: fadeOutDuration,
        useNativeDriver: true,
      };

      barrierFadeOutAnimationRef.current?.stop();

      animationStart(barrierFadeOutAnimationRef, barrierFadeOutAnimationConfig, ({finished}) => {
        if (finished) {
          setVisibleSnackbarProps(undefined);
          callback?.();
        }
      });
      fadeInAnimationRef.current?.stop();
      fadeOutAnimationRef.current?.stop();
    },
    [animationStart],
  );

  React.useEffect(() => {
    if (props.hide) {
      forceFadeout(hideFadeOutDuration);
      return;
    }
    if (!props.message) {
      return;
    }
    if (barrierFadeOutAnimationRef.current) {
      forceFadeout(forceFadeOutDuration, show);
      return;
    }
    if (fadeInAnimationRef.current ?? fadeOutAnimationRef.current) {
      forceFadeout(forceFadeOutDuration, show);
      return;
    }
    show();
  }, [show, forceFadeout, props.hide, props.message, hideFadeOutDuration, forceFadeOutDuration]);

  const snackbarStyle = StyleSheet.flatten([styles.snackbar, props.style]);

  const animatedViewStyle = StyleSheet.flatten<ViewStyle>([styles.animatedContainer, props.positionStyle]);
  if (animatedViewStyle?.top === undefined && animatedViewStyle.bottom === undefined) {
    animatedViewStyle.bottom = 20;
  }

  const messageTextStyle = StyleSheet.flatten([styles.messageText, props.messageTextStyle]);
  const actionTextStyle = StyleSheet.flatten([styles.actionText, props.actionTextStyle]);

  if (!visibleSnackbarProps) {
    return null;
  }

  return (
    <Animated.View style={StyleSheet.flatten([{opacity: fadeAnim}, animatedViewStyle])} testID="snackbarAnimatedView">
      <View style={snackbarStyle} testID="snackbarStyleView">
        <View style={styles.messageContainer}>
          <Text style={messageTextStyle}>{visibleSnackbarProps.message}</Text>
        </View>
        {visibleSnackbarProps.actionText && visibleSnackbarProps.actionHandler && (
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={visibleSnackbarProps.actionHandler}>
              <Text style={actionTextStyle}>{visibleSnackbarProps.actionText}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Animated.View>
  );
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
    alignItems: 'center',
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
