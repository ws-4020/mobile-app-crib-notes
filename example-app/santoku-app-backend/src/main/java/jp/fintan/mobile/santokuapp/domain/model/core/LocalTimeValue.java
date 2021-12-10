package jp.fintan.mobile.santokuapp.domain.model.core;

import java.time.LocalTime;

public abstract class LocalTimeValue extends ValueObject<LocalTime> {
  protected LocalTimeValue(LocalTime value) {
    super(value);
  }
}
