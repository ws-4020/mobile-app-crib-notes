package jp.fintan.mobile.santokuapp.domain.model.account;

public class Account {

  private final AccountId id;

  private final Nickname nickname;

  private final Devices devices;

  public Account(AccountId id, Nickname nickname, Devices devices) {
    this.id = id;
    this.nickname = nickname;
    this.devices = devices;
  }

  public AccountId accountId() {
    return id;
  }

  public Nickname nickname() {
    return nickname;
  }

  public Devices devices() {
    return devices;
  }
}
