import {useDependentQuery2ItemInfo} from '../services/useDependentQuery2ItemInfo';

export const useDependentQuery2Refresh = () => {
  const {refetch} = useDependentQuery2ItemInfo();
  return {refresh: refetch};
};
