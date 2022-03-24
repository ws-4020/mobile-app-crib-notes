package jp.fintan.mobile.santokuapp.domain.model.system;

public class AppUpdatesNeeds {

  private final AppUpdates appUpdates;

  private final AppVersion appVersion;

  public AppUpdatesNeeds(AppUpdates appUpdates, AppVersion appVersion) {
    this.appUpdates = appUpdates;
    this.appVersion = appVersion;
  }

  public boolean needUpdates() {
    return appVersion.isLowerThan(appUpdates.supportedVersion());
  }

  public UpdateMessage updateMessage() {
    if (needUpdates()) {
      return UpdateMessage.createUpdateRequestMessage(appVersion);
    } else {
      return UpdateMessage.createNotNeedMessage(appVersion);
    }
  }
}
