/**
 * ログアウトします。
 */
import {useCallback} from 'react';
import {hashQueryKey, Query, useMutation, useQueryClient} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

import {logout as logoutApi} from '../utils/auth/logout';

const defaultQueryFilters = {predicate: (query: Query) => query.queryHash !== hashQueryKey(['account', 'isLoggedIn'])};

export const useLogout = (queryRemovalFilters: QueryFilters = defaultQueryFilters) => {
  const logoutMutation = useMutation(() => logoutApi());
  const queryClient = useQueryClient();
  const logout = useCallback(async () => {
    await logoutMutation.mutateAsync();
    queryClient.setQueryData(['account', 'isLoggedIn'], false);
    queryClient.removeQueries(queryRemovalFilters);
  }, [logoutMutation, queryClient, queryRemovalFilters]);
  return {logout, isLoading: logoutMutation.isLoading};
};
