import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';

export type CloseIllustrationProps = StyledSvgIconBaseProps;

export const CloseIllustration = ({size = 'p24', ...rest}: CloseIllustrationProps) => {
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 24 24" fill="none" {...rest}>
      <Path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#212121"
      />
    </StyledSvgIconBase>
  );
};
