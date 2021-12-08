package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationBody;
import jp.fintan.mobile.santokuapp.domain.model.notification.NotificationTitle;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationToken;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationType;
import jp.fintan.mobile.santokuapp.domain.model.team.TeamId;
import jp.fintan.mobile.santokuapp.domain.repository.PushNotificationRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class TimetableStartNotifier {
  private final PushNotificationRepository pushNotificationRepository;

  public TimetableStartNotifier(PushNotificationRepository pushNotificationRepository) {
    this.pushNotificationRepository = pushNotificationRepository;
  }

  public void notify(TeamId teamId, Timetable timetable) {
    // TODO: チームに所蔵するメンバーのトークンを取得
    final List<PushNotificationToken> tokens = List.of(new PushNotificationToken("1234567890"));
    pushNotificationRepository.notifyToDevice(
        new PushNotification(
            new NotificationTitle("本日の時間割の開始"),
            new NotificationBody(timetable.timetableName() + "が開始されました"),
            new PushNotificationType("startedTimetable")),
        tokens);
  }
}
