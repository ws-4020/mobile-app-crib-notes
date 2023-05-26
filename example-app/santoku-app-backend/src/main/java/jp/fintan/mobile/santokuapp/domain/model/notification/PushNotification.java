package jp.fintan.mobile.santokuapp.domain.model.notification;

public class PushNotification {

  private final NotificationTitle title;

  private final NotificationBody body;

  private final PushNotificationBadge badge;

  private final PushNotificationCollapseKey collapseKey;

  private final PushNotificationData data;

  private final PushNotificationContentAvailable contentAvailable;

  private final PushNotificationPriority priority;

  private final PushNotificationInterruptionLevel interruptionLevel;

  private final PushNotificationRelevanceScore relevanceScore;

  private final PushNotificationChannelId channelId;

  private final PushNotificationTtl ttl;

  public PushNotification(
      NotificationTitle title,
      NotificationBody body,
      PushNotificationBadge badge,
      PushNotificationCollapseKey collapseKey,
      PushNotificationData data,
      PushNotificationContentAvailable contentAvailable,
      PushNotificationPriority priority,
      PushNotificationInterruptionLevel interruptionLevel,
      PushNotificationRelevanceScore relevanceScore,
      PushNotificationChannelId channelId,
      PushNotificationTtl ttl) {
    this.title = title;
    this.body = body;
    this.badge = badge;
    this.collapseKey = collapseKey;
    this.data = data;
    this.contentAvailable = contentAvailable;
    this.priority = priority;
    this.interruptionLevel = interruptionLevel;
    this.relevanceScore = relevanceScore;
    this.channelId = channelId;
    this.ttl = ttl;
  }

  public NotificationTitle title() {
    return title;
  }

  public NotificationBody body() {
    return body;
  }

  public PushNotificationBadge badge() {
    return badge;
  }

  public PushNotificationCollapseKey collapseKey() {
    return collapseKey;
  }

  public PushNotificationData data() {
    return data;
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

  public PushNotificationChannelId channelId() {
    return channelId;
  }

  public PushNotificationTtl ttl() {
    return ttl;
  }
}
