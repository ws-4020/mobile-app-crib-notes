import {useDependentQuery2ItemInfo} from '../services/useDependentQuery2ItemInfo';

export const useDependentQuery2RefreshUseCase = () => {
  const {refetch} = useDependentQuery2ItemInfo();
  return {refresh: refetch};
};
