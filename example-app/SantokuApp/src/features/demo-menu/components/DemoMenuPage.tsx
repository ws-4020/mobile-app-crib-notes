import React from 'react';

import {demoItemKeyExtractor} from '../utils/demoItemKeyExtractor';
import {DemoLinkItemData} from './DemoLinkItem';
import {DemoTemplate} from './DemoTemplate';

type DemoMenuPageProps = {
  items: DemoLinkItemData[];
};

export const DemoMenuPage: React.FC<DemoMenuPageProps> = ({items}) => {
  return <DemoTemplate testID="DemoScreen" items={items} keyExtractor={demoItemKeyExtractor} />;
};
