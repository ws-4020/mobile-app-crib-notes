import React from 'react';
import {Path} from 'react-native-svg';

import {StyledSvgIconBase, StyledSvgIconBaseProps} from '../common/StyledSvgIconBase';

export type FormatAlignLeftIllustrationProps = StyledSvgIconBaseProps;

export const FormatAlignLeftIllustration = ({size = 'p18', ...rest}: FormatAlignLeftIllustrationProps) => {
  return (
    <StyledSvgIconBase size={size} viewBox="0 0 18 18" fill="none" {...rest}>
      <Path
        d="M11.25 11.25H2.25V12.75H11.25V11.25ZM11.25 5.25H2.25V6.75H11.25V5.25ZM2.25 9.75H15.75V8.25H2.25V9.75ZM2.25 15.75H15.75V14.25H2.25V15.75ZM2.25 2.25V3.75H15.75V2.25H2.25Z"
        fill="#212121"
      />
    </StyledSvgIconBase>
  );
};
