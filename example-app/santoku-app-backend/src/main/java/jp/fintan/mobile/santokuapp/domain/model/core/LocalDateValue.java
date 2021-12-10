package jp.fintan.mobile.santokuapp.domain.model.core;

import java.time.LocalDate;

public abstract class LocalDateValue extends ValueObject<LocalDate> {
  protected LocalDateValue(LocalDate value) {
    super(value);
  }
}
