import {useGetTermsService} from 'features/terms/hooks/useGetTermsService';

// 30分間隔で利用規約情報を取得する
const termsRefetchInterval = 1000 * 60 * 30;

export const useTerms = () => {
  const {
    data: termsOfService,
    isFetched: isFetchedTerms,
    isLoadingError: isTermsLoadingError,
  } = useGetTermsService({
    query: {refetchInterval: termsRefetchInterval},
  });
  return {termsOfService, isFetchedTerms: isFetchedTerms && !isTermsLoadingError};
};