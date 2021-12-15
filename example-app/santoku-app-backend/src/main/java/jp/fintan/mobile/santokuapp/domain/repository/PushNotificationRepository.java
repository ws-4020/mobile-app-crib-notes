package jp.fintan.mobile.santokuapp.domain.repository;

import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationResult;

public interface PushNotificationRepository {
  PushNotificationResult notifyToDevice(PushNotification notification, List<DeviceToken> deviceTokens);
  boolean verifyDeviceToken(DeviceToken deviceToken);
}
