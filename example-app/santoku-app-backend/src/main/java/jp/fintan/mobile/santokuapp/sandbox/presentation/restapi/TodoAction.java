package jp.fintan.mobile.santokuapp.sandbox.presentation.restapi;

import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

import javax.validation.constraints.NotNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import jp.fintan.mobile.santokuapp.sandbox.application.TodoNotFoundException;
import jp.fintan.mobile.santokuapp.sandbox.application.service.todo.TodoService;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todo;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoDescription;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoId;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.TodoTitle;
import jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.Todos;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@SystemRepositoryComponent
@Path("/sandbox/todos")
public class TodoAction {
  private static final Logger LOGGER = LoggerManager.get(TodoAction.class);
  private static final Integer PAGE_SIZE = 20;
  private static final Integer MAX_ITEMS = 200;

  private final TodoService todoService;

  public TodoAction(TodoService todoService) {
    this.todoService = todoService;
  }

  @GET
  @Path("/")
  @Produces(MediaType.APPLICATION_JSON)
  public ListTodoResponse list(HttpRequest request, ExecutionContext context) {
    Integer page;
    try {
      String[] pageParameter = request.getParam("page");
      page = Integer.parseInt(pageParameter[0]);
    } catch (Exception e) {
      page = 1;
    }
    Integer lastPage = (int)Math.ceil((double)MAX_ITEMS / PAGE_SIZE);
    Integer nextPage = lastPage > page ? page + 1 : null;
    Todos todos = todoService.listTodo(page);
    return new ListTodoResponse(page, nextPage, todos);
  }

  @POST
  @Path("/")
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public TodoResponse post(HttpRequest request, ExecutionContext context, PostTodoRequest requestBody) {
    TodoTitle title = new TodoTitle(requestBody.title);
    TodoDescription description = new TodoDescription(requestBody.description);
    Todo todo = todoService.createTodo(title, description);
    return new TodoResponse(todo);
  }

  @GET
  @Path("/{id:\\d+}")
  @Produces(MediaType.APPLICATION_JSON)
  public TodoResponse get(HttpRequest request, ExecutionContext context) {
    TodoId todoId = new TodoId(request.getParam("id")[0]);
    Todo todo = todoService.findById(todoId);
    if (todo == null) {
      throw new TodoNotFoundException();
    } else {
      return new TodoResponse(todo);
    }
  }

  @PUT
  @Path("/{id:\\d+}")
  @Consumes(MediaType.APPLICATION_JSON)
  @Produces(MediaType.APPLICATION_JSON)
  public TodoResponse put(HttpRequest request, ExecutionContext context, PutTodoRequest requestBody) {
    TodoId todoId = new TodoId(request.getParam("id")[0]);
    Todo todo = todoService.findById(todoId);
    Todo newTodo = new Todo(
      todo.todoId(),
      requestBody.title != null ? new TodoTitle(requestBody.title) : todo.title(),
      requestBody.description != null ? new TodoDescription(requestBody.description) : todo.description()
    );
    Todo updatedTodo = todoService.updateTodo(newTodo);
    return new TodoResponse(updatedTodo);
  }

  @DELETE
  @Path("/{id:\\d+}")
  public void delete(HttpRequest request, ExecutionContext context) {
    TodoId todoId = new TodoId(request.getParam("id")[0]);
    todoService.deleteTodo(todoId);
    return;
  }

  public static class PostTodoRequest {
    @NotNull
    public String title;

    @NotNull
    public String description;
  }

  public static class PutTodoRequest {
    public String title;

    public String description;
  }

  public static class TodoResponse {
    public final String id;
    public final String title;
    public final String description;

    public TodoResponse(Todo todo) {
      this.id = todo.todoId().value();
      this.title = todo.title().value();
      this.description = todo.description().value();
    }
  }

  public static class ListTodoResponse {
    public final Integer currentPage;
    public final Integer nextPage;
    public final List<TodoResponse> data;

    public ListTodoResponse(Integer currentPage, Integer nextPage, Todos todos) {
      this.currentPage = currentPage;
      this.nextPage = nextPage;
      this.data = todos.value().stream().map(TodoResponse::new).collect(Collectors.toList());
    }
  }
}
