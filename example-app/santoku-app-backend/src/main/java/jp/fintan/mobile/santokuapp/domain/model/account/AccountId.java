package jp.fintan.mobile.santokuapp.domain.model.account;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class AccountId extends StringValue {
  public AccountId(String value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
