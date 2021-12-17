package jp.fintan.mobile.santokuapp.domain.model.account;

import java.time.Clock;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import jp.fintan.mobile.santokuapp.domain.model.core.ListValue;

public class Devices extends ListValue<Device> {

  private static final long DEVICE_TOKEN_RENEWAL_DEADLINE_MONTH = 1;

  public Devices(List<Device> value) {
    super(value);
    Objects.requireNonNull(value);
  }

  /**
   * デバイストークンが更新期限を超過しているものを除外します。
   */
  public Devices excludeOverdueRenewals() {
    return new Devices(
        value().stream()
            .filter(
                device ->
                    LocalDateTime.now(Clock.systemUTC())
                            .minusMonths(DEVICE_TOKEN_RENEWAL_DEADLINE_MONTH)
                            .compareTo(device.createdAt().value())
                        < 0)
            .collect(Collectors.toList()));
  }
}
