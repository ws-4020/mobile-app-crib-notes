import {useQuery} from 'react-query';

import {ItemRate} from '../types/ItemRate';
import {getItemType1} from '../utils/item/getItemType1';
import {useDependentQuery1ItemQuery} from './useDependentQuery1ItemQuery';

export const useDependentQuery1ItemType1Query = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  return useQuery<ItemRate>(['itemType1', itemQuery.data], () => getItemType1(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 1,
  });
};
