package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.LongValue;
import jp.fintan.mobile.santokuapp.domain.model.core.StringValue;

public class PushNotificationTtl extends LongValue {

  public PushNotificationTtl(Long value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
