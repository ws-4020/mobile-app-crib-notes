import {useListTodo as useListTodoApi} from 'features/sandbox/apis/api';
import {ListTodoParams} from 'features/sandbox/apis/model/listTodoParams';

export const useListTodo = (params?: ListTodoParams, options?: {enabled: boolean}) => {
  return useListTodoApi(params, {
    query: {
      enabled: options?.enabled,
    },
  });
};
