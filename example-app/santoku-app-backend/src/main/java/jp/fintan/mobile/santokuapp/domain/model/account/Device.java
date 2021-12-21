package jp.fintan.mobile.santokuapp.domain.model.account;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

public class Device {

  private final AccountId id;

  private final DeviceToken deviceToken;

  private final DeviceTokenCreatedAt createdAt;

  private static final long DEVICE_TOKEN_RENEWAL_DEADLINE_MONTH = 1;

  public Device(AccountId id, DeviceToken deviceToken, DeviceTokenCreatedAt createdAt) {
    this.id = id;
    this.deviceToken = deviceToken;
    this.createdAt = createdAt;
  }

  public AccountId accountId() {
    return id;
  }

  public DeviceToken deviceToken() {
    return deviceToken;
  }

  public DeviceTokenCreatedAt createdAt() {
    return createdAt;
  }

  /**
   * デバイスの更新期限が超過しているかを判定します。
   *
   * @return 更新期限を超過している場合はtrue、超過していない場合はfalseを返却します。
   */
  public boolean isOverdueRenewals() {
    return 0
        <= LocalDateTime.now(ZoneOffset.UTC)
            .minusMonths(DEVICE_TOKEN_RENEWAL_DEADLINE_MONTH)
            .compareTo(this.createdAt().value());
  }
}
