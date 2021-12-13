package jp.fintan.mobile.santokuapp.infrastructure.notification;

import com.google.firebase.messaging.AndroidConfig;
import com.google.firebase.messaging.AndroidConfig.Priority;
import com.google.firebase.messaging.ApnsConfig;
import com.google.firebase.messaging.Aps;
import com.google.firebase.messaging.BatchResponse;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.MessagingErrorCode;
import com.google.firebase.messaging.MulticastMessage;
import com.google.firebase.messaging.Notification;
import com.google.firebase.messaging.SendResponse;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.core.ValueObject;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationToken;
import jp.fintan.mobile.santokuapp.domain.repository.PushNotificationRepository;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class PushNotifier implements PushNotificationRepository {
  private static final Logger LOGGER = LoggerManager.get(PushNotifier.class);
  // TTLは12時間に設定
  private static final long TTL = 43200;
  // APNSの通知優先度
  private static final String APNS_PRIORITY = "10";

  @Override
  public void notifyToDevice(
      PushNotification pushNotification, List<PushNotificationToken> tokens) {

    final List<String> fcmTokens =
        tokens.stream().map(ValueObject::value).collect(Collectors.toList());
    // Build message
    MulticastMessage.Builder multicastMessageBuilder = MulticastMessage.builder();
    multicastMessageBuilder.addAllTokens(fcmTokens);
    multicastMessageBuilder.putData("type", pushNotification.type().name());
    multicastMessageBuilder.setNotification(createNotification(pushNotification));
    multicastMessageBuilder.setApnsConfig(createApnsConfig());
    multicastMessageBuilder.setAndroidConfig(createAndroidConfig(pushNotification));
    MulticastMessage multicastMessage = multicastMessageBuilder.build();

    // Send a message to the device corresponding to the provided token.
    try {
      // Response is a message ID string.
      BatchResponse batchResponse = FirebaseMessaging.getInstance().sendMulticast(multicastMessage);
      final List<SendResponse> responses = batchResponse.getResponses();
      for (int i = 0; i < responses.size(); i++) {
        final SendResponse response = responses.get(i);
        final String fcmToken = fcmTokens.get(i);
        if (response.isSuccessful()) {
          LOGGER.logInfo(
              String.format(
                  "Successfully sent message to Firebase Cloud Messaging.. fcmToken=[%s]",
                  fcmToken));
          return;
        }
        error(response, fcmToken);
      }
    } catch (FirebaseMessagingException e) {
      LOGGER.logError("Failed to sent message to Firebase Cloud Messaging.", e);
    }
  }

  private Notification createNotification(PushNotification pushNotification) {
    Notification.Builder notificationBuilder = Notification.builder();
    notificationBuilder.setTitle(pushNotification.title().value());
    notificationBuilder.setBody(pushNotification.body().value());
    return notificationBuilder.build();
  }

  private ApnsConfig createApnsConfig() {
    // APNSは有効期限をエポック秒で指定する必要がある
    final String apnsExpiration = Long.toString(Instant.now().plusSeconds(TTL).getEpochSecond());
    // 指定するキーは以下を参照
    // https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns?language=objc
    ApnsConfig.Builder apnsConfigBuilder = ApnsConfig.builder();
    apnsConfigBuilder.putAllHeaders(
        Map.of("apns-priority", APNS_PRIORITY, "apns-expiration", apnsExpiration));
    Aps aps =Aps.builder().build();
    apnsConfigBuilder.setAps(aps);
    return apnsConfigBuilder.build();
  }

  private AndroidConfig createAndroidConfig(PushNotification pushNotification) {

    AndroidConfig.Builder androidConfigBuilder = AndroidConfig.builder();
    androidConfigBuilder.setPriority(Priority.HIGH);
    androidConfigBuilder.setCollapseKey(pushNotification.type().name());
    androidConfigBuilder.setTtl(TTL);
    return androidConfigBuilder.build();
  }

  private void error(SendResponse response, String fcmToken) {
    final FirebaseMessagingException e = response.getException();
    final MessagingErrorCode errorCode = e.getMessagingErrorCode();
    switch (errorCode) {
      case THIRD_PARTY_AUTH_ERROR:
      case INTERNAL:
      case QUOTA_EXCEEDED:
      case SENDER_ID_MISMATCH:
      case UNAVAILABLE:
        LOGGER.logError(
            String.format(
                "Failed to sent message to Firebase Cloud Messaging.. fcmToken=[%s]", fcmToken),
            e);
        break;
      case INVALID_ARGUMENT:
      case UNREGISTERED:
        LOGGER.logWarn(
            String.format(
                "Failed to sent message to Firebase Cloud Messaging.. fcmToken=[%s]", fcmToken),
            e);
        // TODO: 無効なトークンの削除処理
        break;
    }
  }
}
