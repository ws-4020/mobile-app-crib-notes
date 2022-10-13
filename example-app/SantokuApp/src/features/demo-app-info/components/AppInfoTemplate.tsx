import React from 'react';
import {FlatList} from 'react-native';

import {AppInfoItemData, AppInfoListItem} from './AppInfoListItem';

type AppInfoTemplateProps = {
  items: AppInfoItemData[];
  keyExtractor: (item: AppInfoItemData, index: number) => string;
  testID?: string;
};

export const AppInfoTemplate: React.FC<React.PropsWithChildren<AppInfoTemplateProps>> = ({items, keyExtractor, testID}) => {
  return <FlatList data={items} renderItem={AppInfoListItem} keyExtractor={keyExtractor} testID={testID} />;
};
