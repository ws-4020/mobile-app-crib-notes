import {useDependentQuery1ItemQuery} from '../services/useDependentQuery1ItemQuery';

export const useDependentQuery1RefreshUseCase = () => {
  const {refetch} = useDependentQuery1ItemQuery();
  return {refresh: refetch};
};
