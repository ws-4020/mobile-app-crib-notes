package jp.fintan.mobile.santokuapp.domain.model.account;

public class Account {

  private final AccountId id;

  private final UserName userName;

  public Account(AccountId id, UserName userName) {
    this.id = id;
    this.userName = userName;
  }

  public AccountId accountId() {
    return id;
  }

  public UserName userName() {
    return userName;
  }
}
