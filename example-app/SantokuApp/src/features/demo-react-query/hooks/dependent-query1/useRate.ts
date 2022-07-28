import {useItemQuery} from './useItemQuery';
import {useItemType0Query} from './useItemType0Query';
import {useItemType1Query} from './useItemType1Query';

export const useRate = () => {
  const itemQuery = useItemQuery();
  const itemType0Query = useItemType0Query();
  const itemType1Query = useItemType1Query();
  const rate =
    itemQuery.isSuccess && itemType0Query.isSuccess
      ? itemType0Query.data.rate
      : itemQuery.isSuccess && itemType1Query.isSuccess
      ? itemType1Query.data.rate
      : undefined;
  return {rate};
};
