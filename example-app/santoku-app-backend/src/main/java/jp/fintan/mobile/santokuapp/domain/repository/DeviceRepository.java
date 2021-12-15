package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Device;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;

public interface DeviceRepository {
  void add(Device device);
  void remove(AccountId accountId, DeviceToken deviceToken);
  boolean existsBy(AccountId accountId, DeviceToken deviceToken);
}
