package jp.fintan.mobile.santokuapp.domain.model.account;

import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class Nickname extends StringValue {

  private static final int MAX_LENGTH = 50;

  public Nickname(String value) {
    super(value);
    validateNotBlank(value);
    validateLength(value);
  }

  private static void validateNotBlank(String value) {
    if (value.isBlank()) {
      throw new IllegalArgumentException("Value is blank.");
    }
  }

  private static void validateLength(String value) {
    if (value.codePointCount(0, value.length()) > MAX_LENGTH) {
      throw new IllegalArgumentException(
          String.format("Nickname length is too long. value=[%s]", value));
    }
  }
}
