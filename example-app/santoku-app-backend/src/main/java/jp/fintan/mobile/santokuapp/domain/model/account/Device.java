package jp.fintan.mobile.santokuapp.domain.model.account;

public class Device {

  private final AccountId id;

  private final DeviceToken deviceToken;

  private final DeviceTokenCreatedAt createdAt;

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
}
