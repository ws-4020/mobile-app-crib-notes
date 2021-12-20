package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Device;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceTokenCreatedAt;
import jp.fintan.mobile.santokuapp.domain.model.account.Devices;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotifier;
import jp.fintan.mobile.santokuapp.domain.repository.DeviceRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class DeviceService {

  private final DeviceRepository deviceRepository;
  private final PushNotifier pushNotifier;

  public DeviceService(
      DeviceRepository deviceRepository, PushNotifier pushNotifier) {
    this.deviceRepository = deviceRepository;
    this.pushNotifier = pushNotifier;
  }

  public Devices findByAccountId(AccountId accountId) {
    return deviceRepository.findByAccountId(accountId);
  }

  public void registerDevice(AccountId accountId, DeviceToken deviceToken) {
    if (!deviceRepository.existsBy(accountId, deviceToken)) {
      if (pushNotifier.verifyDeviceToken(deviceToken)) {
        Device newDevice = new Device(accountId, deviceToken, DeviceTokenCreatedAt.now());
        deviceRepository.add(newDevice);
      }
    }
  }

  public void deleteDevice(AccountId accountId, DeviceToken deviceToken) {
    deviceRepository.remove(accountId, deviceToken);
  }
}
