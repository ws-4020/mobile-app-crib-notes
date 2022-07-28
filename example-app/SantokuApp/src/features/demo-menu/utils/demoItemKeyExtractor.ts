import {DemoLinkItemData} from '../components/DemoLinkItem';

export const demoItemKeyExtractor = (item: DemoLinkItemData, index: number) => item.to + index.toString();
