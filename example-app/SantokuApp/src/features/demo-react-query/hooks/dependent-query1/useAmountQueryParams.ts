import {useItemQuery} from './useItemQuery';
import {useRate} from './useRate';

export const useAmountQueryParams = () => {
  const itemQuery = useItemQuery();
  const {rate} = useRate();
  const amountQueryParams = itemQuery.data && rate ? {price: itemQuery.data.price, rate} : undefined;
  return {amountQueryParams};
};
