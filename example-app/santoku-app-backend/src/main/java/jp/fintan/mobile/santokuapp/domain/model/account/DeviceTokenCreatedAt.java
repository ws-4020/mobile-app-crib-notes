package jp.fintan.mobile.santokuapp.domain.model.account;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import jp.fintan.mobile.santokuapp.domain.model.core.LocalDateTimeValue;

public class DeviceTokenCreatedAt extends LocalDateTimeValue {
  public DeviceTokenCreatedAt(LocalDateTime value) {
    super(value);
  }

  public static DeviceTokenCreatedAt now() {
    // デバイストークンの生成日時は、バックエンド内でしか使用しない
    // バックエンド内でしか使用しない日時は、タイムゾーンやオフセットを持たないで全てUTCとして扱う
    return new DeviceTokenCreatedAt(LocalDateTime.now(ZoneOffset.UTC));
  }
}
