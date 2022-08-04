/**
 * ログアウトします。
 */
import {hashQueryKey, Query, useMutation, useQueryClient} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

import {logout} from './auth/logout';

const defaultQueryFilters = {predicate: (query: Query) => query.queryHash !== hashQueryKey(['account', 'isLoggedIn'])};

export const useLogout = (queryRemovalFilters: QueryFilters = defaultQueryFilters) => {
  const queryClient = useQueryClient();
  return useMutation(() => logout(queryClient, queryRemovalFilters));
};
