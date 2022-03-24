package jp.fintan.mobile.santokuapp.domain.model.system;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AppUpdatesTest {

  @Test
  void needUpdates() {
    var appUpdatesNeeds = createAppUpdatesNeeds("ios", "1.0.0", "1.0.0-a");
    assertTrue(appUpdatesNeeds.needUpdates());
    assertEquals(appUpdatesNeeds.updateMessage().value(), "現在のバージョン(1.0.0-a)ではご利用いただけません。ストアより最新版アプリへのアップデートをお願いします。");
  }

  @Test
  void notNeedUpdates() {
    var appUpdatesNeeds = createAppUpdatesNeeds("ios", "1.0.0", "1.0.0");
    assertFalse(appUpdatesNeeds.needUpdates());
    assertEquals(appUpdatesNeeds.updateMessage().value(), "現在のバージョン(1.0.0)でご利用頂けます。");
  }

  AppUpdates createAppUpdatesNeeds(String appType, String supportedVersion, String appVersion) {
    var appUpdates = new AppSupportedVersion(AppType.fromString(appType).orElseThrow(), new AppVersion(supportedVersion));
    return new AppUpdates(appUpdates, new AppVersion(appVersion));
  }
}
