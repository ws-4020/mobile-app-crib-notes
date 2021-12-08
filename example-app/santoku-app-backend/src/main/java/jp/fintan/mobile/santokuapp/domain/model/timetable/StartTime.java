package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.LocalTime;
import java.util.Objects;

public class StartTime {

  private final LocalTime value;

  public StartTime(LocalTime value) {
    Objects.requireNonNull(value);

    this.value = value;
  }

  public LocalTime value() {
    return value;
  }
}
