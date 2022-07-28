import {useAmountQuery} from './useAmountQuery';
import {useItemQuery} from './useItemQuery';
import {useItemType0Query} from './useItemType0Query';
import {useItemType1Query} from './useItemType1Query';

export const useIsSuccess = () => {
  const itemQuery = useItemQuery();
  const itemType0Query = useItemType0Query();
  const itemType1Query = useItemType1Query();
  const amountQuery = useAmountQuery();
  const queryResults = [itemQuery, itemType0Query, itemType1Query, amountQuery];
  const isSuccess = queryResults.every(query => query.isSuccess);
  return {isSuccess};
};
