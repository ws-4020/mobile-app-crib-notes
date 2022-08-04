import {ListTodoParams} from 'features/sandbox/apis/model';
import {useQuery} from 'react-query';

import {getTodoDetails} from './getTodoDetails';

// 直列API呼び出し (GET /todos の後に GET /todos/:id を呼び出し)
// 依存関係のあるAPI呼び出しは処理を1つのQuery Functionにまとめた上でuseQueryを用いる
export const useTodoDetails = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  return useQuery(['useGetTodoDetails', params], () => getTodoDetails(params), {
    enabled: options?.enabled,
  });
};
