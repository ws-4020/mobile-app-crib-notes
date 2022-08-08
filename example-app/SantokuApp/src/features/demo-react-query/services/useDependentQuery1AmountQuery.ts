import {useQuery} from 'react-query';

import {useDependentQuery1AmountQueryParams} from '../use-cases/useDependentQuery1AmountQueryParams';
import {getAmount} from '../utils/item/getAmount';

export const useDependentQuery1AmountQuery = () => {
  const {amountQueryParams} = useDependentQuery1AmountQueryParams();
  return useQuery(['amount', amountQueryParams], () => getAmount(amountQueryParams!), {
    enabled: !!amountQueryParams,
  });
};
