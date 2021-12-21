package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import java.sql.Timestamp;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Device;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceTokenCreatedAt;
import jp.fintan.mobile.santokuapp.domain.model.account.Devices;
import jp.fintan.mobile.santokuapp.domain.repository.DeviceRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.DeviceEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class DeviceDataSource implements DeviceRepository {

  @Override
  public void add(Device device) {
    DeviceEntity deviceEntity = new DeviceEntity();
    deviceEntity.setAccountId(device.accountId().value());
    deviceEntity.setDeviceToken(device.deviceToken().value());
    deviceEntity.setCreatedAt(Timestamp.from(device.createdAt().value().toInstant()));

    UniversalDao.insert(deviceEntity);
  }

  @Override
  public void remove(AccountId accountId, DeviceToken deviceToken) {
    DeviceEntity deviceEntity = new DeviceEntity();
    deviceEntity.setAccountId(accountId.value());
    deviceEntity.setDeviceToken(deviceToken.value());

    UniversalDao.delete(deviceEntity);
  }

  @Override
  public Devices findByAccountId(AccountId accountId) {
    List<DeviceEntity> deviceEntities =
        UniversalDao.findAllBySqlFile(
            DeviceEntity.class,
            "db.sql.device#find_by_account_id",
            Map.of("accountId", accountId.value()));
    return new Devices(deviceEntities.stream().map(this::toDevice).collect(Collectors.toList()));
  }

  @Override
  public boolean existsBy(AccountId accountId, DeviceToken deviceToken) {
    try {
      UniversalDao.findById(DeviceEntity.class, accountId.value(), deviceToken.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }

  private Device toDevice(DeviceEntity deviceEntity) {
    AccountId id = new AccountId(deviceEntity.getAccountId());
    DeviceToken deviceToken = new DeviceToken(deviceEntity.getDeviceToken());
    DeviceTokenCreatedAt deviceTokenCreatedAt =
        new DeviceTokenCreatedAt(
            OffsetDateTime.ofInstant(deviceEntity.getCreatedAt().toInstant(), ZoneId.of("UTC")));

    return new Device(id, deviceToken, deviceTokenCreatedAt);
  }
}
