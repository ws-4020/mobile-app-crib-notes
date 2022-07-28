import {getTodo, listTodo} from 'features/sandbox/apis/api';
import {ListTodoParams} from 'features/sandbox/apis/model';

export const getTodoDetails = async (params?: ListTodoParams) => {
  const response = await listTodo(params);
  const todos = response.data.content;
  if (todos) {
    return Promise.all(todos.map(todo => getTodo(todo.id)));
  }
};
