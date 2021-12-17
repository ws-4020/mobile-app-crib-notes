package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.account.Account;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Device;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceTokenCreatedAt;
import jp.fintan.mobile.santokuapp.domain.model.account.Devices;
import jp.fintan.mobile.santokuapp.domain.model.account.Nickname;
import jp.fintan.mobile.santokuapp.domain.repository.AccountRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.AccountEntity;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.DeviceEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.db.connection.AppDbConnection;
import nablarch.core.db.connection.DbConnectionContext;
import nablarch.core.db.statement.ParameterizedSqlPStatement;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AccountDataSource implements AccountRepository {

  @Override
  public void add(Account account) {
    AccountEntity accountEntity = new AccountEntity();
    accountEntity.setAccountId(account.accountId().value());
    accountEntity.setNickname(account.nickname().value());

    UniversalDao.insert(accountEntity);
  }

  @Override
  public void remove(AccountId accountId) {
    // アカウントIDを条件にdeviceテーブルから削除する
    // 1つのSQLで複数削除をUniversalDaoの機能では実現できなかったので、JDBCラッパーを使用する
    Map<String, String> condition = Map.of("accountId", accountId.value());
    AppDbConnection connection = DbConnectionContext.getConnection();
    ParameterizedSqlPStatement statement =
        connection.prepareParameterizedSqlStatementBySqlId(
            "db.sql.device#delete_by_account_id", condition);
    statement.executeUpdateByMap(condition);

    AccountEntity accountEntity = new AccountEntity();
    accountEntity.setAccountId(accountId.value());

    UniversalDao.delete(accountEntity);
  }

  @Override
  public Account findById(AccountId accountId) {
    try {
      AccountEntity accountEntity = UniversalDao.findById(AccountEntity.class, accountId.value());
      List<DeviceEntity> deviceEntities =
          UniversalDao.findAllBySqlFile(
              DeviceEntity.class,
              "db.sql.device#find_by_account_id",
              Map.of("accountId", accountId.value()));
      return toAccount(accountEntity, deviceEntities);
    } catch (NoDataException e) {
      return null;
    }
  }

  @Override
  public boolean existsBy(AccountId accountId) {
    try {
      UniversalDao.findById(AccountEntity.class, accountId.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }

  private Account toAccount(AccountEntity accountEntity, List<DeviceEntity> deviceEntities) {
    AccountId id = new AccountId(accountEntity.getAccountId());
    Nickname nickname = new Nickname(accountEntity.getNickname());
    Devices devices =
        new Devices(deviceEntities.stream().map(this::toDevice).collect(Collectors.toList()));

    return new Account(id, nickname, devices);
  }

  private Device toDevice(DeviceEntity deviceEntity) {
    AccountId id = new AccountId(deviceEntity.getAccountId());
    DeviceToken deviceToken = new DeviceToken(deviceEntity.getDeviceToken());
    DeviceTokenCreatedAt deviceTokenCreatedAt =
        new DeviceTokenCreatedAt(deviceEntity.getCreatedAt().toLocalDateTime());

    return new Device(id, deviceToken, deviceTokenCreatedAt);
  }
}
