package jp.fintan.mobile.santokuapp.domain.model.notification;

import java.util.List;
import java.util.Objects;
import jp.fintan.mobile.santokuapp.domain.model.account.DeviceToken;
import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class UnregisteredDeviceTokens extends ListValue<DeviceToken> {

  public UnregisteredDeviceTokens(List<DeviceToken> value) {
    super(value);
  }
}
