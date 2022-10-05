import React from 'react';

import {Box} from './index';
import {StyledSpacingKeys} from './types';

export const getSpacedChildren = (
  children: React.ReactNode[] | React.ReactNode,
  space: StyledSpacingKeys,
  direction: 'row' | 'column',
): any => {
  let childrenArray = React.Children.toArray(children);

  const spacingProp: object = direction === 'row' ? {pl: space} : {pt: space};
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
