package jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence;

import java.util.stream.Collectors;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoDescription;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoTitle;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;
import jp.fintan.mobile.santokuapp.sandbox.domain.repository.TodoRepository;
import jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence.entity.TodoEntity;
import nablarch.common.dao.EntityList;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class TodoDataSource implements TodoRepository {

  @Override
  public void add(Todo todo) {
    TodoEntity todoEntity = new TodoEntity();
    todoEntity.setId(todo.todoId().value());
    todoEntity.setTitle(todo.title().value());
    todoEntity.setDescription(todo.description().value());

    UniversalDao.insert(todoEntity);
  }

  @Override
  public Todo update(Todo todo) {
    TodoEntity todoEntity = new TodoEntity();
    todoEntity.setId(todo.todoId().value());
    todoEntity.setTitle(todo.title().value());
    todoEntity.setDescription(todo.description().value());

    UniversalDao.update(todoEntity);
    return findById(todo.todoId());
  }

  @Override
  public void remove(TodoId todoId) {
    TodoEntity todoEntity = new TodoEntity();
    todoEntity.setId(todoId.value());

    UniversalDao.delete(todoEntity);
  }

  @Override
  public Todos list(Integer page) {
    EntityList<TodoEntity> todoEntities = UniversalDao.findAll(TodoEntity.class);
    return new Todos(todoEntities.stream().map(this::toTodo).collect(Collectors.toList()));
  }

  @Override
  public Todo findById(TodoId todoId) {
    try {
      TodoEntity todoEntity = UniversalDao.findById(TodoEntity.class, todoId.value());
      return toTodo(todoEntity);
    } catch (NoDataException e) {
      return null;
    }
  }

  @Override
  public boolean existsBy(TodoId todoId) {
    try {
      UniversalDao.findById(TodoEntity.class, todoId.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }

  private Todo toTodo(TodoEntity todoEntity) {
    TodoId id = new TodoId(todoEntity.getId());
    TodoTitle title = new TodoTitle(todoEntity.getTitle());
    TodoDescription description = new TodoDescription(todoEntity.getDescription());

    return new Todo(id, title, description);
  }
}
