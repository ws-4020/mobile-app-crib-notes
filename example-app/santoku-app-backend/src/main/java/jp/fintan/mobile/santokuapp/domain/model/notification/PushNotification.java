package jp.fintan.mobile.santokuapp.domain.model.notification;

public class PushNotification {

  private final NotificationTitle title;

  private final NotificationBody body;

  private final PushNotificationType type;

  public PushNotification(
      NotificationTitle title, NotificationBody body, PushNotificationType type) {
    this.title = title;
    this.body = body;
    this.type = type;
  }

  public NotificationTitle title() {
    return title;
  }

  public NotificationBody body() {
    return body;
  }

  public PushNotificationType type() {
    return type;
  }
}
