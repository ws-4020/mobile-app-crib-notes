package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class PushNotificationType extends StringValue {

  public PushNotificationType(String value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
