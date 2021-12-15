package jp.fintan.mobile.santokuapp.domain.model.account;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.core.LocalDateTimeValue;

public class DeviceTokenCreatedAt extends LocalDateTimeValue {
  public DeviceTokenCreatedAt(LocalDateTime value) {
    super(value);
    Objects.requireNonNull(value);
  }

  public static DeviceTokenCreatedAt now() {
    // デバイストークンの生成日時は、バックエンド内でしか使用しない
    // バックエンド内でしか使用しない日時は、タイムゾーンやオフセットを持たないで全てUTCとして扱う
    return new DeviceTokenCreatedAt(LocalDateTime.now(Clock.systemUTC()));
  }
}
