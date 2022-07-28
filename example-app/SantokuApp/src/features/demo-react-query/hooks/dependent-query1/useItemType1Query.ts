import {useQuery} from 'react-query';

import {ItemRate} from '../../types/ItemRate';
import {getItemType1} from '../../utils/item/getItemType1';
import {useItemQuery} from './useItemQuery';

export const useItemType1Query = () => {
  const itemQuery = useItemQuery();
  return useQuery<ItemRate>(['itemType1', itemQuery.data], () => getItemType1(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 1,
  });
};
