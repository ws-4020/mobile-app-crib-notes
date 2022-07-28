import {useQuery} from 'react-query';

import {getAmount} from '../../utils/item/getAmount';
import {useAmountQueryParams} from './useAmountQueryParams';

export const useAmountQuery = () => {
  const {amountQueryParams} = useAmountQueryParams();
  return useQuery(['amount', amountQueryParams], () => getAmount(amountQueryParams!), {
    enabled: !!amountQueryParams,
  });
};
