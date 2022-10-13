import React from 'react';

import {Box} from './index';
import {StyledSpacingKeys} from './types';

export const StyledSpace: React.FC<React.PropsWithChildren<{
  height?: StyledSpacingKeys;
  width?: StyledSpacingKeys;
}>> = ({height, width}) => {
  return <Box pl={width} pt={height} />;
};
