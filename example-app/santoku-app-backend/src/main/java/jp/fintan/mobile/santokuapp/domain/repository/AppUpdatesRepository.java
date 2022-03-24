package jp.fintan.mobile.santokuapp.domain.repository;

import jp.fintan.mobile.santokuapp.domain.model.system.AppType;
import jp.fintan.mobile.santokuapp.domain.model.system.AppUpdates;

public interface AppUpdatesRepository {

  AppUpdates findBy(AppType appType);
}
