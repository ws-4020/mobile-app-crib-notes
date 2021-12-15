package jp.fintan.mobile.santokuapp.domain.model.core;

import java.time.LocalDateTime;

public abstract class LocalDateTimeValue extends ValueObject<LocalDateTime> {
  protected LocalDateTimeValue(LocalDateTime value) {
    super(value);
  }
}
