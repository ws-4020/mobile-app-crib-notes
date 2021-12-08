package jp.fintan.mobile.santokuapp.domain.repository;

import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationToken;

public interface PushNotificationRepository {
  void notifyToDevice(PushNotification notification, List<PushNotificationToken> tokens);
}
