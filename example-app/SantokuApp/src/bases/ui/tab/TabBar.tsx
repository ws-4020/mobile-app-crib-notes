import React from 'react';

import {Box} from '../common';
import {Tab, TabProps} from './Tab';

export type TabBarProps = {
  selectedIndex: number;
  onChange: (index: number) => void;
};

export const TabBar: React.FC<TabBarProps> = ({children: source, selectedIndex, onChange}) => {
  const children = React.Children.toArray(source) as React.ReactElement<TabProps>[];
  return (
    <>
      <Box flexDirection="row">
        {children.map((item, index) => {
          const isActive = item.props.isActive ?? index === selectedIndex;
          return (
            <Tab
              key={index}
              isActive={item.props.isActive ?? isActive}
              text={item.props.text}
              onPress={item.props.onPress ?? !isActive ? () => onChange(index) : undefined}
            />
          );
        })}
      </Box>
      {children[selectedIndex].props.children}
    </>
  );
};
