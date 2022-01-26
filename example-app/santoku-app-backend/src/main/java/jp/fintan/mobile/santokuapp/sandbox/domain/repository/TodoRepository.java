package jp.fintan.mobile.santokuapp.sandbox.domain.repository;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;

public interface TodoRepository {

  void add(Todo todo);

  Todo update(Todo todo);

  void remove(TodoId todoId);

  Todos list(Integer page);

  Todo findById(TodoId todoId);

  boolean existsBy(TodoId todoId);
}
