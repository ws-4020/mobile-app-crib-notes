package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import java.sql.Timestamp;
import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Device;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
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
    deviceEntity.setCreatedAt(Timestamp.valueOf(device.createdAt().value()));

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
  public boolean existsBy(AccountId accountId, DeviceToken deviceToken) {
    try {
      UniversalDao.findById(DeviceEntity.class, accountId.value(), deviceToken.value());
      return true;
    } catch (NoDataException e) {
      return false;
    }
  }
}
