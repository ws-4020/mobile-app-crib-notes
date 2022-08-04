import {useQuery} from 'react-query';

import {ItemRate} from '../types/ItemRate';
import {getItemType0} from '../utils/item/getItemType0';
import {useDependentQuery1ItemQuery} from './useDependentQuery1ItemQuery';

export const useDependentQuery1ItemType0Query = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  return useQuery<ItemRate>(['itemType0', itemQuery.data], () => getItemType0(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 0,
  });
};
