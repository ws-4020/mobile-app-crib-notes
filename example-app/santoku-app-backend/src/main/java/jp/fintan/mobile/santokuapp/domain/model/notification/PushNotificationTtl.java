package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.LongValue;

/**
 * Push通知のTTLを秒で指定します。
 */
public class PushNotificationTtl extends LongValue {

  public PushNotificationTtl(Long value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
