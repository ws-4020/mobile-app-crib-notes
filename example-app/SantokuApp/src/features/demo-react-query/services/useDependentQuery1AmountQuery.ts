import {useQuery} from 'react-query';

import {useDependentQuery1AmountQueryParamsUseCase} from '../use-cases/useDependentQuery1AmountQueryParamsUseCase';
import {getAmount} from '../utils/item/getAmount';

export const useDependentQuery1AmountQuery = () => {
  const {amountQueryParams} = useDependentQuery1AmountQueryParamsUseCase();
  return useQuery(['amount', amountQueryParams], () => getAmount(amountQueryParams!), {
    enabled: !!amountQueryParams,
  });
};
