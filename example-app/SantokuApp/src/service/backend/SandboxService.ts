import {
  getGetTodoQueryKey,
  getListTodoByCursorQueryKey,
  getListTodoQueryKey,
  getTodo,
  listTodo,
} from 'generated/sandbox/api';
import {ListTodoParams} from 'generated/sandbox/model';
import {QueryClient} from 'react-query';

export class SandboxService {
  async resetQueries(queryClient: QueryClient, todoId?: number) {
    await queryClient.resetQueries(getListTodoQueryKey());
    await queryClient.resetQueries(getListTodoByCursorQueryKey());
    if (todoId) {
      await queryClient.resetQueries(getGetTodoQueryKey(todoId));
    }
  }

  async getTodoDetails(params?: ListTodoParams) {
    const response = await listTodo(params);
    const todos = response.data.content;
    if (todos) {
      return Promise.all(todos.map(todo => getTodo(todo.id)));
    }
  }
}
