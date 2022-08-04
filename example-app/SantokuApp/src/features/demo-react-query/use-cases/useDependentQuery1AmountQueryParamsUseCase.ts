import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';
import {useDependentQuery1RateUseCase} from './useDependentQuery1RateUseCase';

export const useDependentQuery1AmountQueryParamsUseCase = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  const {rate} = useDependentQuery1RateUseCase();
  const amountQueryParams = itemQuery.data && rate ? {price: itemQuery.data.price, rate} : undefined;
  return {amountQueryParams};
};
