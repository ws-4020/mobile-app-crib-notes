import {useDependentQuery1AmountQuery} from '../services/useDependentQuery1AmountQuery';
import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';
import {useDependentQuery1ItemType0Query} from '../services/useDependentQuery1ItemType0Query';
import {useDependentQuery1ItemType1Query} from '../services/useDependentQuery1ItemType1Query';

export const useDependentQuery1IsRefetching = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  const itemType0Query = useDependentQuery1ItemType0Query();
  const itemType1Query = useDependentQuery1ItemType1Query();
  const amountQuery = useDependentQuery1AmountQuery();
  const queryResults = [itemQuery, itemType0Query, itemType1Query, amountQuery];
  const isRefetching = queryResults.some(query => query.isRefetching);
  return {isRefetching};
};
