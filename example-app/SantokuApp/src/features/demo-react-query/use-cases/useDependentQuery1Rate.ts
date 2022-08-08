import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';
import {useDependentQuery1ItemType0Query} from '../services/useDependentQuery1ItemType0Query';
import {useDependentQuery1ItemType1Query} from '../services/useDependentQuery1ItemType1Query';

export const useDependentQuery1Rate = () => {
  const itemQuery = useDependentQuery1ItemQuery();
  const itemType0Query = useDependentQuery1ItemType0Query();
  const itemType1Query = useDependentQuery1ItemType1Query();
  const rate =
    itemQuery.isSuccess && itemType0Query.isSuccess
      ? itemType0Query.data.rate
      : itemQuery.isSuccess && itemType1Query.isSuccess
      ? itemType1Query.data.rate
      : undefined;
  return {rate};
};
