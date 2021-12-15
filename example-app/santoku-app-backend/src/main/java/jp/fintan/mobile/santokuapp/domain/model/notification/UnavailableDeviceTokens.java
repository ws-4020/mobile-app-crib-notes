package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.List;
import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class UnavailableDeviceTokens extends ListValue<DeviceToken> {

  public UnavailableDeviceTokens(List<DeviceToken> value) {
    super(value);
    Objects.requireNonNull(value);
  }
}
