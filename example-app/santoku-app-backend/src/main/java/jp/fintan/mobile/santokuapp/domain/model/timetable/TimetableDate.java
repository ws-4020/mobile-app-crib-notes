package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.LocalDate;
import java.util.Objects;

public class TimetableDate {

  private final LocalDate value;

  public TimetableDate(LocalDate value) {
    Objects.requireNonNull(value);

    this.value = value;
  }

  public LocalDate value() {
    return value;
  }
}
