package jp.fintan.mobile.santokuapp.presentation.restapi.sandbox;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationBody;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationTitle;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationType;
import jp.fintan.mobile.santokuapp.domain.repository.PushNotificationRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.DeviceEntity;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

@SystemRepositoryComponent
@Path("/sandbox/push-notification")
public class PushNotificationTestAction {

  private final PushNotificationRepository pushNotificationRepository;

  public PushNotificationTestAction(PushNotificationRepository pushNotificationRepository) {
    this.pushNotificationRepository = pushNotificationRepository;
  }

  @PUT
  @Path("/all")
  public void all(ExecutionContext context) {

    final List<DeviceEntity> devices = UniversalDao.findAll(DeviceEntity.class);
    final List<DeviceToken> deviceTokens =
        devices.stream()
            .map(deviceEntity -> new DeviceToken(deviceEntity.getDeviceToken()))
            .collect(Collectors.toList());

    final PushNotification pushNotification =
        new PushNotification(
            new NotificationTitle("一斉通知テスト"),
            new NotificationBody("一斉通知を受信できましたか？"),
            PushNotificationType.STARTED_TIMETABLE,
            Map.of("testKey", "testValue"));
    pushNotificationRepository.notifyToDevice(pushNotification, deviceTokens);
  }

  @PUT
  @Path("/{deviceToken}")
  public void ok(ExecutionContext context, HttpRequest request) {
    final DeviceToken deviceToken = new DeviceToken(request.getParam("deviceToken")[0]);

    final PushNotification pushNotification =
        new PushNotification(
            new NotificationTitle("特定デバイス通知テスト"),
            new NotificationBody("特定デバイス通知を受信できましたか？"),
            PushNotificationType.STARTED_TIMETABLE,
            Map.of("testKey", "testValue"));
    pushNotificationRepository.notifyToDevice(pushNotification, List.of(deviceToken));
  }
}
