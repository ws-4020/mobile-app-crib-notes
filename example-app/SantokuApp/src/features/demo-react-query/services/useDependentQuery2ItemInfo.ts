import {useQuery} from 'react-query';

import {getItemInfo} from '../utils/item/getItemInfo';

export const useDependentQuery2ItemInfo = () => {
  return useQuery(['itemInfo'], () => getItemInfo(1));
};
