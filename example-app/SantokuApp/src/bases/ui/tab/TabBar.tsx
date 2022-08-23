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
          return (
            <Tab
              key={index}
              isActive={item.props.isActive ?? index === selectedIndex}
              text={item.props.text}
              onPress={item.props.onPress ?? (() => onChange(index))}
            />
          );
        })}
      </Box>
      {children[selectedIndex].props.children}
    </>
  );
};
