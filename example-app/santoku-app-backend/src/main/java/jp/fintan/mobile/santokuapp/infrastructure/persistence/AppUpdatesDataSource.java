package jp.fintan.mobile.santokuapp.infrastructure.persistence;

import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppUpdates;
import jp.fintan.mobile.santokuapp.domain.model.system.AppVersion;
import jp.fintan.mobile.santokuapp.domain.repository.AppUpdatesRepository;
import jp.fintan.mobile.santokuapp.infrastructure.persistence.entity.AppUpdatesEntity;
import nablarch.common.dao.NoDataException;
import nablarch.common.dao.UniversalDao;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;

@SystemRepositoryComponent
public class AppUpdatesDataSource implements AppUpdatesRepository {

  @Override
  public AppUpdates findBy(AppType appType) {
    try {
      AppUpdatesEntity appUpdatesEntity = UniversalDao.findById(AppUpdatesEntity.class, appType.value());
      return toAppUpdates(appUpdatesEntity);
    } catch (NoDataException e) {
      return null;
    }
  }

  private AppUpdates toAppUpdates(AppUpdatesEntity appUpdatesEntity) {
    AppType appType = AppType.fromString(appUpdatesEntity.getAppType()).get();
    AppVersion supportedVersion = new AppVersion(appUpdatesEntity.getSupportedVersion());

    return new AppUpdates(appType, supportedVersion);
  }
}
