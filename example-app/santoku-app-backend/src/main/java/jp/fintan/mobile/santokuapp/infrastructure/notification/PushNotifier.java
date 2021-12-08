package jp.fintan.mobile.santokuapp.infrastructure.notification;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.FirebaseMessagingException;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.Notification;
import java.util.List;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotification;
import jp.fintan.mobile.santokuapp.domain.model.notification.PushNotificationToken;
import jp.fintan.mobile.santokuapp.domain.repository.PushNotificationRepository;
import nablarch.core.log.Logger;
import nablarch.core.log.LoggerManager;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class PushNotifier implements PushNotificationRepository {
  private static final Logger LOGGER = LoggerManager.get(PushNotifier.class);

  @Override
  public void notifyToDevice(
      PushNotification pushNotification, List<PushNotificationToken> tokens) {
    tokens.forEach(
        token -> {
          // Build message
          Message.Builder messageBuilder = Message.builder();
          messageBuilder.setToken(token.value());

          Notification.Builder notificationBuilder = Notification.builder();
          notificationBuilder.setTitle(pushNotification.title().value());
          notificationBuilder.setBody(pushNotification.body().value());
          Notification notification = notificationBuilder.build();

          messageBuilder.setNotification(notification);
          messageBuilder.putData("type", pushNotification.type().value());
          Message message = messageBuilder.build();

          // Send a message to the device corresponding to the provided token.
          try {
            // Response is a message ID string.
            String response = FirebaseMessaging.getInstance().send(message);
            LOGGER.logInfo("Successfully sent message: " + response);
          } catch (FirebaseMessagingException e) {
            throw new RuntimeException("Failed to send message to Firebase Cloud Messaging.", e);
          }
        });
  }
}
