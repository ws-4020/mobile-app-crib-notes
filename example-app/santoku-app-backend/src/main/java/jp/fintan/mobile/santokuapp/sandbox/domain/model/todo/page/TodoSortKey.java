package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page;

import java.util.Optional;

public enum TodoSortKey {
  ID("id"),
  TITLE("title");

  private final String value;

  TodoSortKey(String value) {
    this.value = value;
  }

  public String value() {
    return value;
  }

  public static Optional<TodoSortKey> fromString(String str) {
    if (str.equalsIgnoreCase("id")) {
      return Optional.of(TodoSortKey.ID);
    } else if (str.equalsIgnoreCase("title")) {
      return Optional.of(TodoSortKey.TITLE);
    } else {
      return Optional.empty();
    }
  }
}
