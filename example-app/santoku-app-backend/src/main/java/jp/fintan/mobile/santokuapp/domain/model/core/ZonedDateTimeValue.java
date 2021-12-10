package jp.fintan.mobile.santokuapp.domain.model.core;

import java.time.ZonedDateTime;

public abstract class ZonedDateTimeValue extends ValueObject<ZonedDateTime> {
  protected ZonedDateTimeValue(ZonedDateTime value) {
    super(value);
  }
}
