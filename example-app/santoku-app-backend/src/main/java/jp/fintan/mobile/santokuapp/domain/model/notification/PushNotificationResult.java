package jp.fintan.mobile.santokuapp.domain.model.notification;

public class PushNotificationResult {

  private final SuccessDeviceTokens successDeviceTokens;

  private final FailureDeviceTokens failureDeviceTokens;

  private final UnavailableDeviceTokens unavailableDeviceTokens;

  public PushNotificationResult(
      SuccessDeviceTokens successDeviceTokens,
      FailureDeviceTokens failureDeviceTokens,
      UnavailableDeviceTokens unavailableDeviceTokens) {
    this.successDeviceTokens = successDeviceTokens;
    this.failureDeviceTokens = failureDeviceTokens;
    this.unavailableDeviceTokens = unavailableDeviceTokens;
  }

  public SuccessDeviceTokens successDeviceTokens() {
    return successDeviceTokens;
  }

  public FailureDeviceTokens failureDeviceTokens() {
    return failureDeviceTokens;
  }

  public UnavailableDeviceTokens invalidDeviceTokens() {
    return unavailableDeviceTokens;
  }
}
