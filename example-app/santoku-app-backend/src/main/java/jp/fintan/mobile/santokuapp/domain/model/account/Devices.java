package jp.fintan.mobile.santokuapp.domain.model.account;

import java.util.List;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class Devices extends ListValue<Device> {

  public Devices(List<Device> value) {
    super(value);
  }

  /** デバイスの更新期限を超過しているものを除外します。 */
  public Devices excludeOverdueRenewals() {
    return new Devices(
        value().stream()
            .filter(device -> !device.isOverdueRenewals())
            .collect(Collectors.toList()));
  }
}
