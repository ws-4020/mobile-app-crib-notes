package jp.fintan.mobile.santokuapp.application.service.account;

import jp.fintan.mobile.santokuapp.domain.model.account.AccountId;
import jp.fintan.mobile.santokuapp.domain.model.account.Device;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceTokenCreatedAt;
import jp.fintan.mobile.santokuapp.domain.repository.DeviceRepository;
import jp.fintan.mobile.santokuapp.domain.repository.PushNotificationRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class DeviceService {

  private final DeviceRepository deviceRepository;
  private final PushNotificationRepository pushNotificationRepository;

  public DeviceService(
      DeviceRepository deviceRepository, PushNotificationRepository pushNotificationRepository) {
    this.deviceRepository = deviceRepository;
    this.pushNotificationRepository = pushNotificationRepository;
  }

  public void registerDevice(AccountId accountId, DeviceToken deviceToken) {
    if (!deviceRepository.existsBy(accountId, deviceToken)) {
      if (pushNotificationRepository.verifyDeviceToken(deviceToken)) {
        Device newDevice = new Device(accountId, deviceToken, DeviceTokenCreatedAt.now());
        deviceRepository.add(newDevice);
      }
    }
  }

  public void deleteDevice(AccountId accountId, DeviceToken deviceToken) {
    deviceRepository.remove(accountId, deviceToken);
  }
}
