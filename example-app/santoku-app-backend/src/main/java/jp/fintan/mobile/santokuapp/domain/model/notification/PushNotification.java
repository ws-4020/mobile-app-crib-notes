package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.Map;

public class PushNotification {

  private final NotificationTitle title;

  private final NotificationBody body;

  private final PushNotificationType type;

  private final Map<String, Object> params;

  public PushNotification(
      NotificationTitle title, NotificationBody body, PushNotificationType type,
      Map<String, Object> params) {
    this.title = title;
    this.body = body;
    this.type = type;
    this.params = params;
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

  public Map<String, Object> params() {
    return params;
  }
}
