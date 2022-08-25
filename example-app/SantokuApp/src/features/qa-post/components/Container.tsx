import {StyledSafeAreaView} from 'bases/ui/common';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

export const Container: React.FC<React.ComponentProps<typeof StyledSafeAreaView>> = props => {
  return (
    <StyledSafeAreaView {...props}>
      {Platform.select({
        ios: (
          <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
            {props.children}
          </KeyboardAvoidingView>
        ),
        default: props.children,
      })}
    </StyledSafeAreaView>
  );
};
