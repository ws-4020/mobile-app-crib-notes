import React from 'react';

import {DemoLinkItemData} from '../components/DemoLinkItem';
import {DemoTemplate} from '../components/DemoTemplate';
import {demoItemKeyExtractor} from '../utils/demoItemKeyExtractor';

type DemoMenuPageProps = {
  items: DemoLinkItemData[];
};

export const DemoMenuPage: React.FC<DemoMenuPageProps> = ({items}) => {
  return <DemoTemplate testID="DemoScreen" items={items} keyExtractor={demoItemKeyExtractor} />;
};
