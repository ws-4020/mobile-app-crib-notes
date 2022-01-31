package jp.fintan.mobile.santokuapp.sandbox.domain.model.paging;

import java.util.Optional;

public enum SortOrder {
  ASC("asc"),
  DESC("desc");

  private final String value;

  SortOrder(String value) {
    this.value = value;
  }

  public String value() {
    return value;
  }

  public static Optional<SortOrder> fromString(String str) {
    if (str.equalsIgnoreCase("asc")) {
      return Optional.of(SortOrder.ASC);
    } else if (str.equalsIgnoreCase("desc")) {
      return Optional.of(SortOrder.DESC);
    } else {
      return Optional.empty();
    }
  }
}
