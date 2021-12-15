package jp.fintan.mobile.santokuapp.domain.model.account;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class DeviceToken extends StringValue {

  public DeviceToken(String value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
