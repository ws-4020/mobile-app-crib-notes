import React from 'react';

import {DemoLinkItemData} from '../DemoLinkItem';
import {DemoTemplate} from '../DemoTemplate';

const keyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();

export type DemoMenuPageProps = {
  items: DemoLinkItemData[];
};

export const DemoMenuPage: React.FC<DemoMenuPageProps> = ({items}) => {
  return <DemoTemplate testID="DemoScreen" items={items} keyExtractor={keyExtractor} />;
};
