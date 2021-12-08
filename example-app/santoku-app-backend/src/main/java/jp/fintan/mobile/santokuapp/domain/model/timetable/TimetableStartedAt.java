package jp.fintan.mobile.santokuapp.domain.model.timetable;

import java.time.ZonedDateTime;
import java.util.Objects;

public class TimetableStartedAt {

  private final ZonedDateTime value;

  public TimetableStartedAt(ZonedDateTime value) {
    Objects.requireNonNull(value);

    this.value = value;
  }

  public ZonedDateTime value() {
    return value;
  }
}
