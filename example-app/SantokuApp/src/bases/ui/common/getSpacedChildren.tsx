import React from 'react';

import {Box} from './index';
import {StyledSpacingKeys} from './types';

export const getSpacedChildren = (
  children: React.ReactNode[] | React.ReactNode,
  space: StyledSpacingKeys,
  axis: 'X' | 'Y',
): any => {
  let childrenArray = React.Children.toArray(children);

  const spacingProp: object = {
    ...(axis === 'X' ? {pl: space} : {pt: space}),
  };
  childrenArray = childrenArray.map((child, index) => {
    return (
      <React.Fragment key={`spaced-child-${index}`}>
        {child}
        {index < childrenArray.length - 1 && <Box {...spacingProp} />}
      </React.Fragment>
    );
  });

  return childrenArray;
};
