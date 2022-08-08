import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';
import {useDependentQuery1Rate} from './useDependentQuery1Rate';

export const useDependentQuery1AmountQueryParams = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  const {rate} = useDependentQuery1Rate();
  const amountQueryParams = itemQuery.data && rate ? {price: itemQuery.data.price, rate} : undefined;
  return {amountQueryParams};
};
