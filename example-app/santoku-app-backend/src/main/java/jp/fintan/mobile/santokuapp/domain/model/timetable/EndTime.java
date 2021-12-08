package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.LocalTime;
import java.util.Objects;

public class EndTime {

  private final LocalTime value;

  public EndTime(LocalTime value) {
    Objects.requireNonNull(value);

    this.value = value;
  }

  public LocalTime value() {
    return value;
  }
}
