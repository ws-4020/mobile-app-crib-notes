package jp.fintan.mobile.santokuapp.infrastructure.notification;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.firebase.messaging.AndroidConfig;
import com.google.firebase.messaging.AndroidConfig.Priority;
import com.google.firebase.messaging.ApnsConfig;
import com.google.firebase.messaging.Aps;
import com.google.firebase.messaging.BatchResponse;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.MessagingErrorCode;
import com.google.firebase.messaging.MulticastMessage;
import com.google.firebase.messaging.Notification;
import com.google.firebase.messaging.SendResponse;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ValueObject;
import jp.fintan.mobile.santokuapp.domain.model.notification.FailureDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationResult;
import jp.fintan.mobile.santokuapp.domain.model.notification.SuccessDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.model.notification.UnavailableDeviceTokens;
import jp.fintan.mobile.santokuapp.domain.repository.PushNotificationRepository;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class FcmPushNotifier implements PushNotificationRepository {
  private static final Logger LOGGER = LoggerManager.get(FcmPushNotifier.class);
  // TTLは12時間に設定
  private static final long TTL = 43200;
  // APNSの通知優先度
  private static final String APNS_PRIORITY = "10";
  // APNSの通知優先度
  private static final int MAX_SEND_COUNT = 500;

  @Override
  public PushNotificationResult notifyToDevice(
      PushNotification pushNotification, List<DeviceToken> deviceTokens) {

    final List<DeviceToken> successDeviceTokens = new ArrayList<>();
    final List<DeviceToken> failureDeviceTokens = new ArrayList<>();
    final List<DeviceToken> unavailableDeviceTokens = new ArrayList<>();

    String params = translateParams(pushNotification.params());

    // FCMに1度のリクエストで送信できるMAX数の単位でマルチキャスト送信する
    for (int i = 0; i < deviceTokens.size(); i += MAX_SEND_COUNT) {
      List<DeviceToken> requestFcmTokens =
          deviceTokens.subList(i, Math.min(i + MAX_SEND_COUNT, deviceTokens.size()));

      final List<String> fcmTokens =
          requestFcmTokens.stream().map(ValueObject::value).collect(Collectors.toList());

      MulticastMessage.Builder multicastMessageBuilder = MulticastMessage.builder();
      multicastMessageBuilder.addAllTokens(fcmTokens);
      multicastMessageBuilder.putData("type", pushNotification.type().name());
      if (params != null) {
        multicastMessageBuilder.putData("params", params);
      }
      multicastMessageBuilder.setNotification(createNotification(pushNotification));
      multicastMessageBuilder.setApnsConfig(createApnsConfig());
      multicastMessageBuilder.setAndroidConfig(createAndroidConfig());
      MulticastMessage multicastMessage = multicastMessageBuilder.build();

      try {
        BatchResponse batchResponse =
            FirebaseMessaging.getInstance().sendMulticast(multicastMessage);
        final List<SendResponse> responses = batchResponse.getResponses();
        for (int j = 0; j < responses.size(); j++) {
          final SendResponse response = responses.get(j);
          final DeviceToken fcmToken = requestFcmTokens.get(j);
          if (response.isSuccessful()) {
            LOGGER.logInfo(
                String.format(
                    "Successfully sent message to Firebase Cloud Messaging.. fcmToken=[%s]",
                    fcmToken.value()));
            successDeviceTokens.add(fcmToken);
            continue;
          }

          LOGGER.logWarn(
              String.format(
                  "Failed to sent message to Firebase Cloud Messaging.. fcmToken=[%s]", fcmToken),
              response.getException());

          if (isUnavailableDeviceToken(response)) {
            // 利用されていないトークンの場合
            unavailableDeviceTokens.add(fcmToken);
          }
          failureDeviceTokens.add(fcmToken);
        }
      } catch (FirebaseMessagingException e) {
        LOGGER.logWarn("Failed to sent message to Firebase Cloud Messaging.", e);
        failureDeviceTokens.addAll(requestFcmTokens);
      }
    }

    return new PushNotificationResult(
        new SuccessDeviceTokens(successDeviceTokens),
        new FailureDeviceTokens(failureDeviceTokens),
        new UnavailableDeviceTokens(unavailableDeviceTokens));
  }

  private String translateParams(Map<String, Object> params) {
    if (params != null) {
      try {
        return new ObjectMapper().writeValueAsString(params);
      } catch (JsonProcessingException e) {
        e.printStackTrace();
      }
    }
    return null;
  }

  /**
   * FCMのSDKを利用して、dry-run（実際に送信はしないでリクエストを検証）実行してデバイストークンの検証をします
   * dry-run実行後に、エラーコードが「UNAVAILABLE」「INVALID_ARGUMENT」の場合は不正なデバイストークンとします
   *
   * <p>「INVALID_ARGUMENT」はデバイストークン以外のパラメータが不正の場合も返却されますが、
   * ここで実施するdry-runのリクエストにはデバイストークンしか含めないため、不正なデバイストークン以外では返却されない想定です
   * なお、これら以外のエラーコードに関しては不正なデバイストークンとは判断できないため、検証結果としてtrueを返却します
   *
   * @see <a href="https://firebase.google.com/docs/cloud-messaging/http-server-ref#error-codes">FCM
   *     Downstream message error response code</a>
   * @see <a href="https://firebase.google.com/docs/reference/fcm/rest/v1/ErrorCode">FCM
   *     ErrorCode</a>
   */
  @Override
  public boolean verifyDeviceToken(DeviceToken deviceToken) {
    // デバイストークンのみを指定して、dry-run（実際に送信はしないでリクエストを検証）実行する
    Message.Builder messageBuilder = Message.builder();
    messageBuilder.setToken(deviceToken.value());
    Message message = messageBuilder.build();
    try {
      FirebaseMessaging.getInstance().send(message, true);
    } catch (FirebaseMessagingException e) {
      final MessagingErrorCode errorCode = e.getMessagingErrorCode();
      // FCMに登録されていないデバイストークンの場合は、エラーコード「UNAVAILABLE」が返却される
      // リクエストのパラメータ不正の場合は「INVALID_ARGUMENT」が返却される
      if (errorCode == MessagingErrorCode.UNAVAILABLE
          || errorCode == MessagingErrorCode.INVALID_ARGUMENT) {
        return false;
      }
    }
    return true;
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
    Aps aps = Aps.builder().build();
    apnsConfigBuilder.setAps(aps);
    return apnsConfigBuilder.build();
  }

  private AndroidConfig createAndroidConfig() {

    AndroidConfig.Builder androidConfigBuilder = AndroidConfig.builder();
    androidConfigBuilder.setPriority(Priority.HIGH);
    androidConfigBuilder.setTtl(TTL);
    return androidConfigBuilder.build();
  }

  private boolean isUnavailableDeviceToken(SendResponse response) {
    final FirebaseMessagingException e = response.getException();
    final MessagingErrorCode errorCode = e.getMessagingErrorCode();
    return errorCode == MessagingErrorCode.UNAVAILABLE;
  }
}
