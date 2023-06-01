package jp.fintan.mobile.santokuapp.domain.model.notification;

public class PushNotification {

  private final NotificationTitle title;

  private final NotificationBody body;

  private final PushNotificationCollapseKey collapseKey;

  private final PushNotificationData data;

  private final PushNotificationBadge badge;

  private final PushNotificationContentAvailable contentAvailable;

  private final PushNotificationPriority priority;

  private final PushNotificationInterruptionLevel interruptionLevel;

  private final PushNotificationRelevanceScore relevanceScore;

  private final PushNotificationNotificationCount notificationCount;

  private final PushNotificationChannelId channelId;

  private final PushNotificationTtl ttl;

  public PushNotification(
      NotificationTitle title,
      NotificationBody body,
      PushNotificationCollapseKey collapseKey,
      PushNotificationData data,
      PushNotificationBadge badge,
      PushNotificationContentAvailable contentAvailable,
      PushNotificationPriority priority,
      PushNotificationInterruptionLevel interruptionLevel,
      PushNotificationRelevanceScore relevanceScore,
      PushNotificationNotificationCount notificationCount,
      PushNotificationChannelId channelId,
      PushNotificationTtl ttl) {
    this.title = title;
    this.body = body;
    this.collapseKey = collapseKey;
    this.data = data;
    this.badge = badge;
    this.contentAvailable = contentAvailable;
    this.priority = priority;
    this.interruptionLevel = interruptionLevel;
    this.relevanceScore = relevanceScore;
    this.notificationCount = notificationCount;
    this.channelId = channelId;
    this.ttl = ttl;
  }

  public NotificationTitle title() {
    return title;
  }

  public NotificationBody body() {
    return body;
  }

  public PushNotificationCollapseKey collapseKey() {
    return collapseKey;
  }

  public PushNotificationData data() {
    return data;
  }

  public PushNotificationBadge badge() {
    return badge;
  }

  public PushNotificationContentAvailable contentAvailable() {
    return contentAvailable;
  }

  public PushNotificationPriority priority() {
    return priority;
  }

  public PushNotificationInterruptionLevel interruptionLevel() {
    return interruptionLevel;
  }

  public PushNotificationRelevanceScore relevanceScore() {
    return relevanceScore;
  }

  public PushNotificationNotificationCount notificationCount() {
    return notificationCount;
  }

  public PushNotificationChannelId channelId() {
    return channelId;
  }

  public PushNotificationTtl ttl() {
    return ttl;
  }
}
