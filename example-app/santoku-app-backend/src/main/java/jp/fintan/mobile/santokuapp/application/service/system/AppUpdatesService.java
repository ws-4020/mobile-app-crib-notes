package jp.fintan.mobile.santokuapp.application.service.system;

import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppUpdatesNeeds;
import jp.fintan.mobile.santokuapp.domain.model.system.AppVersion;
import jp.fintan.mobile.santokuapp.domain.repository.AppUpdatesRepository;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AppUpdatesService {

  private final AppUpdatesRepository appUpdatesRepository;

  public AppUpdatesService(AppUpdatesRepository appUpdatesRepository) {
    this.appUpdatesRepository = appUpdatesRepository;
  }

  public AppUpdatesNeeds askAppUpdatesNeeds(AppType appType, AppVersion appVersion) {
    var appUpdates = appUpdatesRepository.findBy(appType);
    return new AppUpdatesNeeds(appUpdates, appVersion);
  }
}
