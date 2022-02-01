import {ErrorResponse} from 'generated/backend/model';
import {MutationOptions, QueryKey, UseMutationOptions, UseMutationResult, useQueryClient} from 'react-query';

import {ErrorType} from './useCustomInstance';

const useMutationWithResetQueries = <TData = any, TVariable = any>(
  mutation: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<TData, TError, TVariable, TContext> | undefined;
  }) => UseMutationResult<TData, TError, TVariable, TContext>,
  relatedQueryKeys: QueryKey[],
  mutationOptions?: MutationOptions<TData, ErrorType<ErrorResponse>, TVariable, unknown>,
) => {
  const queryClient = useQueryClient();
  const options = {
    mutation: {
      ...mutationOptions,
      onSuccess: async () => {
        await Promise.all(
          relatedQueryKeys?.map(queryKey => {
            return queryClient.resetQueries(queryKey);
          }),
        );
      },
    },
  };
  return mutation(options);
};

export {useMutationWithResetQueries};
