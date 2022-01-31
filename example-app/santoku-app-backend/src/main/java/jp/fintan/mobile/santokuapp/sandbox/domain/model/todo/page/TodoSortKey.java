package jp.fintan.mobile.santokuapp.sandbox.domain.model.todo.page;

import java.util.Objects;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class TodoSortKey extends StringValue {
  public static final String DEFAULT_SORT_KEY = "id";

  public TodoSortKey() {
    super(DEFAULT_SORT_KEY);
  }

  public TodoSortKey(String value) {
    // TODO: validate and set input value.
    super(DEFAULT_SORT_KEY);
  }
}
