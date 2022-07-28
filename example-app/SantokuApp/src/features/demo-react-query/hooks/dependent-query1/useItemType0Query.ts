import {useQuery} from 'react-query';

import {ItemRate} from '../../types/ItemRate';
import {getItemType0} from '../../utils/item/getItemType0';
import {useItemQuery} from './useItemQuery';

export const useItemType0Query = () => {
  const itemQuery = useItemQuery();
  return useQuery<ItemRate>(['itemType0', itemQuery.data], () => getItemType0(itemQuery.data!), {
    enabled: itemQuery.isSuccess && itemQuery.data.type === 0,
  });
};
