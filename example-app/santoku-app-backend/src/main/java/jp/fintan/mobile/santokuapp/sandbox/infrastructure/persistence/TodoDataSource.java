package jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence;

import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageNumber;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.PageSize;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.TotalElements;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.paging.TotalPages;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoDescription;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoTitle;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoLimit;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.cursor.TodoListByCursor;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoListByPage;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page.TodoSortKey;
import jp.fintan.mobile.santokuapp.sandbox.domain.repository.TodoRepository;
import jp.fintan.mobile.santokuapp.sandbox.infrastructure.persistence.entity.TodoEntity;
import nablarch.common.dao.EntityList;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.Pagination;
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
  public TodoListByPage listByPage(PageNumber page, PageSize size, TodoSortKey sort) {
    EntityList<TodoEntity> todoEntities = UniversalDao
      .page(page.value())
      .per(size.value())
      .findAllBySqlFile(
        TodoEntity.class,
        "db.sql.sandbox.todo#find_all_order_by",
        Map.of("sort", sort.value())
      );
    return toTodoListPage(todoEntities);
  }

  @Override
  public TodoListByCursor listByCursor(TodoId cursor, TodoLimit limit) {
    EntityList<TodoEntity> todoEntities;
    if (Objects.nonNull(cursor)) {
      todoEntities = UniversalDao.page(1).per(limit.value()).findAllBySqlFile(
        TodoEntity.class,
        "db.sql.sandbox.todo#find_all_by_cursor",
        Map.of("todoId", cursor.value())
      );
    } else {
      todoEntities = UniversalDao.page(1).per(limit.value()).findAll(TodoEntity.class);
    }
    return toTodoListCursor(todoEntities);
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

  private TodoListByPage toTodoListPage(EntityList<TodoEntity> entities) {
    Pagination pagination = entities.getPagination();
    PageNumber page = new PageNumber((long)pagination.getPageNumber());
    PageSize size = new PageSize((long)pagination.getMax());
    TodoSortKey sort = new TodoSortKey(pagination.getSortId());
    TotalElements totalElements = new TotalElements((long)pagination.getMaxResultCount());
    TotalPages totalPages = new TotalPages((long)pagination.getPageCount());
    Todos content = new Todos(entities.stream().map(this::toTodo).collect(Collectors.toList()));
    return new TodoListByPage(page, size, sort, totalElements, totalPages, content);
  }

  private TodoListByCursor toTodoListCursor(EntityList<TodoEntity> entities) {
    Todos content = new Todos(entities.stream().map(this::toTodo).collect(Collectors.toList()));
    TodoId nextCursor = null;
    if (!content.value().isEmpty()) {
      Todo lastTodo = content.value().get(content.value().size() - 1);
      nextCursor = new TodoId(lastTodo.todoId().value());
    }
    return new TodoListByCursor(nextCursor, content);
  }
}
